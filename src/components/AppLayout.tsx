import React, { useState } from 'react';
import EmailCapture from './EmailCapture';
import CountdownTimer from './CountdownTimer';
import VoiceWaveform from './VoiceWaveform';

const AppLayout: React.FC = () => {
  const [showNotifySuccess, setShowNotifySuccess] = useState(false);
  
  // Set launch date to 90 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 90);

  const handleEmailSubmit = (email: string) => {
    setShowNotifySuccess(true);
    console.log('Email captured for Omilix launch:', email);
  };

  const scrollToNotify = () => {
    const notifySection = document.getElementById('notify-section');
    notifySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68d655ca6ee34a3107279b6a_1758877169327_cd64c12e.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                OMILIX
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light mb-4">
              The Future of AI Voice is Coming
            </p>
            <p className="text-lg text-blue-300 max-w-2xl mx-auto leading-relaxed">
              Revolutionary intelligent voice assistants that understand, learn, and adapt to your world. 
              Experience the next generation of AI-powered conversation.
            </p>
          </div>

          {/* Voice Waveform Animation */}
          <div className="mb-12">
            <VoiceWaveform />
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToNotify}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Get Early Access
            <span className="ml-2 animate-bounce">↓</span>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Voice Technology
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our AI voice assistants are designed to revolutionize how you interact with technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced AI</h3>
              <p className="text-blue-200">
                Powered by cutting-edge machine learning algorithms that understand context and nuance
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Personalized</h3>
              <p className="text-blue-200">
                Learns your preferences and adapts to provide increasingly personalized experiences
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-blue-200">
                Real-time processing and response with minimal latency for natural conversations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Launch Countdown
          </h2>
          <p className="text-xl text-blue-200 mb-12">
            We're putting the finishing touches on something amazing
          </p>
          <CountdownTimer targetDate={launchDate} />
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="notify-section" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Be the First to Experience Omilix
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Join our exclusive early access program and be among the first to experience 
            the future of AI voice technology.
          </p>
          <EmailCapture onSubmit={handleEmailSubmit} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold text-white mb-2">OMILIX</h4>
              <p className="text-blue-200">Intelligent AI Voice Assistants</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-blue-200">
              <button onClick={() => console.log('Privacy Policy clicked')} className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => console.log('Terms of Service clicked')} className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </button>
              <button onClick={() => console.log('Contact clicked')} className="hover:text-cyan-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} Omilix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;