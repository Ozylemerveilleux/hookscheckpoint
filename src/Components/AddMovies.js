import React from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button , Form} from 'react-bootstrap';

function AddMovies() {
     return(
        <div>
        <Form.Control size="text" type="text" placeholder="src of img"/>
        <Form.Control size="text" type="text" placeholder="Title"/>
        <Form.Control type="text" placeholder="Description"/>
        <Form.Control size="text" type="text" placeholder="posterURL"/>
        <Form.Control size="text" type="text" placeholder="Rating"/>
         <br/>
        <Button variant="primary" type="submit">Submit</Button>
      </div>
     )
}
export default AddMovies ;