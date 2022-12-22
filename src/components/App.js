import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArray, setSushiArray] = useState([])
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiArray) => {
        const updatedSushis = sushiArray.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushiArray(updatedSushis);
      });
  }, []);

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushiArray.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushiArray(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney);
  }

  const eatenSushis = sushiArray.filter((sushi) => sushi.eaten);


  return (
    <div className="app">
      <SushiContainer sushiArray = {sushiArray} onEatSushi = {handleEatSushi} />
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={eatenSushis} />
    </div>
  );
}

export default App;
