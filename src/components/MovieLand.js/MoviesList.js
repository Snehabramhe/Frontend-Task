import React, { useEffect, useState } from 'react'
import { Card,CardActions,Typography,CardContent,Button,CardMedia ,Grid} from '@mui/material'
import axios from 'axios'

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const { searchMovie } = props;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: ' http://www.omdbapi.com/',
        params: {
          s: searchMovie,
          r: 'json',
          apikey: '80e853e7', // Replace with your actual OMDB API key
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data.Search && Array.isArray(response.data.Search)) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error(error);
        // Handle the error state here if needed
      }
    };

    fetchData();
  }, [searchMovie]);

  // Display loading message if movies are still being fetched
  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredMovies = movies.filter(
    (movie) =>
      movie.Title &&
      typeof movie.Title === 'string' ?
      movie.Title.toLowerCase() === searchMovie.toLowerCase():''  
  );
 
  return (

    <div style={{display:'flex',margin:'20px',}}> 
   {filteredMovies.map((item)=>(
    <div style={{padding:'20px'}}>
        <Card sx={{height:350,width:200}}>      
      <CardMedia
        sx={{height: 150}}
        image={item.Poster}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.Title}
        </Typography>   
      </CardContent>
      <CardActions>
        <Button color='secondary' size="small">Watch Now</Button>
        <Button size="small">Rate</Button>
      </CardActions>
    </Card>
    </div>
   ))}

        
    </div>
    
  )
}

export default MoviesList
