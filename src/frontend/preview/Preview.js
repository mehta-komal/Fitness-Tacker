import React, { useEffect, useState } from 'react';
import './prev.css';
import {
  Box,
  Alert,
  IconButton,
  Collapse,
  Button,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import {
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from '@mui/material';

export default function Preview() {
  let history = useHistory();
  const [open, setOpen] = useState(true);
  const [userData, setuserData] = useState(null);
  let dateArray = 0;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (e) => {
    try {
      const data = await axios.get('http://localhost:5000/student');
      setuserData(data);
     
   
    } catch (error) {
      console.log(error);
    }
  };
  
  if (userData) {
    dateArray = userData?.data[userData?.data?.length - 1]?.date;
  } 

  function data() {
    history.push('/data');
  }
 

  return (
    <>
      <div className='preview'>
        <Box sx={{ width: '20%', position: 'absolute', left: '40%' }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Workout is added successfully
            </Alert>
          </Collapse>
        </Box>

        <div className='workoutdata'>
          <h1>Workout Preview</h1>
        </div>
      </div>

      <div className='table'>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 400 }}
            size='small'
            aria-label='a dense table'
            align='top'
          >
            <TableHead>
              <TableRow
                style={{
                  backgroundColor: 'burlywood',
                  color: 'blue',
                  padding: '15px',
                }}
              >
                <TableCell>Exercise Name</TableCell>
                <TableCell>Sets</TableCell>
                <TableCell>Reps</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Date</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {userData?.data?.map((data) => {
                if (dateArray === data?.date) {
                  return (
                    <>
                      <TableRow>
                        <TableCell component='th' scope='row'>
                          {data?.name}
                        </TableCell>
                        <TableCell>{data?.sets}</TableCell>
                        <TableCell>{data?.reps}</TableCell>
                        <TableCell>{data?.unit}</TableCell>
                        <TableCell>{data?.date}</TableCell>
                        
                      </TableRow>
                    </>
                  );
                } else {
                  return;
                  <></>;
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Button
          variant='contained'
          onClick={data}
          sx={{
            ml: 30,
            mt: 30,
          }}
         
        >
          Create New
        </Button>
      </div>
    </>
  );
}
