import React, { Component } from 'react'
import {Tab , Tabs , TabList , TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';


export class Ccourse extends Component {
    render() {
        return (
            <div>
               
                <div className="container">
                    <div className="row">
                    <button className="back_button"><Link to="/" className="backlink">Back</Link></button>
                        <div className="col-12 col-sm-6 col">
                     
                      
                        <Tabs>
    <TabList>
      <Tab >All</Tab>
      <Tab >Beginner</Tab>
      <Tab >Intermediate</Tab>
      <Tab >Proffesional</Tab>
    </TabList>
 
    <TabPanel>
      <div className="Quiz-grid">
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Data Types, Operators and Expressions in C
                                          Level-1</h3>
                 
                       <Link to='/Cinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Control Flow Statements in C
                                         Level-1</h3>
                 
                       <Link to='/Ccfinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-1</h3>
                 
                       <Link to='/Cfunctioninstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-2</h3>
                 
                       <Link to='/Pythonfunction2instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Program Structure Level-1</h3>
                 
                       <Link to='/Cpsinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Pointers and Arrays Level-1</h3>
                 
                       <Link to='/Cpinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Structures, Unions & Bit-Fields in C
                       Level-1</h3>
                 
                       <Link to='/Csuinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>

          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Input & Output – 1
                       Level-1</h3>
                 
                       <Link to='/Cioinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="Quiz-grid">
    <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Data Types, Operators and Expressions in C
                    Level-1</h3>
                 
                       <Link to='/Cinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Control Flow Statements in C 
                   Level-1</h3>
                 
                       <Link to='/Ccfinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
       
         
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-1</h3>
                 
                       <Link to='/Cfunctioninstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Program Structure Level-1</h3>
                 
                       <Link to='/Cpsinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Pointers and Arrays Level-1</h3>
                 
                       <Link to='/Cpinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Structures, Unions & Bit-Fields in C
                       Level-1</h3>
                 
                       <Link to='/Csuinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Input & Output 
                       Level-1</h3>
                 
                       <Link to='/Cioinstruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>

      </div>
    </TabPanel>
    <TabPanel>
    <div className="Quiz-grid">
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-2</h3>
                 
                       <Link to='/Pythonfunction2instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          </div>

    </TabPanel>
  </Tabs>
                     </div>

                   
                    </div>
                  
                </div>
            
               
            </div>
       
        )
    }
}

export default Ccourse
