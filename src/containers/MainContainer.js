import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    myStocks: [],
    filter: null,
  };

  componentDidMount() {
    fetch("http://localhost:6001/stocks")
      .then((resp) => resp.json())
      .then((stocks) =>
        this.setState({
          stocks,
        })
      );
  }

  addStock = (stock) => {
    if (!this.state.myStocks.includes(stock)) {
      this.setState((prevState) => ({
        myStocks: [...prevState.myStocks, stock],
      }));
    }
  };

  removeStock = (stock) => {
    this.setState((prevState) => ({
      myStocks: prevState.myStocks.filter((s) => s.id !== stock.id),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleFilterStocks = () => {
    const { stocks } = this.state;
    if (this.state.filter) {
      return stocks.filter((s) => s.type === this.state.filter);
    } else {
      return stocks;
    }
  };

  render() {
    const { myStocks } = this.state;
    const {
      handleFilterChange,
      handleFilterStocks,
      addStock,
      removeStock,
    } = this;
    return (
      <div>
        <SearchBar handleFilterChange={handleFilterChange} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={handleFilterStocks()}
              handleClick={addStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer myStocks={myStocks} handleClick={removeStock} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
