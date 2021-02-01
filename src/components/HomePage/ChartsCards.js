import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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
        <Link to="/charts" className="home-link-card-charts">
          <CardActionArea>
            <CardContent>
              <div className="charts-home-page">
                {ChargesCategoriesPie({ chargesCategoriesData })}
              </div>
              <Typography gutterBottom variant="h5" component="h2">
                Charges
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Checking your account history and using an app can help you
                start tracking expenses.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>

      <Card className={classes.root}>
        <Link to="/tables" className="home-link-card-charts">
          <CardActionArea>
            <CardContent>
              <div className="charts-home-page">
                {TrackeresponsiveLine({ dataLine })}
              </div>
              <Typography gutterBottom variant="h5" component="h2">
                Transactions
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tracking your spending on a regular basis can give you an
                accurate picture of where your money is going.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>

      <Card className={classes.root}>
        <Link to="/charts" className="home-link-card-charts">
          <CardActionArea>
            <CardContent>
              <div className="charts-home-page">
                {IncomesResponsiveBar({ incomesCategoriesDate })}
              </div>
              <Typography gutterBottom variant="h5" component="h2">
                Income categories
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Use a budgeting or expense-tracking app.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}
