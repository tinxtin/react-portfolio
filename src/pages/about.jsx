import Story from '../components/about/about';


function About() {

    return (
        <section className='page w-full min-h-screen'>
            <div className='absolute right-2space bottom-2space whitespace-nowrap text-wrap w-1/4 leading-normal'>
                <Story/>
            </div>
        </section>
    )
}

export default About;