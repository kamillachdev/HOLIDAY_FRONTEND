import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { urlRequests } from './endpoints';

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

  return (
    <>
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
      <footer>
        <span>Copyright © 2023 Necto S.A.</span>
      </footer>
    </>
  );
}

export default App;