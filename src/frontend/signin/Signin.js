import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../App';


export default function Signin() {
  const {state, dispatch} = useContext(UserContext);
  const [config, setConfig] = useState({
    name: '',
    email: '',
    password: '',
    
  });
  let history = useHistory();
  const signin = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post('http://localhost:5000/signin', config);
      console.log(user);
      dispatch({type:"USER", payload:true})

    } catch (error) {
      window.alert('invalid crediential');
      console.log(error);
      history.push('/signin');
      return
    }
    window.alert("signin successfully");
    history.push('/info');
    
  };
  const signup = (e) => {
    e.preventDefault();
    history.push('/register');
  };
  const paperStyle = {
    padding: 20,
    height: '60vh',
    width: 360,
    margin: '8% auto',
  };
  return (
    <>
      <Box
        className='sec'
        sx={{
          width: '400px',
          position: 'absolute',
          left: '30%',
          top: '20%',
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <div className='signin-form'>
            <Typography variant='h5' sx={{ mt: 2, ml: 17 }} component='h2'>
              Sign in
            </Typography>
            <form className='register-form' id='register-form'>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    required='this is required field'
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, name: e.target.value }))
                    }
                    label='Name'
                    variant='outlined'
                  />
                </Box>
              </div>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    required='this is required field'
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, email: e.target.value }))
                    }
                    label='Email'
                    variant='outlined'
                  />
                </Box>
              </div>

              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  noValidate
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, password: e.target.value }))
                    }
                    label='Password'
                    type = 'password'
                    variant='outlined'
                  />
                </Box>
              </div>

              <div>
                <Button
                  variant='contained'
                  onClick={signin}
                  sx={{
                    ml: 17,
                    mt: 3,
                  }}
                  noValidate
                >
                  Sign in
                </Button>
              </div>
              <div class='container signin'>
                  <p>
                    Don`t have an account? <a href='#' onClick = {signup}>create account </a>.
                  </p>
                </div>
            </form>
          </div>
        </Paper>
      </Box>
    </>
  );
}
