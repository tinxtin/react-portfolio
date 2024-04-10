import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Intro from './components/hero/intro';
import Social from './components/contacts/social';
import Navbar from './components/navbar/navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contacts from './pages/contacts';

function App() {
    
    return (
        <div id='page' className='fixed top-0 left-0 w-dvw h-dvh truncate bg-pageColor text-slate-300'>
            <div id='background' className='fixed left-pad top-pad right-pad bottom-pad bg-neutral-950 z-10'>
                <div id='bgHorizontalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed top-0 left-0 bg-gradient-to-r from-bgEffectColor from-1px to-transparent to-1px bg-[length:95px_95px] z-1'></div>
                <div id='bgVerticalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed top-0 left-0 bg-gradient-to-b from-bgEffectColor from-1px to-transparent to-1px bg-[length:10px_95px] z-1'></div>
                <div id='bgGlow' className='h-full w-full fixed bg-gradient-radial from-bgEffectColor to-transparent z-0'></div>
            </div>
            <div id='frame' className='fixed left-pad top-pad right-pad bottom-pad z-20'>
                <div id='frameLeft' className='left-0 top-0 w-px h-full absolute bg-neoGreen opacity-50'/>
                <div id='frameTop' className='left-0 top-0 w-full h-px absolute bg-neoGreen opacity-50'/>
                <div id='frameRight' className='right-0 top-0 w-px h-full absolute bg-neoGreen opacity-50'/>
                <div id='frameBottom' className='left-0 bottom-0 w-full h-px absolute bg-neoGreen opacity-50'/>
            </div>
            <div id='content' className="h-dvh w-dvw flex lg:justify-between">
                <header className='h-dvh w-dvw flex pl-2pad py-2pad z-20 lg:w-2/5'>
                    <div id='siteHeader' className='lg:flex lg:sticky lg:flex-col lg:justify-between lg:max-h-dvh lg:top-0'>
                        <Intro/>
                        <Navbar/>
                        <Social/>
                    </div>
                </header>
                <main className='h-dvh w-dvw flex pr-2pad py-2pad z-20 lg:w-3/5'>
                    <div id='siteMain'>
                        <Routes>
                            <Route path='/' element={<About/>}/>
                            <Route path='/projects' element={<Projects/>}/>
                            <Route path='/contacts' element={<Contacts/>}/>
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
        
    );
};

export default App

'flex h-dvh w-screen flex bg-neutral-950 justify-between'