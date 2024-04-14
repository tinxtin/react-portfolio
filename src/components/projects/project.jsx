
function Project() {

    return (
        <div id='projects' className=''>
            <div className='group grid relative gap-8 grid-cols-8 transition-all'>
                <div id='containerBorder' className='absolute -left-4 -top-4 -right-4 -bottom-4 rounded-md z-0 transition lg:-left-6 lg:-right-6'></div>
                <div className='col-span-5 order-2 z-10'>
                    <h3 className='font-medium leading-snug text-slate-300'>
                        <a href='' className='inline-flex item-baseline leading-tight font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'>
                            <span id='linkBorder' className='absolute -left-4 -top-4 -right-4 -bottom-4 rounded-md sm:-left-6 sm:-right-6'></span>
                            <span id='linkTitle' className=''>
                                Placeholder project-1
                                <span id='appArrow' className='inline-block'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 ml-1 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-within:translate-x-1 group-focus-within:-translate-y-1 motion-reduce:transition-none" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </a> 
                    </h3>
                    <p className='text-sm leading-normal mt-2 text-balance'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. 
                        Morbi tincidunt augue interdum velit euismod in pellentesque.
                        Et odio pellentesque diam volutpat commodo sed. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
                    </p>
                    <ul className='mt-2 flex flex-wrap'>
                        <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 text-teal-300 px-3 py-1 text-xs font-medium leading-tight'>
                                JavaScript
                            </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 text-teal-300 px-3 py-1 text-xs font-medium leading-tight'>
                                CSS
                            </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 text-teal-300 px-3 py-1 text-xs font-medium leading-tight'>
                                HTML
                            </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 text-teal-300 px-3 py-1 text-xs font-medium leading-tight'>
                                React
                            </div>
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
    )
}

export default Project;