
import Form from './components/Form';
import { useState } from 'react';
// import BootstrapButton from './components/button';
// import State from './components/state';
// import Updatingobjects from './components/updating objects';
// import ArrayofObjects from './components/ArrayofObjects';
import Header from './components/MovieLand.js/Header';
import MoviesList from './components/MovieLand.js/MoviesList';
// import HookForm from './components/HookForm';
import UserDashboard from './components/useContext/UserDashboard';
function App() {
  const[searchMovie,setSearchMovie]=useState('')

  const handleChange=(event)=>{
    setSearchMovie(event.target.value)  
    console.log(searchMovie)   
  }

  return (
    <div style={{margin:'auto'}}>
  <Header  handleChange={handleChange} searchMovie={searchMovie}  />
  <MoviesList  searchMovie={searchMovie}  />
         {/*<Form/>*/}

        {/*<HookForm/>*/} 
        <UserDashboard/>
    </div>
  );
}

export default App;
