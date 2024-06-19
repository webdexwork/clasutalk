import StartScreen from "./Components/StartScreen/StartScreen.jsx";
import ChatRooms from "./Components/ChatRooms/ChatRooms.jsx";
import Info from "./Components/Info/Info.jsx";

import ChatYleinen from "./Components/Chats/ChatYleinen.jsx";
import ChatOpiskelu from "./Components/Chats/ChatOpiskelu.jsx";
import ChatVapaa from "./Components/Chats/ChatKysy.jsx";

import chat from './assets/bubble-chat.png'
import info from './assets/info.png'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


//Importing firebase libraries
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';

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

function App() {

  const [user] = useAuthState(auth);

  return (
    <>
      <BrowserRouter>
        <main className="w-screen max-h-full">

          <Routes> 
            <Route path="/" element={user ? <ChatRooms /> : <StartScreen auth={auth} />} />
            <Route path="/yleinen" element={<ChatYleinen auth={auth} firestore={firestore}/>} />
            <Route path="/opiskelu" element={<ChatOpiskelu auth={auth} firestore={firestore}/>} />
            <Route path="/vapaa" element={<ChatVapaa auth={auth} firestore={firestore}/>} />
            <Route path="/info" element={<Info/>} />
          </Routes>

        </main>
      </BrowserRouter>
    </>
  )
}

export default App
