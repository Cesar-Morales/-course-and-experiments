import React from 'react';
import { render } from 'react-dom';
import PokeRandom from './components/PokeRandom';
import Pokemon from './components/Pokemon'
import { BrowserRouter as Router, 
         Route, 
         Link 
} from "react-router-dom";
import "./style/normalize.css";
import "./style/main.css";
import font from './static/pokemonFont.png';

render(
        <Router>
            <div className="body">
                <div className="header">
                    <img src={font}/>
                </div>
                <div className="navbar">
                    <Link to="/">
                        <h2 className="each">Home</h2>
                    </Link>
                    <Link to="/get-poke">
                        <h2 className="each">Get Pokemon</h2>
                    </Link>
                </div>
                
                    <div className="left">
                        
                    </div>
                    <div className="middle">
                        <Route exact path="/" component={Pokemon}/>
                        <Route path="/get-poke" component={PokeRandom}/>
                    </div>
                    <div className="right">
                        
                    </div>
                
                <div className="footer">
                    poke-api © 2021
                </div>
            </div>
        </Router>
    ,
    document.getElementById('app')
)
