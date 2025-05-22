import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form >
         <input className='border-1 mb-2 rounded-sm w-80' type="text" placeholder='name'/> <br />
         <input className='border-1 mb-2 rounded-sm w-80' type="email" placeholder='email'/>
         <br />
         <textarea className='border-1 rounded-sm w-80' placeholder='message'></textarea>
         <br />
         <button className='bg-black text-white px-2 py-1 rounded-xl cursor-pointer' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default ContactForm
