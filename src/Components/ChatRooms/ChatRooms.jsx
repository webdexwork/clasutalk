import messages from '../../assets/communications.png';
import info from '../../assets/chat.png';
import arrow from '../../assets/arrow.png';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Channel = (props) => {
    return (
        <section className='flex justify-center my-2.5'>
            <img src={arrow} alt="" className='w-8 h-8 my-auto mr-2 ml-2'/>
            <div className="bg-box w-4/6 h-20 rounded-3xl flex items-center">
                <h1 className='text-2xl font-bold bg-box text-background flex-grow text-center'>{props.channel}</h1>
            </div>
        </section>
    )
}

const ChatRooms = () => {
    return (
        <main className='flex flex-col'>
            <h1 className='text-4xl font-bold text-center my-4' initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition: {duration: 0.1}}}>Palstat.</h1>
            <motion.div initial={{width: 0, opacity: 0}} animate={{width: '100%', opacity: 1}} exit={{x: window.innerWidth, transition: {duration: 0.1}, opacity: 0}}>
                <Link to={"/yleinen"}><Channel channel='Yleinen'/></Link>
                <Link to={"/opiskelu"}><Channel channel='kouluhommat'/></Link>
                <Link to={"/vapaa"}><Channel channel='Kysy!'/></Link>
            </motion.div>

            <motion.footer className="w-screen h-20 bg-box absolute bottom-0 flex justify-around items-center" initial={{width: 0, opacity: 0}} animate={{width: '100%', opacity: 1}} exit={{x: window.innerWidth, transition: {duration: 0.1}, opacity: 0}}>
                <img className="bg-box" src={messages} alt="" width={30}/>
                <Link to={"/info"}>
                    <img className="bg-box" src={info} alt="" width={30}/>
                </Link>
            </motion.footer>
        </main>
    )
}

export default ChatRooms