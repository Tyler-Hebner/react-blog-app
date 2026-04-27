import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogPost from '../components/BlogPost'
import { Link, useParams } from 'react-router'

import '../index.css'


export default function BlogPostsPage() {

    const params = useParams();

    const [loading, setloading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const reversed = [...data].reverse(); 
        setPosts(reversed)
      })
      .catch(e => console.log(e))
      .finally(() => setloading(false));
  }, []);


    return (
      <div className="min-h-screen bg-pink-200 font-sans text-slate-900 flex flex-col"> 
      <NavBar/>
      <main className="pt-12 flex-grow">
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
        {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`} className="block hover:scale-102">
          <BlogPost
            title={post.title}
            content={`${post.body.substring(0, 20)}... click to read full post`}
           
            date={post.date}
          />
          
        </Link> 
        ))};
        </>
        )}
      </main>
    <Footer/> 
  </div>
)}


