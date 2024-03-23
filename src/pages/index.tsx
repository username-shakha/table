import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to={'/home'}>Home</Link>
        </nav>
    )
}

function Root() {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root
