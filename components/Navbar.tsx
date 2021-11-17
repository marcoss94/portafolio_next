import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link href={'/'}>
                    <a className='navbar-brand'>Portfolio</a>
                </Link>

                <div>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link href={'/github'}>
                                <a className='nav-link'>Github</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
