import React from "react";
import Stock from "../components/Stock";

const PortfolioContainer = ({ myStocks, handleClick }) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      {myStocks.map((stock) => (
        <Stock key={stock.id} stock={stock} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default PortfolioContainer;
