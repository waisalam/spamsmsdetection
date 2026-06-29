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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

```python
# This file contains helper functions for data preprocessing before prediction.
# Currently it only returns the raw message; any additional feature extraction can be added here.

def preprocess_message(message: str) -> str:
    """Basic preprocessing – lowercasing, stripping whitespace."""
    return message.lower().strip()
```

```tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [type, setType] = useState('feedback');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, description, email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please check the server.');
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
        <h1>Thank You!</h1>
        <p>Your feedback has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="type">Type:</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="feedback">Feedback</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email (optional):</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}