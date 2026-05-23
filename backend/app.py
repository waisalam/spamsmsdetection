from flask import Flask,request,jsonify
from flask_cors import CORS
import pickle

with open('spam_model.pkl', 'rb') as file:
    model = pickle.load(file)
    
with open('vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)


app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    message = data['message']
    vectorizer_messages= vectorizer.transform([message])
    prediction = model.predict(vectorizer_messages)
    probabilities = model.predict_proba(vectorizer_messages)
    
    highest_probabilty =float( max(probabilities[0]))
    confidence = highest_probabilty *100

    return jsonify({
    'prediction': prediction[0],
    'confidence':round(confidence,2)
})


if __name__ == '__main__':
    app.run(debug=False)
