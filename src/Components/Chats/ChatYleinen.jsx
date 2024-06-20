import { useState, useRef, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import send from '../../assets/send.png'
import arrow from '../../assets/arrow.png'

import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import icon9 from '../../assets/icon9.png'
import icon10 from '../../assets/icon10.png'
import icon11 from '../../assets/icon11.png'
import icon12 from '../../assets/icon12.png'

const ChatYleinen = ({ auth, firestore }) => {

    const colors = ['#8C52FF', '#38B6FF', '#FF5757' , '#FF914D', '#00BF63', '#004AAD']

    const randomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12]

    const randomIcon = () => {
        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    }

    const [user] = useAuthState(auth);
    const [newMessage, setNewMessage] = useState('');
    const dummy = useRef();
    const messagesRef = collection(firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'));
    const [messages] = useCollectionData(q, { idField: 'id' });
    const sendMessage = async (e) => {
      e.preventDefault();
      if (newMessage.trim() === '') return;
      const { uid } = user;
      await addDoc(messagesRef, {
        text: newMessage,
        uid,
        createdAt: serverTimestamp(),
        color: randomColor(),
      });
      setNewMessage('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <main className="w-screen max-h-full bg-background flex flex-col">
            <Link to={"/"}>
                <button className='absolute top-8 left-2 text-2xl font-bold text-purple rotate-180'><img src={arrow} alt="" width={30}/></button>
            </Link>
            <motion.h1 className="w-screen text-4xl text-center font-bold mt-4 mb-8" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.075}}}>Yleinen</motion.h1>

            <section className='flex flex-col-reverse items-center gap-8 w-screen max-h-[calc(100vh-220px)] overflow-y-auto'>
            {messages && messages.map(msg => (
                
              <motion.div
                initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.075}}}
                className='w-5/6 rounded-2xl flex flex-col p-4' 
                key={msg.id}
                style={{ backgroundColor: msg.color }}>
                <span ref={dummy}></span>
                <div className='inline-flex flex-grow items-center justify-between'
                     style={{ backgroundColor: msg.color }}>
                    <img src={randomIcon()} alt="" width={50} style={{ backgroundColor: msg.color }}/>
                    <p className='flex-grow ml-4 font-bold text-l text-background'style={{ backgroundColor: msg.color }}>{msg.text}</p>
                </div>
              </motion.div>
            ))}
            </section>

          <motion.form initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.075}}} className='bg-box fixed bottom-0 w-5/6 left-1/2 -translate-x-1/2 h-20 mb-4 flex items-center justify-between rounded-3xl' onSubmit={sendMessage}>
            <input
              className='w-4/6 h-5/6 bg-purple outline-none rounded-2xl ml-2 mr-2 font-bold text-l pl-4 flex-grow' 
              type="text"
              value={newMessage} 
              onChange={(e) => setNewMessage(e.target.value)} 
              placeholder="Kerro meille jotain..." 
            />
            <button className='h-5/6 w-1/6 bg-purple rounded-2xl mr-2 flex justify-center items-center' type="submit"><img className='bg-box' src={send} alt="" width={40}/></button>
          </motion.form>
        </main>
    )
}

export default ChatYleinen