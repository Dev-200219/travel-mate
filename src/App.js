import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import './App.css'
import Footer from './Components/Footer/Footer';
import { CssBaseline, Grid } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width:'100%', marginLeft:'0px', alignItems: 'center', height: '86%'}}>
        <Grid item xs = {12} md={4} style={{marginBottom: '20px'}}>
          <List/>
        </Grid>
        <Grid item xs = {12} md = {8}>
          <Map/>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}

export default App;
