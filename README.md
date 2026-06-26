# AI Spam SMS Detection System

A full-stack AI-powered Spam SMS Detection web application that analyzes SMS messages and predicts whether the message is spam or safe using Machine Learning.  
The project has been completely redesigned with a modern, responsive interface, dark mode support, smooth animations, enhanced accessibility, and robust backend validation.

## Live Demo

Frontend:  
[https://spamsmsdetection.vercel.app/](https://spamsmsdetection.vercel.app/)

Backend API:  
[https://spamsmsdetection-r49y.onrender.com/](https://spamsmsdetection-r49y.onrender.com/)

---

## Features

- **Spam Detection** – Powered by a trained Multinomial Naive Bayes model on TF‑IDF features.
- **Real‑time Analysis** – Instant classification with a confidence score.
- **Responsive Design** – Fully optimized for mobile, tablet, and desktop.
- **Dark Mode** – Toggle between light and dark themes with system preference detection.
- **Smooth Animations** – Micro‑interactions and transitions built with Framer Motion.
- **Enhanced Accessibility** – Semantic HTML, ARIA attributes, keyboard navigation, and screen‑reader support.
- **Robust Backend** – Input validation, sanitization, and detailed error responses.
- **Authentication** – Secure user login via Clerk.
- **Full‑Stack Deployment** – Frontend on Vercel, backend on Render.

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- next‑themes (dark mode)
- Radix UI primitives (accessible components)
- Clerk (authentication)

### Backend
- Flask
- Flask‑CORS
- marshmallow (request validation)
- Flask‑Limiter (rate limiting)

### Machine Learning
- Scikit‑learn
- TF‑IDF Vectorizer
- Multinomial Naive Bayes
- Joblib (model serialization)

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Machine Learning Workflow

1. SMS dataset preprocessing (cleaning and labeling)
2. Text vectorization using TF‑IDF
3. Model training with MultinomialNB
4. Prediction probability calculation via `predict_proba`
5. API endpoint to serve predictions
6. Frontend consumes the API and displays results

---

## Model Accuracy

**96%** accuracy on the test dataset.

---

## Screenshots

*Screenshots coming soon.*

---

## Installation

### Prerequisites
- Node.js (v18 or later) and npm
- Python (3.9+)
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/spamsmsdetection.git
cd spamsmsdetection
```

### Backend Setup (Flask)

1. Navigate to the backend folder:
   ```bash
   cd server
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. The trained model (`model.pkl`) and vectorizer (`vectorizer.pkl`) are already included in the `server/model/` directory. If you need to retrain, place the dataset and run the training script.
5. Start the Flask development server:
   ```bash
   flask run
   ```
   The API will be available at `http://localhost:5000`.

### Frontend Setup (Next.js)

1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the `client` directory with the following variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
   You can get your Clerk keys from the [Clerk Dashboard](https://dashboard.clerk.dev/).
4. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

### Environment Variables Summary

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for client‑side authentication |
| `CLERK_SECRET_KEY` | Clerk secret key for server‑side operations |
| `NEXT_PUBLIC_API_URL` | Base URL of the Flask backend (e.g., `http://localhost:5000`) |

---

## Deployment Notes

- The frontend is deployed on Vercel; ensure the environment variables are set in the Vercel dashboard.
- The backend is deployed on Render; update the `NEXT_PUBLIC_API_URL` to point to the Render service URL.
- For production, enable CORS in Flask to allow requests only from your frontend domain.