import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import './App.css'
import Footer from './Components/Footer/Footer';
import { CssBaseline, Grid } from '@mui/material';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width:'100%', marginLeft:'0px', alignItems: 'center', paddingTop:'4rem'}}>
        <Grid item xs = {12} md={4} style={{}}>
          <List/>
        </Grid>
        <Grid item xs = {12} md = {8} style={{}}>
          <Map/>
        </Grid>
      </Grid>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}

export default App;
