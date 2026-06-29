# backend/handlingdata_predict.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix
import pickle
import os

MODEL_PATH = 'spam_model.pkl'
VECTORIZER_PATH = 'vectorizer.pkl'
DATA_PATH = 'spam.csv'

def load_or_train_model():
    """Load pre-trained model and vectorizer if available, otherwise train and save them."""
    if os.path.exists(MODEL_PATH) and os.path.exists(VECTORIZER_PATH):
        with open(MODEL_PATH, 'rb') as f:
            model = pickle.load(f)
        with open(VECTORIZER_PATH, 'rb') as f:
            vectorizer = pickle.load(f)
        return model, vectorizer

    # Train new model
    df = pd.read_csv(DATA_PATH, encoding='latin-1')
    df = df[['v1', 'v2']]
    df.columns = ['label', 'text']

    vectorizer = TfidfVectorizer(
        ngram_range=(1, 2),
        stop_words='english'
    )
    X = vectorizer.fit_transform(df['text'])
    y = df['label']

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    model = LogisticRegression()
    model.fit(X_train, y_train)

    # Optional: evaluate and log accuracy
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"Model trained with accuracy: {acc:.4f}")

    # Save artifacts
    with open(MODEL_PATH, 'wb') as f:
        pickle.dump(model, f)
    with open(VECTORIZER_PATH, 'wb') as f:
        pickle.dump(vectorizer, f)

    return model, vectorizer

def predict_spam(message: str) -> str:
    """Return 'ham' or 'spam' for the given text message."""
    model, vectorizer = load_or_train_model()
    data = vectorizer.transform([message])
    prediction = model.predict(data)[0]
    return prediction