import React from 'react';
import Studentpage from './components/Studentpage'
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'


import Pythoncourse from './python/Pythoncourse'
import Ccourse from './C/Ccourse'





import Pythoninstruction from './python/Pythonoperator/Pythoninstruction'
import Pythonoperator from './python/Pythonoperator/Pythonoperator'
import Pythonsummary from './python/Pythonoperator/Pythonsummary'



import Pythoncontrolstructure from './python/Pythoncontrolstructures/Pythoncontrolstructure'
import Pythoncsinstruction from './python/Pythoncontrolstructures/Pythoncsinstruction'
import Pythoncssummary from './python/Pythoncontrolstructures/Pythoncssummary'

import Pythonfunctioninstruction from './python/Pythonfunction/Pythonfunctioninstruction'
import Pythonfunction from './python/Pythonfunction/Pythonfunction'
import Pythonfsummary from './python/Pythonfunction/Pythonfsummary'

import Pythonfunction2instruction from './python/Pythonfunctions2/Pythonfunction2instruction'
import Pythonfunction2 from './python/Pythonfunctions2/Pythonfunction2'
import Pythonf2summary from './python/Pythonfunctions2/Pythonf2summary'

import Cinstruction from './C/DataTypes/Cinstruction'
import Cdatatype from './C/DataTypes/Cdatatype'
import Cdatatypesummary from './C/DataTypes/Cdatatypesummary'

import Ccfinstruction from './C/Controlflow/Ccfinstruction'
import Ccontrolflow from './C/Controlflow/Ccontrolflow'
import Ccfsummary from './C/Controlflow/Ccfsummary'

import Cfunctioninstruction from './C/CFunctions/Cfunctioninstruction'
import Cfunction from './C/CFunctions/Cfunction'
import Cfsummary from './C/CFunctions/Cfsummary'

import Cprogramstructure from './C/ProgramStructure/Cprogramstructure'
import Cpsinstruction from './C/ProgramStructure/Cpsinstruction'
import Cpssummary from './C/ProgramStructure/Cpssummary'

import Cpinstruction from './C/Pointers/Cpinstruction'
import Cpointers from './C/Pointers/Cpointers'
import Cpsummary from './C/Pointers/Cpsummary'

import Csuinstruction from './C/Structures and Unions/Csuinstruction'
import Cstructure from './C/Structures and Unions/Cstructure'
import Csusummary from './C/Structures and Unions/Csusummary'

import Cioinstruction from './C/Input and Output/Cioinstruction'
import Cinputoutput from './C/Input and Output/Cinputoutput'
import Ciosummary from './C/Input and Output/Ciosummary'



function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Studentpage}></Route>
        <Route path="/Ccourse" exact component={Ccourse}></Route>
        <Route path="/pythoncourse" exact component={Pythoncourse}></Route>
       
        
        
        <Route path="/pythoninstruction" exact  component={Pythoninstruction}></Route>
        <Route path="/pythonoperator" exact  component={Pythonoperator}></Route>
        <Route path="/Pythonsummary" exact component={Pythonsummary}></Route>
  
        <Route path="/Pythoncsinstruction" exact component={Pythoncsinstruction}></Route>
        <Route path="/Pythoncontrolstructure" exact component={Pythoncontrolstructure}></Route>
        <Route path="/Pythoncssummary" exact component={Pythoncssummary}></Route>

        <Route path="/Pythonfunctioninstruction" exact component={Pythonfunctioninstruction}></Route>
        <Route path="/Pythonfunction" exact component={Pythonfunction}></Route>
        <Route path="/Pythonfsummary" exact component={Pythonfsummary}></Route>
        
        <Route path="/Pythonfunction2instruction" exact component={Pythonfunction2instruction}></Route>
        <Route path="/Pythonfunction2" exact component={Pythonfunction2}></Route>
        <Route path="/Pythonf2summary" exact component={Pythonf2summary}></Route>

        <Route path="/Cinstruction" exact component={Cinstruction}></Route>
        <Route path="/Cdatatype" exact component={Cdatatype}></Route>
        <Route path="/Cdatatypesummary" exact component={Cdatatypesummary}></Route>

        
        <Route path="/Ccfinstruction" exact component={Ccfinstruction}></Route>
        <Route path="/Ccontrolflow" exact component={Ccontrolflow}></Route>
        <Route path="/Ccfsummary" exact component={Ccfsummary}></Route>
        
        <Route path="/Cfunctioninstruction" exact component={Cfunctioninstruction}></Route>
        <Route path="/Cfunction" exact component={Cfunction}></Route>
        <Route path="/Cfsummary" exact component={Cfsummary}></Route>

        <Route path="/Cpsinstruction" exact component={Cpsinstruction}></Route>
        <Route path="/Cprogramstructure" exact component={Cprogramstructure}></Route>
        <Route path="/Cpssummary" exact component={Cpssummary}></Route>
      
        <Route path="/Cpinstruction" exact component={Cpinstruction}></Route>
        <Route path="/Cpointers" exact component={Cpointers}></Route>
        <Route path="/Cpsummary" exact component={Cpsummary}></Route>

        <Route path="/Csuinstruction" exact component={Csuinstruction}></Route>
        <Route path="/Cstructure" exact component={Cstructure}></Route>
        <Route path="/Csusummary" exact component={Csusummary}></Route>

        <Route path="/Cioinstruction" exact component={Cioinstruction}></Route>
        <Route path="/Cinputoutput" exact component={Cinputoutput}></Route>
        <Route path="/Ciosummary" exact component={Ciosummary}></Route>
      
    </Router>
    </div>
  );
}

export default App;
