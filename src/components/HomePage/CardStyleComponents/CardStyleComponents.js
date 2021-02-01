import styled, { keyframes } from 'styled-components';
import { bounce, flip } from 'react-animations';

const Container = styled.div`
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
`;
const ContainerTitle = styled.h3`
  color: black;
`;
const Card = styled.div`
  color: rgba(0, 0, 0, 0.87);
  width: 270px;
  border: 0;
  display: flex;
  position: relative; 
  font-size: .875rem;
  min-width: 0;
  background: #FFF;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
  margin-top: 30px;
  border-radius: 6px;
  margin-bottom: 30px;
  flex-direction: row;
  flex-wrap: wrap;
}
`;
const CardInfo = styled.div`
  padding: 10px;
  padding-left: 0px;
`;
const CardInfoFotter = styled.div`
  border-top: 1px solid#eee;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const CardColorIncomes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  margin: -20px 15px 0px 15px;
  background: linear-gradient(60deg, #66bb6a, #43a047);
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
    0 7px 10px -5px rgb(76 175 80 / 40%);
  height: 80px;
  width: 80px;
`;
const CardColorCharges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  background: linear-gradient(60deg, #ef5350, #e53935);
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
    0 7px 10px -5px rgb(244 67 54 / 40%);
  margin: -20px 15px 0px 10px;
  height: 80px;
  width: 80px;
`;
const CardColorTransaction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  background: linear-gradient(60deg, #ffa726, #fb8c00);
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
    0 7px 10px -5px rgb(255 152 0 / 40%);
  margin: -20px 15px 0px 10px;
  height: 80px;
  width: 80px;
`;

const CardTitle = styled.h5`
  margin-bottom: 0.75rem;
  color: black;
  font-size: 18px;
`;

const CardText = styled.p`
  margin: 3px;
  color: #999;
  margin-bottom: 10px;
`;
const flipAnimation = keyframes`${flip}`;
const FlipDiv = styled.div`
  animation: 1s ${flipAnimation};
`;

export {
  Container,
  ContainerTitle,
  Card,
  CardInfo,
  CardColorCharges,
  CardColorIncomes,
  CardTitle,
  CardInfoFotter,
  CardText,
  CardColorTransaction,
  FlipDiv,
};
