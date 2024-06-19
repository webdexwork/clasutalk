import { signInAnonymously } from "firebase/auth"
import { getAuth } from 'firebase/auth';

import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import exclamation from '../../assets/exclamation-mark.png';

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
        <main className='w-screen max-h-full bg-background flex flex-col'>
            <h1 className='text-2xl font-bold w-screen text-center mt-5 mb-5'>ClasuTalk on täysin anonyymi avoimen lähdekoodin keskustelupalsta.</h1>
            <section className='grid grid-rows-2 grid-cols-3 gap-x-10 gap-y-4 w-fit h-fit mx-auto my-5'>
                <img src={icon1} alt="" width={50}/>
                <img src={icon2} alt="" width={50}/>
                <img src={icon3} alt="" width={50}/>
                <img src={icon4} alt="" width={50}/>
                <img src={icon5} alt="" width={50}/>
                <img src={icon6} alt="" width={50}/>
            </section>
            <section className="w-screen h-24 flex justify-center items-center">
                <button onClick={handleSignIn} className="text-2xl font-bold bg-box rounded-full p-5 hover:bg-purple transition-all shadow-2xl shadow-purple">Siirry keskustelemaan</button>
            </section>
            <section className="w-screen h-24 mt-5 mb-5 flex justify-center items-center">
                <img className="m-3 animate-bounce" src={exclamation} alt="" width={50}/>
                <p className="bg-purple rounded-lg mr-4 mb-4 mt-4 p-4 font-bold text-l">ClasuTalkissa on vain yksi sääntö: Älä jaa ihmisten nimiä tai kuvia keskusteluissa.</p>
            </section>
        </main>
      )
}

export default StartScreen