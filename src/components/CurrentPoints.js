function CurrentPoints(props) {
  return(
    <div className="card col-12 col-sm-auto my-4">
      <div className="card-body">
        <h5 className="card-title">Punkty doświadczenia</h5>
        <ul className="list-group">
          <li key={'pd'} className="list-group-item">{props.currentPoints.pd}</li>
        </ul>
        <h5 className="card-title mt-4">Obrażenia/efekty zranień</h5>
        <ul className="list-group">
          <li key={'obrazenia'} className="list-group-item">{props.currentPoints.obrazenia}</li>
        </ul>
        <h5 className="card-title mt-4">System monetarny</h5>
        <ul className="list-group">
          <li className="list-group-item">1 złota korona (zk) =<br />20 srebrnych szylingów (s)</li>
          <li className="list-group-item">1 srebrny szyling (s) =<br />12 miedzianych pensów (p)</li>
        </ul>
        <h5 className="card-title mt-4">Urodziny</h5>
        <ul className="list-group">
          <li className="list-group-item">1 marca</li>
        </ul>
        <h5 className="card-title mt-4">Znak gwiezdny</h5>
        <ul className="list-group">
          <li className="list-group-item">Kocioł Rhyi</li>
        </ul>
      </div>
    </div>
  );
}

export default CurrentPoints;