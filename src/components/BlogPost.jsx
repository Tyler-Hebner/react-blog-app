export default function BlogPost({ title, content, author, email}) {
  return (
    <article className="bg-white p-8 rounded-2xl border-2 border-pink-500 border mb-8 hover:bg-purple-50 mx-10">
      <h2 className={`text-3xl font-bold text-rose-800 mb-3`}>{title}</h2>
      <div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
        <span className={`bg-rose-100 text-rose-700 px-10 py-1 rounded-full font-medium`}>{author}</span>
        <span>{email}</span>
      </div>
      <p className="text-slate-600 text-lg">{content}</p>
      
    </article>
  );
}


