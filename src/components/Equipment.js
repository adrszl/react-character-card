function Equipment(props) {
  let renderEquipment = null;

  if(props.equipment) {
    renderEquipment = props.equipment.map((eqItem, index) => {
      return <li key={`eqItem${index}`} className="list-group-item">{eqItem}</li>
    });
  }
  
  return(
    <div className="card col-12 col-sm-auto my-4">
      <div className="card-body">
        <h5 className="card-title">Ekwipunek</h5>
        <ul className="list-group">
          { renderEquipment }
        </ul>
        <h5 className="card-title mt-4">Pieniądze</h5>
        <ul className="list-group">
          <li className="list-group-item">Złote korony: <strong>{props.money.zk}zk</strong></li>
          <li className="list-group-item">Srebrne szylingi: <strong>{props.money.ss}s</strong></li>
          <li className="list-group-item">Miedziane pensy: <strong>{props.money.mp}p</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default Equipment;