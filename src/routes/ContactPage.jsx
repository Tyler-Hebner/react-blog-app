import {useState} from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function ContactPage() {

  const formClass = "w-full p-3 border-2 border-pink-100 rounded-xl focus:border-pink-500 outline-none"
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: ''
    })
    

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  return (
    <div className="min-h-screen bg-pink-200 font-sans text-slate-900 flex flex-col">
      <NavBar />
        <main className="pt-12 px-10 flex-grow">
          <article className="bg-white p-8 rounded-2xl border-2 border-pink-500 border mb-8 hover:bg-purple-50 mx-10">
            <h2 className="text-3xl font-bold text-rose-800 mb-6">Contact Me</h2>
            <form className="space-y-4" onSubmit={submitForm}>
              <input placeholder='Name' 
                minLength={5}
                className={formClass}
                value={formInput.name}
                onChange={(e) => setFormInput({...formInput, name: e.target.value})}
              />
              
              <input placeholder='Email' 
                className={formClass}
                value={formInput.email}
                onChange={(e) => setFormInput({...formInput, email: e.target.value})}
              />
              <textarea placeholder='Message'
                minLength={50}
                maxLength={500}
                className={formClass}
                value={formInput.message}
                onChange={(e) => setFormInput({...formInput, message: e.target.value})}
              />
        
              <button 
                type="submit" 
                className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-600"
              >
                Send Message
              </button>
              </form>
              </article>
        </main>

        <Footer/>
    </div>
  )
}