
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'

import Kontakt from './pages/Kontakt'
import Impressum from './pages/Impressum'
import Datenschutzerklaerung from './pages/Datenschutzerklaerung'
import AGBs from './pages/AGBs'

import LoginView from './pages/LoginView'
import RegistrationView from './pages/RegistrationView'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Navigate to='login' />} />

                <Route path='home' element={<Home />} />

                <Route path='login' element={<LoginView />} />
                <Route path='registration' element={<RegistrationView />} />

                <Route path='pdf'>
                    <Route path='kontakt' element={<Kontakt />} />
                    <Route path='impressum' element={<Impressum />} />
                    <Route path='datenschutzerklaerung' element={<Datenschutzerklaerung />} />
                    <Route path='agb' element={<AGBs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}