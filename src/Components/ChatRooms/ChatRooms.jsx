import messages from '../../assets/communications.png';
import info from '../../assets/chat.png';
import arrow from '../../assets/arrow.png';

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
            <h1 className='text-4xl font-bold text-center my-4'>Palstat.</h1>
            
            <Link to={"/yleinen"}><Channel channel='Yleinen'/></Link>
            <Link to={"/opiskelu"}><Channel channel='kouluhommat'/></Link>
            <Link to={"/vapaa"}><Channel channel='Kysy!'/></Link>
            <Link><Channel channel='Clasuihastukset'/></Link>

            <footer className="w-screen h-20 bg-box absolute bottom-0 flex justify-around items-center">
                <img className="bg-box" src={messages} alt="" width={30}/>
                <Link to={"/info"}>
                    <img className="bg-box" src={info} alt="" width={30}/>
                </Link>
            </footer>
        </main>
    )
}

export default ChatRooms