import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NavBar from './components/NavBar'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router'
import IndividualPostPage from './routes/IndividualPostPage'
import ContactPage from './routes/ContactPage'


import './index.css'
import BlogPostsPage from './routes/BlogPostsPage'


export default function App() {

  return (
   
      <div className="min-h-screen bg-pink-200 font-sans text-slate-900 flex flex-col">
        <div>
          <Routes>
            <Route path="/" element={<BlogPostsPage/>} />
            <Route path="/post/:id" element={<IndividualPostPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </div>
      </div>
  
  );
}


