import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';

function CustomLink({ to, children}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    console.log(children)

    return (
        <li className={isActive ? 'active relative m-0 p-0': 'relative m-0 p-0'} >
            <span className={isActive ? 'absolute text-slate-300 h-max leading-none opacity-100 top-[-2] left-[-2px] text-24px pointer-events-none transition-opacity' : 'absolute text-slate-300 h-max leading-none opacity-0 top-0 left-[-2px] text-24px transition-opacity'}>●</span>
            <NavLink to={to} className={({ isActive }) => isActive ? 'relative text-slate-300 opacity-0 transition-opacity hover:text-zinc-400' : 'relative text-slate-300 opacity-100 transition-opacity hover:text-zinc-400'}>
                {children}
            </NavLink>
        </li>
    )
}

function Navbar() {

    return (
        <nav id='siteNav' className='lg:block hidden'> 
            <ol className='flex flex-col list-none gap-y-4'>
                <CustomLink to='/'>
                    About
                </CustomLink>
                <CustomLink to='/projects'>
                    Projects
                </CustomLink>
                <CustomLink to='/contacts'>
                    Contacts
                </CustomLink>
            </ol>
        </nav>
    )
}

export default Navbar;