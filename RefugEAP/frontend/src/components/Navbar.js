import React, { Component } from 'react';
import "./Navbar.css";
import { MenuItems } from './MenuItems';


class Navbar extends Component {
    render(){
        
        return(
            <nav className='NavbarItems'>
                <h1 className='logo'> RefugEAP <img alt="" className='Clogo' src ="/src/images/RefugEAP.jpg"/>
                </h1>
                <ul className='bar'>
                    {MenuItems.map((item,index)=>{
                        return(
                        <li key={index}>
                            <a href={item.url}
                            className={item.cName} >
                                <i class={item.icon}>
                                    {item.title}
                                </i>
                            </a>
                        </li>

                        )
                    })}
                    
                </ul>
        </nav>
        )
    
    }
}




export default Navbar;