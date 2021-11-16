import { Navbar } from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import classNames from 'classnames'

interface IProps {
    noFooter?: boolean
    children: any
    dark?: boolean
}

export const Layout = ({
    children,
    noFooter = false,
    dark = false,
}: IProps) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouterChange = () => {
            NProgress.start()
        }
        router.events.on('routeChangeStart', handleRouterChange)
        router.events.on('routeChangeComplete', () => NProgress.done())
        return () => {
            router.events.off('routeChangeStart', handleRouterChange)
        }
    }, [])
    return (
        <div className={classNames({ 'bg-dark': dark })}>
            <Navbar />
            <main className='container py-4'>{children}</main>
            {!noFooter && (
                <footer className='bg-dark text-light text-center'>
                    <div className='container p-4'>
                        <h1>&copy; Marcos Alvarez Portfolio</h1>
                        <p>2018 - {new Date().getFullYear()}</p>
                        <p>All rights Reserved</p>
                    </div>
                </footer>
            )}
        </div>
    )
}
