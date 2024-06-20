import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.png'

const Info = () => {
    return (
        <main className="w-screen max-h-full bg-background flex flex-col">
            <Link to={"/"}>
                <button className='absolute top-8 left-2 text-2xl font-bold text-purple rotate-180'><img src={arrow} alt="" width={30}/></button>
            </Link>
            <h1 className="w-screen text-4xl text-center font-bold mt-8 mb-8">?</h1>
            <section className='w-screen'>
                <h2 className='w-5/6 mx-auto font-bold text-2xl text-center'>ClasuTalk on täysin anonyymi avoimen lähdekoodin keskustelupalsta.</h2>
                <ul className='list-disc list-inside text-l text-center w-screen mx-auto'>
                    <li className='m-5 font-semibold'>Kyseessä on täysin henkilökohtainen kooduasprojekti, eikä tarkoituksena ole kaupallistaa mitään.</li>
                    <li className='m-5 font-semibold'>Projektin ei ole tarkoitus kannustaa ihmisiä anonyymiin vihapuheeseen, eikä projektin tarkoitus ole täten ketään loukata.</li>
                    <li className='m-5 font-semibold'>Sivusto ei kerää minkäänlaista dataa osallistujista, ja perustuu täyteen anonymiteettiin, ethän silti jaa ihmisten nimiä keskusteluissa.</li>
                    <p className='font-bold text-xl'>ClasuTalk 1.0❤️</p>
                </ul>
            </section>
        </main>
    )
}

export default Info