import { Link } from 'react-router';
import { useAuth, useUsername } from './AuthContext';

export default function NavBar() {
  const username = useUsername();
  const {logout } = useAuth();
  return (
    <nav className="bg-white border-b-2 border-pink-300 p-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-black text-rose-600 hover:text-rose-500 transition-colors">
          My Blog
        </Link>
        
        <div className="space-x-8 font-bold text-slate-600">
          <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link to="/post/0" className="hover:text-pink-500 transition-colors">First Post</Link>
          <Link to="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
          {username ? (
            <p className="hover:text-pink-500 transition-colors" onClick={logout}>Logout</p>
          ): (
          <Link to="/login" className="hover:text-pink-500 transition-colors">Login</Link>
          )}

        </div>
      </div>
    </nav>
  );
}