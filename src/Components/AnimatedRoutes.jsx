import { Routes, Route, useLocation } from 'react-router-dom';
import ChatYleinen from './Chats/ChatYleinen.jsx';
import ChatOpiskelu from "./Chats/ChatOpiskelu.jsx";
import ChatVapaa from "./Chats/ChatKysy.jsx";

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import StartScreen from './StartScreen/StartScreen.jsx';
import ChatRooms from './ChatRooms/ChatRooms.jsx';
import Info from './Info/Info.jsx';

import { AnimatePresence } from 'framer-motion'

const app = initializeApp({
    apiKey: "AIzaSyCckjNboNbaaz9I4JUVCoQ4XM0OCdaIP4A",
    authDomain: "clasutalk.firebaseapp.com",
    projectId: "clasutalk",
    storageBucket: "clasutalk.appspot.com",
    messagingSenderId: "226891270658",
    appId: "1:226891270658:web:576b00d9b8c308b045b51b",
    measurementId: "G-JEEHR44B87"
  });

const auth = getAuth(app);
const firestore = getFirestore(app);


const AnimatedRoutes = () => {

    const [user] = useAuthState(auth);

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={user ? <ChatRooms /> : <StartScreen auth={auth} />} />
                <Route path="/yleinen" element={<ChatYleinen auth={auth} firestore={firestore}/>} />
                <Route path="/opiskelu" element={<ChatOpiskelu auth={auth} firestore={firestore}/>} />
                <Route path="/vapaa" element={<ChatVapaa auth={auth} firestore={firestore}/>} />
                <Route path="/info" element={<Info/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes