import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  chargesPie,
  incomesCategories,
  dataLineHomePage,
} from '../charts/data/homePageChartsData';

import ChargesCategoriesPie from '../charts/ChargesCategories';
import TrackeresponsiveLine from '../charts/ResponsiveLine';
import IncomesResponsiveBar from '../charts/IncomesResponsiveBar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ChartsCards() {
  const classes = useStyles();
  const chargesCategoriesData = chargesPie;
  const incomesCategoriesDate = incomesCategories;
  const dataLine = dataLineHomePage;

  return (
    <div className="charts-card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <div className="charts-home-page">
              {ChargesCategoriesPie({ chargesCategoriesData })}
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              Charges
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <div className="charts-home-page">
              {TrackeresponsiveLine({ dataLine })}
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              Transactions
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <div className="charts-home-page">
              {IncomesResponsiveBar({ incomesCategoriesDate })}
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              Income categories
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
