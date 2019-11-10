import numpy as np
import pandas as pd
import csv

from sklearn.neighbors import KNeighborsRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split

# load data from csv
print("Load data...")
data = pd.read_csv('clean_data.csv', keep_default_na=False)
dataset = data.values[:,1:]

# memory and prices parse to integer
print("Preprocessing data...")
prices = np.ndarray(dataset[:,-1].shape)
mem = np.ndarray(dataset[:,4].shape)
c = 0

for p in dataset[:,-1]:
	prices[c] = int(p.split('$')[1])
	c+=1

dataset[:,-1] = prices
c=0

for m in dataset[:,4]:
	try:
		mem[c] = int(m.split('gb')[0])
	except AttributeError:
		mem[c] = 0
	except ValueError:
		mem[c] = 0
	finally:
		c+=1

dataset[:,4] = mem


# all strings parse to binary arrays that mean presence or not
enc = OneHotEncoder(handle_unknown='ignore',sparse=False)

r = np.reshape(dataset[:,0],(8074,1))

brand=enc.fit_transform(r)
color=enc.fit_transform(np.reshape(dataset[:,1],(8074,1)))
condition=enc.fit_transform(np.reshape(dataset[:,2],(8074,1)))
contract=enc.fit_transform(np.reshape(dataset[:,3],(8074,1)))
mobOs=enc.fit_transform(np.reshape(dataset[:,5],(8074,1)))
model=enc.fit_transform(np.reshape(dataset[:,6],(8074,1)))

mem = mem.reshape((8074,1))
prices = prices.reshape((8074,1))

# adding data
print("Creating data partitions...")
all_data = np.concatenate((brand,color,condition,contract,mobOs,model,mem,prices),axis=1)

# split data set on training data (80%) and test data (20%)
X_train, X_test, y_train, y_test = train_test_split(all_data[:,0:-1], all_data[:,-1], test_size=0.2, shuffle=False)

# creating model KNN
print("Training model...")
knnR = KNeighborsRegressor(n_neighbors=3, metric='euclidean', weights='uniform', leaf_size=30)

# fit model on training data
knnR.fit(X_train, y_train)

# scores on R square
print("Results:")
print("\taccuracy training: " + str(knnR.score(X_train, y_train)))
print("\taccuracy test: " + str(knnR.score(X_test, y_test)))

y_hat = knnR.predict(X_test)
y_nn = knnR.kneighbors(X_test, return_distance=False)

# saving results
print("Saving results on \"results.csv\"...")
with open("results.csv", "w") as writeFile:
	writer = csv.writer(writeFile)
	writer.writerow(["correct prices","predictions","nearest neighbors"])

	c=0
	for y in y_test:
		writer.writerow([y, y_hat[c], y_train[y_nn[c]]])
		c+=1