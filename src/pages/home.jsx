import React, {useState} from 'react'
import Footer from '../components/footer';
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/data';
import Navbar from '../components/navbar'
import Services from '../components/services';
import Sidebar from '../components/sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/> 
           <HeroSection/>
           <InfoSection {...homeObjOne}/>
           <InfoSection {...homeObjTwo}/>
           <Services/>
           <InfoSection {...homeObjThree}/>
           <Footer/>
        </>
    )
}

export default Home
