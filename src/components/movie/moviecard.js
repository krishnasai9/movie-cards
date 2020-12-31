
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';

import MovieDetails from './movieDetails';
import StarRating from  '../starrating';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 export default function MovieCard(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const {  Title, Genre, Plot, Poster, imdbRating } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Card onClick={()=> setOpen(true)} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Poster}
          title="Contemplative Reptile"
        />
        <CardContent style={{height: 150}}>
          <Typography gutterBottom variant="h5" component="h2">
           {Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>Rating
        </div>
        <StarRating rating={imdbRating}/>
      </CardActions>
    </Card>

    <Modal open={open} onClose={()=> setOpen(false)}>
    <div style={modalStyle} className={classes.paper}>
        <MovieDetails data={props} />
     </div>
      </Modal>
    </ div>
    
  );
}
