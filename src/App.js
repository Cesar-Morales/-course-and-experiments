import logo from './logo.svg';
import './App.css';


//-------------------------------------------------------------------
//------------------Component Helloworld-----------------------------
//-------------------------------------------------------------------
function Helloworld(props){
  //console.log(props)
  return(
    <div id="hello">{props.rank} Hi {props.myname}! Im "COMPONATOR"</div>
  );
}
//-------------------------------------------------------------------------
//-----------------------Same component------------------------------------
//-------------------------------------------------------------------------
//const Helloworld = () => <div id="hello">Hi! Im "COMPONATOR"</div>-------
//-------------------------------------------------------------------------
//--------------------------or---------------------------------------------
//-------------------------------------------------------------------------
//---class Hellowold extends React.Component{------------------------------
//------render()-----------------------------------------------------------
//--------return <div id="hello">Hi! Im Hi! Im component "COMPONATOR"</div>
//------}------------------------------------------------------------------
//---}---------------------------------------------------------------------


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Pascu!
        </p>
        <div>
          This is component: 
          <Helloworld myname="Chizzo" rank="(First)"/> 
          <Helloworld myname="Tete"/> 
          <Helloworld myname="Tanque" rank="3."/>
        </div>
      </header>
    </div>
  );
}

export default App;