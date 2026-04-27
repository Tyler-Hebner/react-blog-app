import { useState } from 'react';
export default function CommentForm({comment, user}) {
  const [text, setText] = useState('');
    
  const submitForm = (e) => {
    e.preventDefault();
    comment(text);
    setText('');
  };

  return (
    <form onSubmit={submitForm} className="mb-8 space-y-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-rose-800 mb-4">Leave a Comment</h3>
        <p className="text-sm text-slate-500">
            Posting as <span className="font-bold text-pink-600">{user}</span>
        </p>
      </div>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 border-2 border-pink-100 rounded-xl focus:border-pink-500 outline-none"
        placeholder="Comment"
        rows="3"
      />
      <button 
        type="submit"
        className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-rose-600 active:scale-[0.95] transition"
      >
        Submit
      </button>
    </form>
  );
}