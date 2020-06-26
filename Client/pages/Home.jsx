import React from "react";
import Terminal from '../components/displays/Terminal.jsx';
import CardList from '../components/cards/CardList.jsx';

const Home = () => {
    return (
        <div className="page" style={{ textAlign: 'center'}}
>
    <p className='page-title'>Simple oauth with Node</p>
    <p style={{fontSize: 20}}>
        Passposrt.js contains support for over
        <span style={{color: 'var(--primary-red'}}>500+</span>
        Get started today with just a username and password for apps like Facebook, Instagram, and Google.
    </p>
    <Terminal 
        userData={"passport.authenticate('google')"}
        selected="All"
    />
    <p style={{fontSize: 28}}>
        Popular Strategies
    </p>
    <CardList />
    <div style={{marginBottom: 20}} />

</div>    );
};

export default Home;