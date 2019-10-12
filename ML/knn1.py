import numpy as np
import pandas as pd

from sklearn.neighbors import KNeighborsRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split

data = pd.read_csv('data.csv', keep_default_na=False)
dataset = data.values[:,1:]

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

all_data = np.concatenate((brand,color,condition,contract,mobOs,model,mem,prices),axis=1)

X_train, X_test, y_train, y_test = train_test_split(all_data[:,0:-1], all_data[:,-1], test_size=0.2, shuffle=False)

knnR = KNeighborsRegressor(n_neighbors=3, metric='euclidean', weights='uniform', leaf_size=30)

knnR.fit(X_train, y_train)

print("accuracy training: " + str(knnR.score(X_train, y_train)))
print("accuracy test: " + str(knnR.score(X_test, y_test)))

