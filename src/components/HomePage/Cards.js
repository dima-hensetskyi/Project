import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  chargesForMounth,
  chargesPerWeek,
  incomesForMounth,
  incomesPerWeek,
} from './homeData';

import {
  Container,
  Card,
  CardInfo,
  CardColorIncomes,
  CardColorCharges,
  CardTitle,
  CardText,
  CardColorTransaction,
  FlipDiv,
  CardInfoFotter,
} from './CardStyleComponents/CardStyleComponents';

const Cards = () => {
  const [chargesPeriodChange, setChargesPeriodChange] = useState(false);
  const [incomesPeriodChange, setIncomesPeriodChange] = useState(false);
  const [chargesData, setChargesData] = useState(chargesPerWeek);
  const [incomeData, setIncomeData] = useState(incomesPerWeek);

  useEffect(() => {
    chargesPeriodChange
      ? setChargesData(chargesForMounth)
      : setChargesData(chargesPerWeek);
  }, [chargesPeriodChange]);

  useEffect(() => {
    incomesPeriodChange
      ? setIncomeData(incomesForMounth)
      : setIncomeData(incomesPerWeek);
  }, [incomesPeriodChange]);

  const incomesSum = incomeData.reduce(
    (total, income) => (total += +income.money),
    0
  );

  const chargesSum = chargesData.reduce(
    (total, charge) => (total += +charge.money),
    0
  );

  const numberTransactions = incomesForMounth.length + chargesForMounth.length;

  return (
    <div className="card-panel">
      <Container>
        <Card className="card-panel">
          <FlipDiv>
            <CardColorCharges>
              <span className="material-icons">money_off</span>
            </CardColorCharges>
          </FlipDiv>
          <CardInfo>
            <CardTitle>Charges</CardTitle>
            <CardTitle>{chargesSum}</CardTitle>
          </CardInfo>
          <CardInfoFotter className="footer">
            <CardText
              className="footer-card-text"
              onClick={() =>
                chargesPeriodChange
                  ? setChargesPeriodChange(false)
                  : setChargesPeriodChange(true)
              }
            >
              <span className="material-icons">date_range</span>
              {chargesPeriodChange ? 'This month' : 'Last 7 day'}
            </CardText>
            <CardText className="footer-card-text">
              <Link className="home-link-card" to="/tables">
                <span className="material-icons">more</span>
                Get more information
              </Link>
            </CardText>
          </CardInfoFotter>
        </Card>
      </Container>

      <Container>
        <Card className="card-panel">
          <FlipDiv>
            <CardColorIncomes>
              <span className="material-icons">attach_money</span>
            </CardColorIncomes>
          </FlipDiv>
          <CardInfo>
            <CardTitle>Revenue</CardTitle>
            <CardTitle>{incomesSum}</CardTitle>
          </CardInfo>
          <CardInfoFotter className="footer">
            <CardText
              className="footer-card-text"
              onClick={() =>
                incomesPeriodChange
                  ? setIncomesPeriodChange(false)
                  : setIncomesPeriodChange(true)
              }
            >
              <span className="material-icons">date_range</span>
              {incomesPeriodChange ? 'This month' : 'Last 7 day'}
            </CardText>
            <CardText className="footer-card-text">
              <Link className="home-link-card" to="/tables">
                <span className="material-icons">more</span>
                Get more information
              </Link>
            </CardText>
          </CardInfoFotter>
        </Card>
      </Container>

      <Container>
        <Card className="card-panel">
          <FlipDiv>
            <CardColorTransaction onClick={() => <FlipDiv />}>
              <span className="material-icons">multiple_stop</span>
            </CardColorTransaction>
          </FlipDiv>
          <CardInfo>
            <CardTitle>Transactions</CardTitle>
            <CardTitle>{numberTransactions}</CardTitle>
          </CardInfo>
          <CardInfoFotter className="footer">
            <CardText className="footer-card-text">
              <span className="material-icons">date_range</span>
              This month
            </CardText>
            <CardText className="footer-card-text">
              <Link className="home-link-card" to="/tables">
                <span className="material-icons">more</span>
                Get more information
              </Link>
            </CardText>
          </CardInfoFotter>
        </Card>
      </Container>
    </div>
  );
};
export default Cards;
