import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/navbar/SideDrawer';
import MenuBackdrop from './components/navbar/MenuBackdrop';
import Hero from './components/Hero';
import Portfolio from './components/sections/portfolio/Portfolio';
import About from './components/sections/About';
import Recommendations from './components/sections/Recommendations';
import Inspiration from './components/sections/Inspiration';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import './sass/main.scss';

class App extends Component {
    state = {
        sideDrawerOpen: false,
    };

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    sideDrawerCloseHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <MenuBackdrop />;
        }
        return (
            <div className='App'>
                <Navbar sideDrawerHandler={this.sideDrawerHandler} />
                <SideDrawer
                    show={this.state.sideDrawerOpen}
                    click={this.sideDrawerCloseHandler}
                />
                {backdrop}
                <Hero />
                <div className='container'>
                    <Portfolio />
                    <About />
                    <Inspiration />
                    <Recommendations />
                    <Contact />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;

