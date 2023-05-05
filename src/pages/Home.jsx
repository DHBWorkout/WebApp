import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Text from '../components/Hometext'

export default function Home() {
    window.addEventListener('beforeunload', (event) => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        event.preventDefault();
        event.returnValue = '';
    });
    return (
        <div>
            <Sidebar />
            <Text />
            <Footer />
        </div>
    )
}