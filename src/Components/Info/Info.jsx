import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow-small-right.png'

const Info = () => {
    return (
        <main className="w-screen max-h-full bg-background flex flex-col">
            <Link to={"/"}>
                <button className='absolute top-8 left-2 text-2xl font-bold text-purple rotate-180'><img src={arrow} alt="" width={50}/></button>
            </Link>
            <h1 className="w-screen text-4xl text-center font-bold mt-8 mb-8">Info</h1>
            <section className='w-screen'>
                <h2 className='font-bold text-2xl text-center'>ClasuTalk on täysin anonyymi avoimen lähdekoodin keskustelupalsta.</h2>
                <ul className='list-disc list-inside text-l text-center w-screen mx-auto'>
                    <li className='m-5 font-semibold'>ClasuTalkin tarkoituksena on tarjota opiskelijoille 100% anonyymi sensuroimaton keskustelupalsta.</li>
                    <li className='m-5 font-semibold'>ClasuTalk on avoimen lähdekoodin projekti. Sivu on kehitetty täysin henkilökohtaisena projektina, eikä se kaupallistu, tai kerää ja tallenna tietoja käyttäjistä.</li>
                    <li className='m-5 font-semibold'>ClasuTalkissa on vain yksi sääntö: Älä jaa ihmisten nimiä keskusteluissa❤️</li>
                </ul>
            </section>
        </main>
    )
}

export default Info