import { useState } from 'react'
import Canvas from './components/animation/matrix';
import Intro from './components/hero/intro';
import Social from './components/contacts/social';

function App() {
    
    return (
        <div id='bgGround' className='h-dvh w-screen flex bg-neutral-950'>
            <div id='bgEffect' className='h-full w-full relative'>
                <div id='bgHorizontalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed bg-gradient-to-r from-bgEffectColor from-1px to-transparent to-1px bg-[length:95px_95px] z-1'></div>
                <div id='bgVerticalLine' style={{backgroundPosition: '10px 10px'}} className='h-full w-full fixed bg-gradient-to-b from-bgEffectColor from-1px to-transparent to-1px bg-[length:10px_95px] z-1'></div>
                <div id='bgGlow' className='h-full w-full fixed bg-gradient-radial from-bgEffectColor to-transparent z-0'></div>
                <div id='bgLayout' className='h-dvh max-w-screen-xl leading-relaxed mx-auto px-6 py-12 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0 text-gray-300'>
                    <div className='h-dvh w-dvw flex lg:w-2/5'>
                        <header className='lg:flex lg:sticky lg:flex-col lg:justify-between lg:max-h-dvh lg:top-0 lg:py-24'>
                            <Intro></Intro>
                            <Social></Social>
                        </header>
                    </div>
                    <div className='h-dvh w-dvw flex lg:w-3/5'>
                        test
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App
