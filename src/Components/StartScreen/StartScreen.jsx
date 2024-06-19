import { signInAnonymously } from "firebase/auth"
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import home from '../../assets/hut.png';
import messages from '../../assets/communications.png';
import info from '../../assets/chat.png';

const StartScreen = ({ auth }) => {
    const handleSignIn = async () => {
        try {
          await signInAnonymously(auth);
          console.log('Signed in anonymously!');
        } catch (error) {
          console.error('Error signing in anonymously:', error);
        }
      };

      return (
        <main className="flex flex-col">
          <img className="w-5/6 mx-auto" src={logo} alt="" />
          <h1 className="text-5xl font-bold text-center">ClasuTalk.</h1>
          <p className="text-center w-3/6 mx-auto my-5">Täysin anonyymi keskustelupalsta Clasulaisille.</p>

          <button onClick={handleSignIn} className="bg-box w-4/6 h-16 rounded-2xl mx-auto text-white text-background drop-shadow-2xl">Eteenpäin 🚀</button>

          <footer className="w-screen h-20 bg-box absolute bottom-0 flex justify-around items-center">
            <img className="bg-box" src={home} alt="" width={30}/>
            <img onClick={handleSignIn} className="bg-box" src={messages} alt="" width={30}/>
            <Link to={"/info"}>
              <img className="bg-box" src={info} alt="" width={30}/>
            </Link>
          </footer>
        </main>
      )
}

export default StartScreen