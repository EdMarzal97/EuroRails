'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const IntroductionPage: React.FC = () => {
  const router = useRouter();

  const handleLanguageSelect = (language: string) => {
    // Implement your logic for language selection
    // For example, you can store the selected language in a state or redirect to a different page
    console.log(`Selected language: ${language}`);
    // Example: router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Euro Rail Connect</h1>
      <p className="text-xl mb-4">Please select your preferred language:</p>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => handleLanguageSelect('en')}
        >
          Deutsch
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => handleLanguageSelect('es')}
        >
          Español
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => handleLanguageSelect('fr')}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default IntroductionPage;