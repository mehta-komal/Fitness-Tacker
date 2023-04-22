import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

export default function Signup() {
  const [config, setConfig] = useState({
    name: '',
    email: '',
    profession: '',
    password: '',
    confirmpassword: '',
  });
 
  let history = useHistory();
  const signup = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post('http://localhost:5000/signup', config);
      
    } catch (error) {
      console.log(error);
      window.alert('invalid crediential');
      history.push('/register');
      return 
    
    }
    window.alert("signin successfully");
    history.push('/signin');
    
  };
  const signin = (e) => {
    e.preventDefault();
    console.log(config);
    history.push('/signin');
  };

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 360,
  };
  

  return (
    <>
    
      <Box
        className='sec'
        sx={{
          width: '400px',
          position: 'absolute',
          left: '30%',
          top: '15%',
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <div className='signup-form'>
            <Typography variant='h5' sx={{ mt: -2, ml: 17 }} component='h2'>
              Sign up
            </Typography>
            <form className='register-form' id='register-form'>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, name: e.target.value }))
                    }
                    label='Name'
                    autocomplete='off'
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
                  
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, email: e.target.value }))
                    }
                    label='Email'
                    type = 'email'
                    autocomplete='off'
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
                  
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, profession: e.target.value }))
                    }
                    label='Profession'
                    autocomplete='off'
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
                 
                  autoComplete='off'
                >
                  <form>
                  <TextField
                    required
                    id='standard-password-input'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, password: e.target.value }))
                    }
                    type = "password"
                    label='Password'
                    autocomplete='off'
                    variant='outlined'
                  
                  />
                    </form>
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
                    required
                    id='outlined-basic'
                    type = 'password'
                    onChange={(e) =>
                      setConfig((pv) => ({
                        ...pv,
                        confirmpassword: e.target.value,
                      }))
                    }
                    label='Confirm Password'
                    autocomplete='off'
                    variant='outlined'
                  />
                </Box>
              </div>
              <div>
                <Button
                  variant='contained'
                  onClick={signup}
                  sx={{
                    ml: 17,
                    mt: 0.5,
                  }}
                >
                  Signup
                  
                </Button>
              
                <div class='container signin'>
                  <p>
                    Already have an account? <a href='#' onClick = {signin}>Sign in</a>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Paper>
      </Box>
    
    </>
  );
}
