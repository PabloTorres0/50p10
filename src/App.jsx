import './App.css'
import { getDataPromise } from './assets/handleGetData';
import React from 'react';
function App() {

  const[joke, setJoke] = React.useState('')

  const getJoke = () => { 
  getDataPromise().then(res=>setJoke(res))
  }

  React.useEffect(()=>{
    getJoke()
  },[])

  return (
    <div className='container'>
      <div className="card">
        <div className="title">
          Don't Laugh Challenge
        </div>
        <p>
          {joke}
        </p>
        <button
          onClick={()=>getJoke()}
        > Get Another Joke</button> 
      </div>
    </div>
  );
}

export default App;
