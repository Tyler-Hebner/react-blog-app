import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react'
import Comments from '../components/Comments';
import BlogPost from '../components/BlogPost';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { posts } from '../posts';


export default function IndividualPostPage() {
  const params = useParams();

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
            
            <Comments key={params.post_id} currentComments={comments}/>
          </>
        )}
      </div>
      <Footer/>
    </div>     
  );
}