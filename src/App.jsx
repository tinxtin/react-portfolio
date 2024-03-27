import { useState } from 'react'

function App() {


    return (
        <div id='bgGround' className='h-dvh w-screen flex justify-between px-24 gap-4 bg-neutral-950 text-gray-300'>
            <div id='bgEffect' className='h-full w-full relative'>
                <div id='bgHorizontalLine' className='h-full w-full fixed bg-gradient-to-r from-bgEffectColor from-1px to-transparent to-1px bg-[length:95px_95px] z-0'></div>
                <div id='bgVerticalLine' className='h-full w-full fixed bg-gradient-to-b from-bgEffectColor from-1px to-transparent to-1px bg-[length:10px_95px] z-0'></div>
                <div id='bgCenter' className='h-full w-full fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bgEffectColor to-transparent z-0'></div>
            </div>
        </div>
    );

};

export default App
