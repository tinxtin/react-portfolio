import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import Intro from './components/hero/intro';
import Social from './components/contacts/social';
import Navbar from './components/navbar/navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contacts from './pages/contacts';

function App() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log(scrollPosition)
        };
    }, []);

    return (
        <div id='page' className='fixed top-0 left-0 w-dvw h-dvh truncate bg-neutral-950 text-neutral-300'>
            <div id='background' className='fixed left-pad top-pad right-pad bottom-pad bg-neutral-950 pointer-event-none z-10'>
                <div id='bgHorizontalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed top-0 left-0 bg-gradient-to-r from-bgEffectColor from-1px to-transparent to-1px bg-[length:95px_95px]'></div>
                <div id='bgVerticalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed top-0 left-0 bg-gradient-to-b from-bgEffectColor from-1px to-transparent to-1px bg-[length:10px_95px]'></div>
                <div id='bgGlow' className='h-full w-full fixed bg-gradient-radial from-bgEffectColor to-transparent'></div>
            </div>
            <div id='mask' className='fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-30'>
                <div id='left' className='absolute top-pad left-0 bottom-pad w-pad bg-neutral-950/90'></div>
                <div id='top' className='absolute top-0 left-0 w-full h-pad bg-neutral-950/90'></div>
                <div id='right' className='absolute top-pad right-0 bottom-pad w-pad bg-neutral-950/90'></div>
                <div id='bottom' className='absolute bottom-0 left-0 w-full h-pad bg-neutral-950/90'></div>
            </div>
            <div id='frame' className='fixed left-pad top-pad right-pad bottom-pad pointer-event-none z-10'>
                <div id='frameLeft' className='left-0 top-0 w-px h-full absolute bg-green-300/50'/>
                <div id='frameTop' className='left-0 top-0 w-full h-px absolute bg-green-300/50'/>
                <div id='frameRight' className='right-0 top-0 w-px h-full absolute bg-green-300/50'/>
                <div id='frameBottom' className='left-0 bottom-0 w-full h-px absolute bg-green-300/50'/>
            </div>
            <header className=' fixed top-2pad left-2pad lg:w-2/4 z-20'>
                <Intro/>
                <Navbar/>
                <Social/>
            </header>
            <main className='fixed left-0 top-0 w-full h-full overflow-hidden overflow-y-auto z-20'>
                <div className='relative min-h-full' data-scroll='target' style={{transform: 'translate3d()'}}>
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                    </Routes>
                </div>
            </main>
        </div>
        
    );
};

export default App
