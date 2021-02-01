import {
  Container,
  Card,
  CardInfo,
  CardColorIncomes,
  CardColorCharges,
  CardTitle,
  CardText,
  CardColorTransaction,
  BouncyDiv,
} from './CardStyleComponents/CardStyleComponents';
import { getIncomes, getCharges } from '../../common/utils/LocalStorageUtil';

const Cards = () => {
  const income = getIncomes();
  const charges = getCharges();

  const incomesSum = income.reduce(
    (total, income) => (total += +income.money),
    0
  );
  const chargesSum = charges.reduce(
    (total, charge) => (total += +charge.money),
    0
  );

  const numberTransactions = income.length + charges.length;

  const handleChange = () => {};
  return (
    <div className="card-panel">
      <Container>
        <Card className="card-panel">
          <CardColorCharges onClick={() => handleChange}>
            <span className="material-icons">money_off</span>
          </CardColorCharges>
          <CardInfo>
            <CardTitle>Charges</CardTitle>
            <CardTitle>{chargesSum}</CardTitle>
          </CardInfo>
          <CardInfo>
            <CardText className="footer-card-text">
              Get more information
            </CardText>
          </CardInfo>
        </Card>
      </Container>

      <Container>
        <Card className="card-panel">
          <CardColorIncomes>
            <span className="material-icons">attach_money</span>
          </CardColorIncomes>
          <CardInfo>
            <CardTitle>Revenue</CardTitle>
            <CardTitle>{incomesSum}</CardTitle>
          </CardInfo>
          <CardInfo>
            <CardText className="footer-card-text">
              Get more information
            </CardText>
          </CardInfo>
        </Card>
      </Container>

      <Container>
        <Card className="card-panel">
          <CardColorTransaction>
            <span className="material-icons">multiple_stop</span>
          </CardColorTransaction>
          <CardInfo>
            <CardTitle>Transactions</CardTitle>
            <CardTitle>{numberTransactions}</CardTitle>
          </CardInfo>
          <CardInfo>
            <CardText className="footer-card-text">
              Get more information
            </CardText>
          </CardInfo>
        </Card>
      </Container>
    </div>
  );
};
export default Cards;
