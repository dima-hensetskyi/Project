import { TextField } from '@material-ui/core';
import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      description: '',
      date: '',
      money: '',
      copyArr: [...this.props.transactions],
    };
  }

  handleSearchChange = async (event) => {
    await this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
    this.filter(event.target.name);
  };

  filter = (filterType) => {
    const { category, description, date, money, copyArr } = this.state;

    switch (filterType) {
      case 'category':
        this.props.filters(
          copyArr.filter((transaction) =>
            transaction.category.toLowerCase().includes(category.toLowerCase())
          )
        );
        break;
      case 'description':
        this.props.filters(
          copyArr.filter((transaction) =>
            transaction.description
              .toLowerCase()
              .includes(description.toLowerCase())
          )
        );
        break;
      case 'date':
        this.props.filters(
          copyArr.filter((transaction) => transaction.date.includes(date))
        );
        break;
      case 'money':
        this.props.filters(
          copyArr.filter((transaction) => transaction.money.includes(money))
        );
        break;
      default:
        this.props.filters(this.state.copyArr);
    }
  };

  render() {
    return (
      <tr className="filter">
        <th>
          <TextField
            className="standard-basic"
            name="category"
            placeholder={`Search ${this.props.transactions.length} transaction`}
            value={this.state.category}
            onChange={this.handleSearchChange}
          ></TextField>
        </th>
        <th>
          <TextField
            className="standard-basic"
            name="description"
            placeholder={`Search ${this.props.transactions.length} transaction`}
            value={this.state.description}
            onChange={this.handleSearchChange}
          ></TextField>
        </th>
        <th>
          <TextField
            name="date"
            className="standard-basic"
            placeholder={`Search ${this.props.transactions.length} transaction`}
            value={this.state.date}
            onChange={this.handleSearchChange}
          ></TextField>
        </th>
        <th>
          <TextField
            name="money"
            className="standard-basic"
            placeholder={`Search ${this.props.transactions.length} transaction`}
            value={this.state.money}
            onChange={this.handleSearchChange}
          ></TextField>
        </th>
        <th>{''}</th>
      </tr>
    );
  }
}

export default Filter;
