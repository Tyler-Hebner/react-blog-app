import { Link } from 'react-router';
import { useAuth, useUsername } from '../components/AuthContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


export default function HomePage() {
  const username = useUsername();

  return (
  <div className="min-h-screen bg-pink-200 font-sans text-slate-900 flex flex-col">
    <NavBar/>
    <main className="flex-grow flex flex-col items-center justify-center px-10 py-20">
        
        <div className="bg-white p-12 rounded-3xl border-4 border-pink-500 max-w-4xl w-full text-center transform hover:scale-[1.01] transition-transform">
          
          {username ? (
            <h1 className="text-5xl text-slate-800 mb-6">
              Welcome back, <span className='font-bold text-rose-600'>{username}!</span>
            </h1>
          ) : (
            <h1 className="text-5xl font-black text-rose-600  mb-6">
              Welcome!
            </h1>
          )}

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Blog for sharing ideas. Feel free to view the post list and comment on posts to join in.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/posts" 
              className="w-full sm:w-auto px-12 py-4 bg-rose-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-rose-700 active:scale-95"
            >
              View Posts
            </Link>

            {username ? (
              <p></p>
            ) : (
              <Link 
                to="/login" 
                className="w-full sm:w-auto px-12 py-4 bg-rose-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-rose-700 active:scale-95"
              >
                Log In
              </Link>
              )}
          </div>
    </div>
    </main>
    <Footer/>
    </div>
  )
}