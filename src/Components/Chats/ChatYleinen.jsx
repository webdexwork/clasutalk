import { useState, useRef, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import send from '../../assets/send.png'
import arrow from '../../assets/arrow-small-right.png'

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

    };
    
    return (
        <main className="w-screen h-screen bg-background flex flex-col">
            <Link to={"/"}>
                <button className='absolute top-8 left-2 text-2xl font-bold text-purple rotate-180'><img src={arrow} alt="" width={50}/></button>
            </Link>
            <h1 className="w-screen text-4xl text-center font-bold mt-8 mb-8">Yleinen</h1>

            <section className='flex flex-col items-center gap-5 w-screen h-4/6 overflow-y-scroll'>
            {messages && messages.map(msg => (
                
              <div 
                className='w-5/6 rounded-2xl flex flex-col p-4' 
                key={msg.id}
                style={{ backgroundColor: msg.color }}>
                <div className='inline-flex flex-grow items-center justify-between'>
                    <img src={randomIcon()} alt="" width={50} />
                    <p className='flex-grow ml-4 font-bold text-l'>{msg.text}</p>
                </div>
                <div>
                    <p className='text-sm text-right'>{msg.createdAt?.toDate()?.toLocaleString() || 'Ladataan...'}</p>
                </div>
                <span ref={dummy}></span>
              </div>
            ))}
            </section>

            <form className='bg-box fixed bottom-0 w-5/6 left-1/2 -translate-x-1/2 h-20 mb-4 flex items-center justify-between rounded-3xl' onSubmit={sendMessage}>
            <input
              className='w-4/6 h-5/6 bg-purple outline-none rounded-2xl ml-2 mr-2 font-bold text-l pl-4 flex-grow' 
              type="text"
              value={newMessage} 
              onChange={(e) => setNewMessage(e.target.value)} 
              placeholder="Kirjoita viesti..." 
            />
          <button className='h-5/6 w-1/6 bg-purple rounded-2xl mr-2 flex justify-center items-center' type="submit"><img src={send} alt="" width={40}/></button>
        </form>
        </main>
    )
}

export default ChatYleinen