import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react'
import Comments from '../components/Comments';
import BlogPost from '../components/BlogPost';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { posts } from '../posts';
import { useUsername } from '../components/AuthContext';


export default function IndividualPostPage() {
  const params = useParams();
  const username = useUsername();

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState([]);


  useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => res.json())
      .then(postData => {
        setPost(postData);
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
        .then(res => res.json())
        .then(commentData => ({ postData, commentData }));
      })
      .then(({ postData, commentData}) => {
        setComments(commentData);
        return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
      })
      .then(res => res.json())
      .then(data => setAuthor(data))
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, [params.id]);

  
  return (
 <div className="min-h-screen bg-pink-200 font-sans text-slate-900 flex flex-col">  
      <NavBar/>
      <div className='pt-12 flex-grow'>
      {loading ? (
          <p className="text-center font-bold text-slate-600">Loading...</p>
        ) : (
          <>
            <BlogPost 
              title={post.title}
              content={post.body}
              author={author?.name}
              email={author?.email}
            />

            {username ? (
              <Comments key={params.post_id} currentComments={comments}/>
            ) : (
              <div className="bg-white rounded-2xl mt-6 p-10 mx-10 border-2 border-dashed border-pink-400 text-center">
                <p className="text-slate-600 mb-4 font-medium">
                  Comments are hidden for logged out users 
                </p>
                <Link 
                  to="/login" 
                  className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-rose-600"
                >
                  Log in?
                </Link>
              </div>
            )}
          </>
        )}
      </div>
      <Footer/>
    </div>     
  );
}