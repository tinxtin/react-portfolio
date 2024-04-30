import Story from '../components/about/about';

function About() {

    return (
        <section className='relative text-wrap w-full h-full page'>
            <div className='absolute lg:bottom-0 lg:right-0 lg:w-1/2 text-wrap'>
                <Story/>
            </div>
        </section>
    )
}

export default About;