import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: null,
    sort: null,
  };

  componentDidMount() {
    fetch("http://localhost:6001/stocks")
      .then((resp) => resp.json())
      .then((data) => this.setState({ stocks: data }));
  }

  addStock = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState((prevState) => ({
        portfolio: [...prevState.portfolio, stock],
      }));
    }
  };

  removeStock = (stock) => {
    this.setState((prevState) => ({
      portfolio: prevState.portfolio.filter((s) => s.name !== stock.name),
    }));
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    console.log(this.state.filter, this.state.sort);
    const { stocks, portfolio } = this.state;
    console;
    return (
      <div>
        <SearchBar
          handleFilter={this.handleFilter}
          handleSort={this.handleSort}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer stocks={stocks} handleClick={this.addStock} />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={portfolio}
              handleClick={this.removeStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
