import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix
import pickle

df = pd.read_csv('spam.csv',encoding='latin-1')
df = df[['v1','v2']]

#renaming column names
df.columns = ['label','text']

# making x and y
text= df['text']

#conver text to numbers
vectorizer = TfidfVectorizer(
    ngram_range=(1,2),
    stop_words='english'
)
x = vectorizer.fit_transform(text)
y= df['label']

x_train,x_test,y_train,y_test = train_test_split(
    x,
    y,
    test_size= 0.2,
    random_state=42

)
model = LogisticRegression()
model.fit(x_train,y_train)
# checking accuracy
test_accuracy= model.predict(x_test)
accuracy = accuracy_score(y_test,test_accuracy)
confusion_metrics = confusion_matrix(y_test,test_accuracy)
# print(confusion_metrics)
print(accuracy)

# predicting spam messages
messages = input('enter your message')
data = vectorizer.transform([messages])

prediction = model.predict(data)
print(prediction)
with open('spam_model.pkl', 'wb') as file:
    pickle.dump(model, file)
with open('vectorizer.pkl', 'wb') as file:
    pickle.dump(vectorizer, file)



