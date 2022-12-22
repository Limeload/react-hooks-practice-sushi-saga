import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiArray, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiComponents = sushiArray
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
    ));

    function handleClickMore() {
      setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushiArray.length);
    }
  
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
