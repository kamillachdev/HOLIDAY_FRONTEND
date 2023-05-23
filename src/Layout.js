import { Grid } from '@mui/material';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { urlRequests } from './endpoints';

const MyComponent = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <header>
        <span>Copyright © 2023 Necto S.A.</span>
        </header>
      </Grid>
      <Grid item xs={12}>
        <div>
        <span>Copyright © 2023 Necto S.A.</span>
        </div>
      </Grid>
      <Grid item xs={12}>
        <footer>
            <span>Copyright © 2023 Necto S.A.</span>
        </footer>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
