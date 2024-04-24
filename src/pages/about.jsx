import Story from '../components/about/about';


function About() {

    return (
        <section className='flex justify-end w-full h-screen page'>
            <div className='flex flex-col justify-end whitespace-nowrap text-wrap leading-normal w-1/2'>
                <Story/>
            </div>
        </section>
    )
}

export default About;