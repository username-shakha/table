import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from '../pages/home'
import Root from '../pages'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root />}>
                <Route path="home" element={<Home />} />
            </Route>
        </>
    )
)

export default router
