import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterPage = () => {
  
        const [data, setData]=useState([]);
        
        let {specie} = useParams();
      
       useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(char=> setData(char.data.results))},[])
      
    return (
        <main id='character-page'>
            <h1 id="title-character">Character Page</h1>        
            {
              <div id="characters-species">
                {tmp.map((element)=>
                  <div key={element.id}>
                    <Link to={"/details/"+element.id}>
                        <CharCard img={element.image} nombre={element.name} especie={element.species}/>
                    </Link>            
                  </div>
                )}  
              </div>
            }
        </main>
      )
}

export default CharacterPage
