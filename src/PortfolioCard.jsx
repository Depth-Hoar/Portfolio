import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 600
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PortfolioCard = (props) => {
    const classes = useStyles();
    const {avatarSrc, title, subtitle, description, imgSrc} = props;
    return (
        <Card className={classes.root} variant="outlined" >
        <CardHeader
            avatar={<Avatar src={avatarSrc} /> }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={title}
            subheader={subtitle}
        />
        <CardMedia style={{height: "400px"}} image={imgSrc}/>
        <CardContent>
            <Typography variant="body2" component="p">
            {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained" color="primary" size="small">Visit Website</Button>
        </CardActions>
        </Card>
    );
}

export default PortfolioCard;