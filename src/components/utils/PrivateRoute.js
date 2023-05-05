import { Outlet, Navigate } from 'react-router-dom'
import getCookie from '../../Cookies'


const PrivateRoutes = () => {

    // if (getCookie() == "") {
    //     let auth = {'token': false}
    // }

    let auth = {'token': getCookie('token')}
    console.log(auth)
    return(
        auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes