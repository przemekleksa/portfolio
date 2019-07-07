import React from 'react';
import Menu from '../../components/menu/menu';
import './homepage.scss';
import przemek from './przemek.png';
import About from '../../components/about/about';
import Abilities from '../../components/abilities/abilities';

const Homepage = () => {
    return ( 
        <div>
            <div className="container">
                <Menu />
                <div className="welcome">
                    <div className="profile">
                        <div className="photo">
                            <img src={przemek} alt="Przemek Leksa photo" />
                        </div>
                        <div className="typewriter">
                            <h1>
                                Przemysław <span>Leksa</span>
                            </h1>
                            <h2>Frontend developer</h2>
                        </div>
                        
                    </div>
                </div>
                <div className="rest">
                    <About />
                    <Abilities />
                </div>

            </div>
        </div>
     );
}
 
export default Homepage;