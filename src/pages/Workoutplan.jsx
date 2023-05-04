import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Text from "../components/Workoutplans";


export default function Home() {
    return (
        <div>
            <Sidebar />
            <Text />
            <Footer />
        </div>
    )
}