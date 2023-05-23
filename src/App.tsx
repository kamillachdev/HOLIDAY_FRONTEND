import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { urlRequests } from './endpoints';
import Layout from 'C:\\Users\\k.lach\\source\\repos\\HOLIDAY_FRONTEND\\src\\Layout.js';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';

interface Request {
  id: number;
  dateStart: string;
  dateEnd: string;
  userId: number;
}

function App() {
  const [requestData, setRequestData] = useState<Request[]>([]);

  useEffect(() => {
    axios
      .get(urlRequests)
      .then((response: AxiosResponse<Request[]>) => {
        setRequestData(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving requests:', error);
      });
  }, []);

  /*return (
    <div>
      <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
        <Grid item xs={12}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12}>
        <div id="main">
        <h3>REQUESTS</h3>
        <div id="table-wrapper">
          <table id="fl-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date Start</th>
                <th>Date End</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {requestData.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{new Date(request.dateStart).toLocaleDateString()}</td>
                  <td>{new Date(request.dateEnd).toLocaleDateString()}</td>
                  <td>{request.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </Grid>
        <Grid item xs={12}>
          <footer>
            <span>Copyright © 2023 Necto S.A.</span>
          </footer>
        </Grid>
      </Grid>
    </div>
  );*/
  return (
    <div>
      <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" style={{ flex: 1 }}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12} style={{ flex: 1 }}>
          <div id="main">
            <h3>REQUESTS</h3>
            <div id="table-wrapper">
              <table id="fl-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date Start</th>
                    <th>Date End</th>
                    <th>User ID</th>
                  </tr>
                </thead>
                <tbody>
                  {requestData.map((request) => (
                    <tr key={request.id}>
                      <td>{request.id}</td>
                      <td>{new Date(request.dateStart).toLocaleDateString()}</td>
                      <td>{new Date(request.dateEnd).toLocaleDateString()}</td>
                      <td>{request.userId}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Grid>
      </Grid>
      <footer>
        <span><b>&copy; {new Date().getFullYear()} Necto S.A.</b></span>
      </footer>
    </div>
  );
  
}

export default App;