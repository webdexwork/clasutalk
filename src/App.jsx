import AnimatedRoutes from "./Components/AnimatedRoutes.jsx";
import { BrowserRouter } from 'react-router-dom';

import { Analytics } from "@vercel/analytics/react"


//Importing firebase libraries
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';

import './App.css';

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
          <AnimatedRoutes/>
        </main>
      </BrowserRouter>
      <Analytics/>
    </>
  )
}

export default App
