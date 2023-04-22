import React, { useState } from 'react';
import './data.css';
import { useHistory } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import { MenuItem } from '@mui/material';

export default function Data() {
  const [config, setConfig] = useState({
    name: '',
    sets: '',
    reps: '',
    unit: '',
    date: '',
  });

  let history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:5000/student', config);
    } 
    catch (error) {
      console.log(error);
      
    }
    history.push('/preview');
  };

  return (
    <>
      <div className='data'>
        <div className='mdata'>
          <h1>My Fitness Tracker</h1>
          <div>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              autoComplete='off'
               >
                
              <TextField required
                id='outlined-basic'
                select
                label='Exercise Name'
                variant='outlined'
                onChange={(e) =>
                  setConfig((pv) => ({ ...pv, name: e.target.value }))
                }
                > 
                <MenuItem value ={'Pushup'}>Pushup</MenuItem>
                <MenuItem value ={'Thrusters'}>Thrusters</MenuItem>
                <MenuItem value ={'Knees-to-Elbows'}> Knees-to-Elbows</MenuItem>
                <MenuItem value ={'Deadlifts'}>Deadlifts</MenuItem>
                <MenuItem value ={'burpees'}>burpees</MenuItem>
                <MenuItem value ={'Kettlebell Swings'}> Kettlebell Swings</MenuItem>
                <MenuItem value ={'Pull-Ups'}>Pull-Ups</MenuItem>
                </TextField>
                <TextField
                required
                id='outlined-basic'
                onChange={(e) =>
                  setConfig((pv) => ({ ...pv, sets: e.target.value }))
                }
                label='Sets'
                type = 'number'
                variant='outlined'
              />
            </Box>
          </div>

          <div>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              autoComplete='off'
            >
              <TextField
                required
                id='outlined-basic'
                onChange={(e) =>
                  setConfig((pv) => ({ ...pv, reps: e.target.value }))
                }
                label='Reps'
                variant='outlined'
                type = 'number'
              />
              <TextField
                required
                id='outlined-basic'
                onChange={(e) =>
                  setConfig((pv) => ({ ...pv, unit: e.target.value }))
                }
                label='Unit'
                variant='outlined'
                type = 'number'
              />
            </Box>
          </div>

          <div>  
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },  
              }}
              autoComplete='off'
              
            >
             <TextField
               
                required
                id='outlined-basic'
                onChange={(e) =>
                  setConfig((pv) => ({ ...pv, date: e.target.value }))
                }
                variant='outlined'
                type = 'Date'
              />
              
            </Box>
          </div>
          <div>
            <Button variant='contained' onClick={submit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
