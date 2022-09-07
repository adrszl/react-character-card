import { useState } from 'react';

function Dices() {
  
  const [dice, dicesRoll] = useState(null);
  
  return(
    <div id="dices-container" className="card col-12 col-sm-auto my-4">
      <div className="card-body text-center">
        <h5 className="card-title">Rzut kostką</h5>
        <button type="button" className="btn btn-success btn-lg" onClick={() => dicesRoll(Math.floor(Math.random() * 100))}>Roll</button>
        <div className="text-center mt-4">
          <span className="font-weight-bold">
            { dice != null ? <p>Wynik: { dice }</p> : null }
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dices;