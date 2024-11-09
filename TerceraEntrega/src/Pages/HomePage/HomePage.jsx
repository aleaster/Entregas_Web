
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import axios from 'axios';
import { Grid } from '@mui/material';

import CharCard from '../../Componentes/CharCard/CharCard';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters")
      .then(response => {
        console.log("Data fetched:", response.data.items);
        setData(response.data.items)})
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id='home-page'>   
      <Grid container spacing={2} id='characters'>
        {data.map((element) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={element.id}>
            <Link to={"/details/" + element.id} style={{ textDecoration: 'none' }}>
              <CharCard img={element.image} nombre={element.name} especie={element.race} />
            </Link>            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default HomePage;
