
function Project() {

    return (
        <div id='projects' className=''>
            <div className='grid relative gap-8 grid-cols-8 '>
                <div id='containerBorder' className='absolute -left-4 -top-4 -right-4 -bottom-4 bg-slate-300/75 rounded-md z-0 lg:-left-6 lg:-right-6'></div>
                <div id='grid' className='col-span-4 order-2 z-10'>
                    <h3>
                        <a href='' className='inline-flex item-baseline leading-5 font-medium text-slate-300 group'>
                            <span id='linkBorder' className='absolute -left-4 -top-4 -right-4 -bottom-4 rounded-md sm:-left-6 sm:-right-6'></span>
                            <span id='linkTitle' className='text-black'>
                                Placeholder
                                <span id='appArrow' className='inline-block'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 group-hover:transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </a> 
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Project;