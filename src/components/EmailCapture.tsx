import React, { useState } from 'react';

interface EmailCaptureProps {
  onSubmit?: (email: string) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      onSubmit?.(email);
      console.log('Email submitted:', email);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
        <p className="text-blue-200">We'll notify you as soon as Omilix launches.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
            disabled={isLoading}
          />
          {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Joining...' : 'Notify Me'}
        </button>
      </div>
    </form>
  );
};

export default EmailCapture;