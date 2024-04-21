import styled from 'styled-components';

function Intro() {

    return (
        <div id='introContent'>
            <h1 id='introHeader' data-text='Hi, I&apos;m Thinh Vu' className='relative text-slate-300 text-4xl font-bold leading-10 tracking-tightest pointer-events-none sm:text-5xl'>
                <mark id='introMark' className='relative text-inherit p-0 bg-transparent'>Hi, I'm Thinh Vu</mark>
            </h1>
            <h2 id='introTitle' data-text='Designer & Developer' className='relative text-slate-300 text-lg font-medium leading-7 tracking-wider mt-3 sm:text-xl'>
                <mark id='introMark' className='relative text-inherit p-0 bg-transparent'>Designer & Developer</mark>
            </h2>
            {/* <p id='introText' className='text-slate-300 leading-normal mt-4'>
                I focus on Website development with a keen eye for creating engaging UI design
            </p> */}
        </div>
    )
}

export default Intro;