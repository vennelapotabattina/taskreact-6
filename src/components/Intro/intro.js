import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () =>{
    return (
        <section id = "intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className='introName'>vennela</span> <br />ML Engineer</span>
                <p className='introPara'>I am a skilled Machine Learning Engineer with visualisation and data analytics knowledge</p>
                <Link><button className="btn"><img src = {btnImg} alt = "Hire Me"/>Hire Me</button></Link>
            </div> 
            
        </section>
    )
}

export default Intro;