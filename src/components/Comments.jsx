import { useState, useEffect} from 'react';
import CommentForm from './CommentForm';
import { useParams, Link } from 'react-router';
import { useUsername } from './AuthContext';


export default function Comments({currentComments}) {

  const params = useParams();
  const [commentList, setCommentList] = useState(currentComments || []);
  const username = useUsername()

  useEffect(() => {
    setCommentList(currentComments || []);
  }, [currentComments]);

  const colors = [
    "border-rose-400", "border-orange-400", "border-yellow-400",
    "border-green-400", "border-blue-400", "border-purple-400"
  ];

  const postComment = (body) => {
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: username,
        body: body,
      })
    })
    .then(res => res.json())
    .then(data => {
      
      setCommentList([...commentList, data]);
    })
    .catch(e => console.log('Error posting comment:', e));
  };

  return (
    <div className="bg-white rounded-2xl mt-6 p-10 mx-10 border-2 border-pink-500">
      <CommentForm comment={postComment} user={username}/>

      <div className="space-y-4">
        {commentList.length === 0 ? (
          <p className="text-slate-400 text-center py-4">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          commentList.map((c, index) => {
            const borderColor = colors[index % colors.length]; 
            return (
              <div className={`border-l-4 ${borderColor} pl-4 py-2 bg-slate-50 rounded-r-lg`}>
                <p className="font-bold text-rose-700 text-sm">{c.name}</p>
                <p className="text-slate-600">{c.body}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}