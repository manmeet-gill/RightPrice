import pickle
import os

import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split

from .datautil import *

def predict(brand, colour, condition, contract, memory, mobos, model):
    mem = np.ndarray(1)
    try:
        mem[0] = int(memory.split('gb')[0])
    except AttributeError:
        mem[0] = 0
    except ValueError:
        mem[0] = 0

    XData = []
    x = []
    x.append(switcherBrand.get(brand.strip().lower(), 0))
    x.append(switcherColour.get(colour.strip().lower(), 0))
    x.append(switcherCondition.get(condition.strip().lower(), 3))
    x.append(switcherContract.get(contract.strip().lower(), 0))
    x.append(switcherMobos.get(mobos.strip().lower(), 0))
    x.append(switcherModel.get(model.strip().lower(), 0))
    XData.append(x)
    XData = np.array(XData)

    dataTemp = XData[:, 0]
    brand = np.zeros((len(dataTemp), len(switcherBrand) + 1))
    brand[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 1]
    color = np.zeros((len(dataTemp), len(switcherColour) + 1))
    color[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 2]
    condition = np.zeros((len(dataTemp), len(switcherCondition) + 1))
    condition[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 3]
    contract = np.zeros((len(dataTemp), len(switcherContract) + 1))
    contract[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 4]
    mobOs = np.zeros((len(dataTemp), len(switcherMobos) + 1))
    mobOs[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 5]
    model = np.zeros((len(dataTemp), len(switcherModel) + 1))
    model[np.arange(len(dataTemp)), dataTemp] = 1

    mem = mem.reshape((-1,1))

    # adding data
    print("Creating data partitions...")
    all_data = np.concatenate((brand,color,condition,contract,mobOs,model,mem),axis=1)

    BASE_DIR = os.path.dirname(os.path.dirname(__file__))
    filename = BASE_DIR + '/engin/finalized_model.sav'
    loaded_classifiers = pickle.load(open(filename, 'rb'))

    y_hat = loaded_classifiers.predict(all_data)
    y_nn = loaded_classifiers.kneighbors(all_data, return_distance=False)
    print(str(y_nn))
    return y_hat[-1], y_nn[0]

def loaddata():
    # load data from csv
    print("Load data...")
    BASE_DIR = os.path.dirname(os.path.dirname(__file__))
    filename = BASE_DIR + '/engin/dataset.csv'
    data = pd.read_csv(filename, keep_default_na=False)
    dataset = data.values[:, :]

    # memory and prices parse to integer
    print("Preprocessing data...")
    prices = np.ndarray(dataset[:, -1].shape)
    mem = np.ndarray(dataset[:, 4].shape)
    c = 0

    for p in dataset[:, -1]:
        prices[c] = int(p.split('$')[1])
        c += 1

    dataset[:, -1] = prices
    c = 0

    for m in dataset[:, 4]:
        try:
            mem[c] = m  # int(m.split('gb')[0])
        except AttributeError:
            mem[c] = 0
        except ValueError:
            mem[c] = 0
        finally:
            c += 1

    dataset[:, 4] = mem

    XData = []
    for i in range(len(dataset)):
        x = []
        x.append(switcherBrand.get(dataset[i][0].strip().lower(), 0))
        x.append(switcherColour.get(dataset[i][1].strip().lower(), 0))
        x.append(switcherCondition.get(dataset[i][2].strip().lower(), 3))
        x.append(switcherContract.get(dataset[i][3].strip().lower(), 0))
        x.append(switcherMobos.get(dataset[i][5].strip().lower(), 0))
        x.append(switcherModel.get(dataset[i][6].strip().lower(), 0))
        XData.append(x)
    XData = np.array(XData)

    dataTemp = XData[:, 0]
    brand = np.zeros((len(dataTemp), len(switcherBrand) + 1))
    brand[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 1]
    color = np.zeros((len(dataTemp), len(switcherColour) + 1))
    color[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 2]
    condition = np.zeros((len(dataTemp), len(switcherCondition) + 1))
    condition[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 3]
    contract = np.zeros((len(dataTemp), len(switcherContract) + 1))
    contract[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 4]
    mobOs = np.zeros((len(dataTemp), len(switcherMobos) + 1))
    mobOs[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 5]
    model = np.zeros((len(dataTemp), len(switcherModel) + 1))
    model[np.arange(len(dataTemp)), dataTemp] = 1

    # r = np.reshape(dataset[:,0],(10484,1))
    # brand=enc.fit_transform(r)
    # color=enc.fit_transform(np.reshape(dataset[:,1],(10484,1)))
    # condition=enc.fit_transform(np.reshape(dataset[:,2],(10484,1)))
    # contract=enc.fit_transform(np.reshape(dataset[:,3],(10484,1)))
    # mobOs=enc.fit_transform(np.reshape(dataset[:,5],(10484,1)))
    # model=enc.fit_transform(np.reshape(dataset[:,6],(10484,1)))

    mem = mem.reshape((10484, 1))
    prices = prices.reshape((10484, 1))

    # adding data
    print("Creating data partitions...")
    all_data = np.concatenate((brand, color, condition, contract, mobOs, model, mem, prices), axis=1)

    # split data set on training data (80%) and test data (20%)
    X_train, X_test, y_train, y_test = train_test_split(all_data[:, 0:-1], all_data[:, -1], test_size=0.2,
                                                        shuffle=False)
    return y_train


def predict2(brand, colour, condition, contract, memory, mobos, model):
    mem = np.ndarray(1)
    try:
        mem[0] = int(memory.split('gb')[0])
    except AttributeError:
        mem[0] = 0
    except ValueError:
        mem[0] = 0

    XData = []
    x = []
    x.append(switcherBrand.get(brand.strip().lower(), 0))
    x.append(switcherColour.get(colour.strip().lower(), 0))
    x.append(switcherCondition.get(condition.strip().lower(), 3))
    x.append(switcherContract.get(contract.strip().lower(), 0))
    x.append(switcherMobos.get(mobos.strip().lower(), 0))
    x.append(switcherModel.get(model.strip().lower(), 0))
    XData.append(x)
    XData = np.array(XData)

    dataTemp = XData[:, 0]
    brand = np.zeros((len(dataTemp), len(switcherBrand) + 1))
    brand[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 1]
    color = np.zeros((len(dataTemp), len(switcherColour) + 1))
    color[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 2]
    condition = np.zeros((len(dataTemp), len(switcherCondition) + 1))
    condition[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 3]
    contract = np.zeros((len(dataTemp), len(switcherContract) + 1))
    contract[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 4]
    mobOs = np.zeros((len(dataTemp), len(switcherMobos) + 1))
    mobOs[np.arange(len(dataTemp)), dataTemp] = 1

    dataTemp = XData[:, 5]
    model = np.zeros((len(dataTemp), len(switcherModel) + 1))
    model[np.arange(len(dataTemp)), dataTemp] = 1

    mem = mem.reshape((-1,1))

    # adding data
    print("Creating data partitions...")
    all_data = np.concatenate((brand,color,condition,contract,mobOs,model,mem),axis=1)

    BASE_DIR = os.path.dirname(os.path.dirname(__file__))
    filename = BASE_DIR + '/engin/finalized_model.sav'
    loaded_classifiers = pickle.load(open(filename, 'rb'))

    y_hat = loaded_classifiers.predict(all_data)
    y_nn = loaded_classifiers.kneighbors(all_data, return_distance=False)
    print(str(y_nn))

    y_train = loaddata()
    return y_hat[-1], y_train[y_nn[0]]

#
# predict("Samsung", "gray", "like new", "Sprint", "256", "android", "S8 PLUS")
