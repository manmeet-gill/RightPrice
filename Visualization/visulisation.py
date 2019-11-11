# [0]BRAND,[1]COLOUR,[2]CONDITION,[3]CONTRACT,[4]MEMORY,[5]MOBOS,[6]MODEL,[7]PRICE

import csv
import pandas as pd
import plotly.express as px


ad_dict = {}
brand_set = set()
condition_set = set()
condition_score = {
    'LIKE NEW':4, 'FAIR':3, 'GOOD':2, 'PERFECT':5, 'EXCELLENT':4, 'SALVAGE':1, 'UNKNOWN':0
}

# writting data to a new csv for graph
def addValues(num,brand,condition,price):
    ad_dict[num] = [brand, condition, price]

# reading previous data
with open('dataset.csv', newline = '') as csvfile:
        freader = csv.reader(csvfile, delimiter=',')
        line_count = 0
        counter = 0
        for row in freader:
            if line_count == 0:
                # print(f'Column names are {", ".join(row)}')
                line_count += 1
            else:
                brand = f'{row[0]}'
                condition = condition_score[f'{row[2]}'.upper()]
                price = f'{row[7]}'
                price = price[1:-1]
                price = int(price)
                brand_set.add(f'{row[0]}'.upper())
                condition_set.add(f'{row[2]}'.upper())
                if condition > 0:
                    addValues(counter, brand, condition, price)
                    counter+=1

                # print(f'\tBrand:{row[0]} Condition:{row[2]}  Price: {row[7]}')
                line_count += 1
        # print(f'Processed {line_count} lines.')


# writing into a new csv

f = open("visulization.csv", "w")
f.write("Index,Brand,Condition,Price\n")
i = 0
while i < len(ad_dict):
    temp = ad_dict[i]
    f.write(f'{i}, {temp[0]},{temp[1]},{temp[2]}\n')
    i+=1
f.close()

# scatter plot for condition over price

df = pd.read_csv('visulization.csv')

fig = px.scatter(df, y = 'Price', x = 'Condition', title='Condition vs Price')
fig.show()

fig = px.scatter(df, x = 'Price', y = 'Condition', title='Condition vs Price')
fig.show()



# brand avg

# initializing dictionary
brand_dict = {}
for brand in brand_set:
    brand_dict[brand] = [0,0]

i =0
while i < len(ad_dict):
     temp = ad_dict[i]
     brand = temp[0].upper()
     price = temp[2]
     store = brand_dict[brand]
     brand_dict[brand] = [store[0]+price, store[1]+1]
     i+=1
print(brand_dict)
fw = open("brand-viz.csv", "w")
fw.write("Brand,Price Average\n")
for brand in brand_dict:
    temp = brand_dict[brand]
    if temp[1] > 0:
        avg = round(temp[0]/temp[1],2)
    else:
        avg = 0
    fw.write(f'{brand},{avg}\n')
    i+=1
fw.close()

df = pd.read_csv('brand-viz.csv')

fig = px.bar(df, x = 'Brand', y = 'Price Average', title='Brand Averages')
fig.show()

# brand printer
# print(brand_set)

# # print contidion set
# print(condition_set)


# printing the added values
# print(ad_dict)
