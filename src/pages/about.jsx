import Story from '../components/about/about';


function About() {

    return (
        <section className='w-full min-h-full page'>
            <div className='py-2pad px-2pad whitespace-nowrap'>
                <div className='flex flex-col items-end gap-y-12'>
                    <Story/>
                </div>
            </div>
        </section>
    )
}

export default About;