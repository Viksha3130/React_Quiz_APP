import React, { Component , Fragment } from 'react'
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet";

export class Studentpage extends Component {
    render() {
        return ( 
            <Fragment>
            <div id="home" >
            
                <Helmet><title>React_Quiz_App</title></Helmet>
                <div className="container">
                    <section>
                        <div><h1 >Quiz App</h1> 
                        <div>
                        <ul className="ul_link">
                    
                  <button className="home_button"><Link class="home_button" to= "/Ccourse"> C Quiz</Link> </button>   
                 <button className="home_button"> <Link class="home_button" to= "/Pythoncourse"> Python Quiz</Link></button> 
                
                        
                    </ul>
                            
                            
                            
                            </div></div>
                
                </section>
                </div>
              
            </div>
            </Fragment>
        )
    }
}

export default Studentpage
