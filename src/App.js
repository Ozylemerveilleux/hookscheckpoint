import React, {useState} from 'react';
import Header from './Components/Header';
import AddMovies from './Components/AddMovies';
import './App.css'
import {Button , Form} from 'react-bootstrap';
import MovieList from './Components/MovieList';

function App() {
  return (
    <div className="App">
         <div>
          
          <h1>My Movie Card</h1>
          
        </div>
        <Header/>
        <Form/>
        <MovieList/>
    </div>

  );
}

function ButtonAddMovie(){
  const [show, setShow] = useState (true)
  
  return(
    <div> 
      <ButtonAddMovie/>
      {
        show? null: <AddMovies/>
      }
        <Button onClick={() => setShow(false)} variant="success">+Add</Button>
        <Button onClick={() => setShow(true)} variant="danger"> Closed </Button>
    </div>
  );
}
export default App;
