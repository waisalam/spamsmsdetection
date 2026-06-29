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

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.json
    feedback_type = data.get('type')
    description = data.get('description')
    email = data.get('email', None)
    
    app.logger.info(f"Feedback received - Type: {feedback_type}, Description: {description}, Email: {email}")
    
    return jsonify({
        'message': 'Feedback submitted successfully'
    }), 201

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    app.logger.info(f"Contact form submission - Name: {name}, Email: {email}, Message: {message}")
    
    return jsonify({
        'message': 'Contact form submitted successfully'
    }), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)