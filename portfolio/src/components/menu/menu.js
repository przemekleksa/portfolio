import React, { Component } from 'react';
import './menu.scss';



class Menu extends Component {
    state = {
        scrolled: false,
    }

    componentDidMount() {
        // this.updateDimensions();
         window.addEventListener('scroll', () =>{
             const isTop = window.scrollY < 100
            if (!isTop) {
                this.setState({
                    scrolled: true,
                    })
            } else {
                this.setState({
                    scrolled: false,
                })
            }
         })
     }

     componentWillUnmount() {
         window.removeEventListener('scroll');
     }
    render() {
        return ( 
        <nav className={this.state.scrolled ? 'scrolled' : ''}>
            <div className="burger"></div>
            <ul className={this.state.scrolled ? 'menu scrolled' : 'menu'}>
                <a href="#home">
                <li>
                    Home
                </li>
                </a>
                <a href="#about">
                <li>
                    About
                </li>
                </a>
                <a href="#stack">
                <li>
                    Stack
                </li>
                </a>
                <a href="#portfolio">
                <li>
                    Portfolio
                </li>
                </a>
                <a href="#contact">
                <li>
                    Contact
                </li>
                </a>
            </ul>
        </nav>
     );
    }
    
}
 
export default Menu;
