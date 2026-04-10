import { useState } from 'react';
export default function CommentForm({comment}) {
    
  const [formInput, setFormInput] = useState({
    "name": '',
    "text": ''
  })

  const submitForm = (e) => {
    e.preventDefault();
    comment(formInput.name, formInput.text);
    setFormInput({ name: '', text: '' });
  };

  return (
      <form onSubmit={submitForm} className="mb-8 space-y-3">
      <h3 className="text-xl font-bold text-rose-800 mb-4">Leave a Comment</h3>
        <input 
        type="text"
        value={formInput.name}
        onChange={(e) => setFormInput({...formInput, name: e.target.value})}
        className="w-full p-3 border-2 border-pink-100 rounded-xl focus:border-pink-500 outline-none"
        placeholder="Name"
      />
      <textarea 
        value={formInput.text}
        onChange={(e) => setFormInput({...formInput, text: e.target.value})}
        className="w-full p-3 border-2 border-pink-100 rounded-xl focus:border-pink-500 outline-none"
        placeholder="Comment"
        rows="3"
      />
      <button 
        type="submit"
        className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-rose-600"
      >
        Submit
      </button>
    </form>
  );
}