import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MainHome from '../../components/home/mainhome/Mainhome';

function Home() {
    return (
        <div>
            <Header></Header>
            <main>
                <MainHome></MainHome>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Home