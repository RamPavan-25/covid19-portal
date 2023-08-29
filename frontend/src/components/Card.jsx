import React from 'react'

function Card(props) {
    const dataPage = () => {
        window.location.href = `/country/${props.item._id}`;
      };
  return (
    
        <div className="card">
            <img className="img2" src={props.item?props.item.imageUrl:null} alt=""/>
          <div className="ptext">
            <h2 className="text-el">{props.item?props.item.countryName:null}</h2>
            <div className="underline"></div>
          </div>
          <div className="links">
            <div onClick={dataPage}>
                <a className="live" href=" " target="_blank"><button className="plink">View Data</button></a>
            </div>
           </div>
        </div>
    
  )
}

export default Card