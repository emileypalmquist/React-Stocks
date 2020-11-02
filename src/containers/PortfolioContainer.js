import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  renderStocks = () => {
    return this.props.stocks.map((s) => (
      <Stock key={s.id} stock={s} handleClick={this.props.handleClick} />
    ));
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;
