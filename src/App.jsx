import { useState, useEffect, useRef } from 'react'
import { Route, Routes} from 'react-router-dom'
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import Intro from './components/hero/intro';
import Social from './components/contacts/social';
import Navbar from './components/navbar/navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contacts from './pages/contacts';




function App() {

    const myRef = useRef(null);

    useEffect(() => {
        myRef.current.addEventListener('scroll', handleScroll);
        return () => {
            myRef.current.removeEventListener('scroll', handleScroll);
        };
        }, []);

    const handleScroll = (e) => {
        
        }

    return (
        <div id='page' className='fixed top-0 left-0 w-dvw h-dvh truncate bg-neutral-950 text-neutral-300 font-body'>
            <div id='background' className='fixed left-space top-space right-space bottom-space bg-neutral-950 pointer-events-none'>
                <div id='bgHorizontalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed top-0 left-0 bg-gradient-to-r from-bgEffectColor from-1px to-transparent to-1px bg-[length:95px_95px]'></div>
                <div id='bgVerticalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed top-0 left-0 bg-gradient-to-b from-bgEffectColor from-1px to-transparent to-1px bg-[length:10px_95px]'></div>
                <div id='bgGlow' className='h-full w-full fixed bg-gradient-radial from-bgEffectColor to-transparent'></div>
            </div>
            <div id='edge' className='fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-30'>
                <div id='left' className='absolute top-space left-0 bottom-space w-space bg-neutral-950/90'></div>
                <div id='top' className='absolute top-0 left-0 w-full h-space bg-neutral-950/90'></div>
                <div id='right' className='absolute top-space right-0 bottom-space w-space bg-neutral-950/90'></div>
                <div id='bottom' className='absolute bottom-0 left-0 w-full h-space bg-neutral-950/90'></div>
            </div>
            <div id='frame' className='fixed left-space top-space right-space bottom-space pointer-events-none z-10'>
                <div id='frameLeft' className='left-0 top-0 w-px h-full absolute bg-green-300/50'/>
                <div id='frameTop' className='left-0 top-0 w-full h-px absolute bg-green-300/50'/>
                <div id='frameRight' className='right-0 top-0 w-px h-full absolute bg-green-300/50'/>
                <div id='frameBottom' className='left-0 bottom-0 w-full h-px absolute bg-green-300/50'/>
            </div>
            <div className='lg:flex lg:justify-between lg:overflow-hidden overflow-y-auto h-screen px-2space'>
                <header id='header' className='lg:flex lg:flex-col lg:py-2space lg:justify-between sticky lg:w-min lg:max-h-screen pt-2space pb-space' ref={myRef}>
                    <div>
                        <Intro/>
                        <Navbar/>
                    </div>
                    <Social/>
                </header>
                <main id='main' data-scroll='area' className='lg:py-2space pb-2space lg:w-1/2 z-2' ref={myRef}>
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default App
