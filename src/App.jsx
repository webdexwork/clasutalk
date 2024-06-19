import StartScreen from "./Components/StartScreen/StartScreen.jsx";
import ChatRooms from "./Components/ChatRooms/ChatRooms.jsx";
import Info from "./Components/Info/Info.jsx";

import ChatYleinen from "./Components/Chats/ChatYleinen.jsx";
import ChatOpiskelu from "./Components/Chats/ChatOpiskelu.jsx";
import ChatVapaa from "./Components/Chats/ChatVapaa.jsx";

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
        <main className="w-screen h-screen">

          <Routes> 
            <Route path="/" element={user ? <ChatRooms /> : <StartScreen auth={auth} />} />
            <Route path="/yleinen" element={<ChatYleinen auth={auth} firestore={firestore}/>} />
            <Route path="/opiskelu" element={<ChatOpiskelu/>} />
            <Route path="/vapaa" element={<ChatVapaa/>} />
            <Route path="/info" element={<Info/>} />
          </Routes>

          <footer className="w-96 h-20 bg-purple fixed bottom-0 left-1/2 -translate-x-1/2 rounded-t-3xl flex justify-evenly items-center">
            <Link to={"/"}>
              <div className="flex flex-col items-center">
                <img src={chat} alt="" width={40}/>
                <p>ChatRooms</p>
              </div>
            </Link>

            <Link to={"/info"}>
              <div className="flex flex-col items-center">
                <img src={info} alt="" width={40}/>
                <p>Info</p>
              </div>
            </Link>
          </footer> 
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
