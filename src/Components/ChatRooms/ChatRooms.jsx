import chat from '../../assets/bubble-chat.png'
import study from '../../assets/graduation-hat.png'
import freetime from '../../assets/beach.png'
import info from '../../assets/exclamation-mark.png'

import { Link } from 'react-router-dom';

const Channel = (props) => {
    return (
        <div className="bg-box w-80 h-20 mx-auto my-4 rounded-3xl flex justify-start items-center">
            <img className='m-6 bg-box' src={props.img} alt="" width={50}/>
            <h1 className='flex-grow text-3xl pl-3 font-bold bg-box'>{props.text}</h1>
        </div>
    )
}

const ChatRooms = () => {
    return (
        <main className="bg-background w-screen max-h-full flex flex-col">
            <h1 className="w-screen text-6xl text-center font-bold mt-8 mb-8">ChatRooms</h1>
            <section className="w-screen flex flex-col flex-grow justify-center items-center">
                <Link to="/yleinen">
                    <Channel img={chat} text="Yleinen"/>
                </Link>
                <Link to="/opiskelu">
                    <Channel img={study} text="Opiskelu"/>
                </Link>
                <Link to="/vapaa">
                    <Channel img={freetime} text="Vapaa-aika"/>
                </Link>
                <Link to="/info">
                    <Channel img={info} text="Info"/>
                </Link>
            </section>
        </main>
    )
}

export default ChatRooms