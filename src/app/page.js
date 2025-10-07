'use client';
import App from './App';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-sky-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6 tracking-wide drop-shadow-lg opacity-0 animate-fade-in">Terra Scope Weather App</h1>
        <Image src="/planet.svg" alt="Terra Scope Logo" width={80} height={80} className="animate-bounce" />
        

        <App />
      </div>
    </>
  );
}


