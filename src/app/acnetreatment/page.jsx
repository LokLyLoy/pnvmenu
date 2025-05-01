import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import AcneTreatment from "@/components/AcneTreatment/AcneTreatment";
import Acne from "@/data/acnetreatment.json"

const Page = () => {
    return (
        <div className='overflow-x-hidden'>
            <header id='header'>
                <TopNav/>
                <Menu/>
            </header>

            <main className='content'>
                <AcneTreatment category="Acne"/>

            </main>

            <footer id='footer'>
                <Footer/>
            </footer>

        </div>
    );
};

export default Page;