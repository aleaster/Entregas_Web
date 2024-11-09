import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import CharCard from '../../Componentes/CharCard/CharCard';


const NotHuman = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters")
      .then(response => {
        const filteredCharacters=response.data.items.filter(character=>character.race.toLowerCase()!='human')
        console.log("Data fetched:", filteredCharacters
        );
        setData(filteredCharacters)})
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
<main id='home-page'>   
      <Grid container spacing={2} id='characters'>
        {data.map((element) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={element.id}>
            <Link to={"/details/" + element.id} style={{ textDecoration: 'none' }}>
              <CharCard img={element.image} nombre={element.name} especie={element.race} />
            </Link>            
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default NotHuman
