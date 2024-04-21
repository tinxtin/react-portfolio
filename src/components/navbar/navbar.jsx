import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';

function CustomRoute({ to, children}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? 'active flex relative m-0 p-0': 'flex relative m-0 p-0'} >
            <span className={isActive ? 'absolute text-neutral-300 h-max leading-none opacity-100 -top-2px -left-2px text-24px pointer-events-none transition-opacity duration-400' : 'absolute text-neutral-300 h-max leading-none opacity-0 -top-2px -left-2px text-24px transition-opacity duration-400'}>●</span>
            <NavLink to={to} className={({ isActive }) => isActive ? 'flex text-neutral-300 opacity-0 transition-opacity duration-400 pointer-events-none' : 'relative text-neutral-300 opacity-100 transition-opacity duration-400 hover:opacity-50'}>
                {children}
            </NavLink>
        </li>
    )
}

function Navbar() {

    return (
        <nav id='siteNav' className='lg:flex hidden mt-12 z-20 w-min cursor-pointer'> 
            <ol className='flex flex-col list-none gap-y-4'>
                <CustomRoute to='/'>
                    About
                </CustomRoute>
                <CustomRoute to='/projects'>
                    Projects
                </CustomRoute>
                <CustomRoute to='/contacts'>
                    Contacts
                </CustomRoute>
            </ol>
        </nav>
    )
}

export default Navbar;