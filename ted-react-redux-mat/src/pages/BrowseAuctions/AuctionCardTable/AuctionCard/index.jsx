import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 270,
        minHeight: 380,
    },
    media: {
        height: 260,

        // height: 0,
        // paddingTop: '56.25%', // 16:9
    },
}));

export default function MediaCard(props) {
    const { auction, currentBid, category } = props;
    const imageUrl = auction.photos[0] ? auction.photos[0].fileDownloadUri : auction.defaultPhoto.fileDownloadUri;

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea 
                component={Link} 
                to={{
                    pathname: '/viewauction',
                    state: {
                        auction: auction
                    }
                }}
            >
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={auction.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {auction.name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {auction.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}