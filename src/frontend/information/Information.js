import React, {useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import './info.css';
import { Button } from '@mui/material/';
import axios from 'axios';
import { UserContext } from '../../App';

function Info() {
  const {state, dispatch} = useContext(UserContext);
  const CallInfoPage = async () => {
    try{
      const res = await axios.get('http://localhost:5000/info');
      console.log(res);
    } 
    catch (error){
      console.log(error);
      history.push('/signin');
    }  
  }
  
  useEffect(()=> {
    CallInfoPage();
  }, []);
  
  let history = useHistory();
  const addWorkout = () => {
    history.push('/data');
  };

  return (
    <>
      <div className='infomain'>
        <div className='fitness'>
          <h1>My Fitness Tracker🏋️‍♂️</h1>
          <Button variant='contained' onClick={addWorkout}>
            Add Workout
          </Button>
        </div>
      </div>
    </>
  );
}
export default Info;
