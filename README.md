# AI Spam SMS Detection System

A full-stack AI-powered Spam SMS Detection web application that analyzes SMS messages and predicts whether the message is spam or safe using Machine Learning.

## Live Demo

Frontend:
https://spamsmsdetection.vercel.app/

Backend API:
https://spamsmsdetection-r49y.onrender.com/

---

## Features

- Spam SMS Detection using Machine Learning
- Real-time message analysis
- Confidence score prediction
- Full-stack deployment
- Responsive UI
- API integration with Flask backend
- Authentication support with Clerk

---

## Analyze SMS

The application provides a dedicated `/analyze` page where users can directly input an SMS message and get an instant spam prediction. This page is designed for quick, one-off checks and is accessible even if other navigation links are unavailable.

**How to access:**  
You can open the Analyze SMS page directly by visiting:

[https://spamsmsdetection.vercel.app/analyze](https://spamsmsdetection.vercel.app/analyze)

**What it does:**  
1. Type or paste any SMS text into the input field  
2. Click the **Analyze** button  
3. The system will display whether the message is **Spam** or **Safe**, along with a confidence score (percentage)  

This page bypasses the need to sign in or navigate through the app, making it a reliable fallback when other links may be missing or unaccessible.

---

## Tech Stack

### Frontend
- Next.js
- Tailwind CSS
- TypeScript

### Backend
- Flask
- Flask-CORS

### Machine Learning
- Scikit-learn
- TF-IDF Vectorizer
- Multinomial Naive Bayes

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Machine Learning Workflow

1. SMS dataset preprocessing
2. Text vectorization using TF-IDF
3. Model training using MultinomialNB
4. Prediction probability calculation
5. API integration with frontend

---

## Model Accuracy

Accuracy achieved on test dataset:
96%

---

## Screenshots

(Add screenshots here later)

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/spamsmsdetection.git