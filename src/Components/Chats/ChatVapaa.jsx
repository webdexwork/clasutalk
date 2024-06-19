import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow-small-right.png'

const ChatVapaa = () => {
    return (
        <main className="w-screen h-screen bg-background flex flex-col">
            <Link to={"/"}>
                <button className='absolute top-8 left-2 text-2xl font-bold text-purple rotate-180'><img src={arrow} alt="" width={50}/></button>
            </Link>
            <h1 className="w-screen text-4xl text-center font-bold mt-8 mb-8">Opiskelu</h1>
            <p className='text-center'>Coming soon...</p>
        </main>
    )
}

export default ChatVapaa