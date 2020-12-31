
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

}));

 export default function MovieDetails(props) {
  const classes = useStyles();

  const {  data } = props;

  return (
    <div>
        <div style={{fontSize:25}}>
           {data.Title} ({data.Year}) 
        </div>

        <div style={{color:'gray'}}>
        {data.Released} | {data.Runtime} | {data.Rated} | {data.Genre}
        </div>

        <hr />

        <div>
          <div style={{fontSize:18, fontWeight:500 ,marginBottom:10}}>Photos</div>
          <div style={{display:'flex'}}>
          {data.Images.map(url=> <img src={url}  width="100" height="100" style={{marginLeft: 15}} />)}
          </div>

          <div style={{marginTop:15,fontSize:14}}>
          {data.Plot}
          </div>

          <div style={{marginTop:10}}>
          <span style={{fontWeight:500}}>Director : </span> {data.Director} <br/>
          <span style={{fontWeight:500}}>Writer : </span> {data.Writer} <br/>
          <span style={{fontWeight:500}}>Stars : </span> {data.Actors}
          </div>
        </div>
    </ div>
    
  );
}
