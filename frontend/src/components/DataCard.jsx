function DataCard(props) {
  return (
    <div className="datacard">
        <div>
            <img src={props.item[0]?props.item[0].imageUrl:{}} alt="" />
        </div>
        <div>
            <h1>{props.item[0]?props.item[0].countryName:null}</h1>
        </div>
        <div>
            <h3>Active Cases: {props.item[0]?props.item[0].ActiveCases:null}</h3>
            <h3>Cases Cured: {props.item[0]?props.item[0].CasesCured:null}</h3>
            <h3>Total Cases: {props.item[0]?props.item[0].TotalCases:null}</h3>
            <h3>Deaths: {props.item[0]?props.item[0].Deaths:null}</h3>
        </div>
    </div>
  )
}

export default DataCard