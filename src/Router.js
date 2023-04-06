
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mainpage from './Mainpage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Mainpage />} />
            </Routes>
        </BrowserRouter>
    )
}