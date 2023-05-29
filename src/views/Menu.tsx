import { Grid } from '@mui/material';
import '../index.css';

const Menu = () => 
{
    return (
    <div>
      <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" style={{ flex: 1 }}>
        <Grid item xs={12}>
            <div className="header">
              <div className="inner-header flex">
                <img src="/necto-logo.png" alt="Your Logo" className="logo" />
                <h1 className="systemUrlopowy">SYSTEM URLOPOWY</h1>
              </div>
              <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                  <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                  </defs>
                  <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                  </g>
                </svg>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} style={{ flex: 1 }}>
            <div id="main">
              
            </div>
          </Grid>
          <Grid item xs={12} style={{ flex: 1 }}>
            <footer>
              <span><b>&copy; {new Date().getFullYear()} Necto S.A.</b></span>
            </footer>
          </Grid>
      </Grid>
    </div>
    );
};
export default Menu;