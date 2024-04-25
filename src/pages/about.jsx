import Story from '../components/about/about';


function About() {

    return (
        <section className='relative text-wrap w-full max-h-screen page'>
            <div className='absolute bottom-0 right-0 w-1/2 text-wrap'>
                <Story/>
            </div>
        </section>
    )
}

export default About;