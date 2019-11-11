#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import csv


# In[2]:


from sklearn.neighbors import KNeighborsRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split


# In[3]:


# load data from csv
data = pd.read_csv('final_data.csv', keep_default_na= False)
data


# In[4]:


dataset = data.values[:,:]
dataset


# In[5]:


#using onehotencoder for preprocessing
enc = OneHotEncoder(handle_unknown='ignore', sparse=False)
prices = np.ndarray(dataset[:,-1].shape)
mem = np.ndarray(dataset[:,4].shape)
condition = np.ndarray(dataset[:,2].shape)
brand=enc.fit_transform(np.reshape(dataset[:,0],(10484,1)))
color=enc.fit_transform(np.reshape(dataset[:,1],(10484,1)))
contract=enc.fit_transform(np.reshape(dataset[:,3],(10484,1)))
mobOs=enc.fit_transform(np.reshape(dataset[:,5],(10484,1)))
model=enc.fit_transform(np.reshape(dataset[:,6],(10484,1)))

mem = mem.reshape((10484,1))
prices = prices.reshape((10484,1))
condition = condition.reshape((10484,1))
mem


# In[6]:


#combining all data
print("Creating data partitions...")
all_data = np.concatenate((condition,mem,brand,color,contract,mobOs,model,prices),axis=1)


# In[7]:


# split data set on training data (80%) and test data (20%)
print("Splitting data into train, test 80%--20%...")
X_train, X_test, y_train, y_test = train_test_split(all_data[:,0:-1], all_data[:,-1], test_size=0.2, shuffle=False)


# In[8]:


# creating model KNN
print("Training model...")
knnR = KNeighborsRegressor(n_neighbors=3, metric='euclidean', weights='uniform', leaf_size=30)
knnR.fit(X_train, y_train)


# In[9]:


print("Results:")
print("\taccuracy training: " + str(knnR.score(X_train, y_train)))
print("\taccuracy test: " + str(knnR.score(X_test, y_test)))


# In[10]:


y_nn = knnR.kneighbors(X_test[0].reshape(1, -1), return_distance=False)
print(y_nn)



# In[ ]:




