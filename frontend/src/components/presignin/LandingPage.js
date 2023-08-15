import React from 'react';
import {useNavigate} from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate('/signup'); // Navigate to the '/signup' route
  };
  const navigateToSignIn=()=>{
    navigate('/signin');//navigate to sign in page route
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Our Freelance tApp</h1>
        <div className="space-y-4">
          <button className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          onClick={navigateToSignIn}
          >
            Sign In
          </button>
          <button className="py-2 px-6 bg-white text-blue-500 rounded-lg hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue active:bg-blue-200"
          onClick={navigateToSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
