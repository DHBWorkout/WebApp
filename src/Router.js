import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

//import Login und Registration View
import LoginView from './pages/LoginView'
import RegistrationView from './pages/RegistrationView'

//import sidebar views
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Profile from "./pages/Profile";
import Workoutplan from "./pages/Workoutplan";


//import PDFS
import Kontakt from './pages/PDFsHome/Kontakt'
import Impressum from './pages/PDFsHome/Impressum'
import Datenschutzerklaerung from './pages/PDFsHome/Datenschutzerklaerung'
import AGBs from './pages/PDFsHome/AGBs'
import KontaktLogin from './pages/PDFsLogin/KontaktLogin'
import ImpressumLogin from './pages/PDFsLogin/ImpressumLogin'
import DatenschutzerklärungLogin from './pages/PDFsLogin/DatenschutzerklaerungLogin'
import AGBsLogin from './pages/PDFsLogin/AGBsLogin'
import KontaktRegistration from './pages/PDFsRegistration/KontaktRegistration'
import ImpressumRegistration from './pages/PDFsRegistration/ImpressumRegistration'
import DatenschutzerklaerungRegistration from './pages/PDFsRegistration/DatenschutzerklaerungRegistration'
import AGBsRegistration from './pages/PDFsRegistration/AGBsRegistration'

//import welcome workflow
import Birthday from './pages/WelcomeWorkflow/Birthday.jsx'
import Gender from './pages/WelcomeWorkflow/Gender.jsx'
import BodyData from './pages/WelcomeWorkflow/Bodydata.jsx'
import Calories from './pages/WelcomeWorkflow/Calories'
import Goal from './pages/WelcomeWorkflow/Goal'

//import Private Routes module
import PrivateRoutes from './components/utils/PrivateRoute'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Navigate to='login' />} />
                <Route path='login' element={<LoginView />} />
                <Route path='registration' element={<RegistrationView />} />

                <Route path='welcomeworkflow'>
                    <Route path='birthday' element={<Birthday />} />
                    <Route path='gender' element={<Gender />} />
                    <Route path='bodydata' element={<BodyData />} />
                    <Route path='calories' element={<Calories />} />
                    <Route path='goal' element={<Goal />} />
                </Route>

                <Route path='pdf' >
                    <Route path='login'>
                        <Route path='kontakt' element={<KontaktLogin />} />
                        <Route path='impressum' element={<ImpressumLogin />} />
                        <Route path='datenschutzerklaerung' element={<DatenschutzerklärungLogin />} />
                        <Route path='agb' element={<AGBsLogin />} />
                    </Route>

                    <Route path='registration'>
                        <Route path='kontakt' element={<KontaktRegistration />} />
                        <Route path='impressum' element={<ImpressumRegistration />} />
                        <Route path='datenschutzerklaerung' element={<DatenschutzerklaerungRegistration />} />
                        <Route path='agb' element={<AGBsRegistration />} />
                    </Route>


                </Route>


                <Route element={<PrivateRoutes />}>
                    <Route path='home' element={<Home />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='calculator' element={<Calculator />} />
                    <Route path='workoutplan' element={<Workoutplan />} />

                    <Route path='pdf'>


                        <Route path='home'>
                            <Route path='kontakt' element={<Kontakt />} />
                            <Route path='impressum' element={<Impressum />} />
                            <Route path='datenschutzerklaerung' element={<Datenschutzerklaerung />} />
                            <Route path='agb' element={<AGBs />} />
                        </Route>


                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}