
import './App.css';

function App() {
   return (<div className='app'>
    <Job salary={30000} Job="React Developer" company="Cubix"/>
   </div>);
  }

  const Job =(props)=>{
    return (
      <div><h1>{props.salary}</h1>
      <h1>{props.Job}</h1>
      <h1>{props.company}</h1>
      </div>
    );
  }

export default App;
