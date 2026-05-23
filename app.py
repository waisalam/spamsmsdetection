from flask import Flask,request,jsonify
import pickle

with open('spam_model.pkl', 'rb') as file:
    model = pickle.load(file)
    
with open('vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)


app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    message = data['message']
    vectorizer_messages= vectorizer.transform([message])
    prediction = model.predict(vectorizer_messages)
    return jsonify({
    'prediction': prediction[0]
})


if __name__ == '__main__':
    app.run(debug=True)
