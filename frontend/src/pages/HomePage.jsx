import Card from '../components/Card'
import {useState, useEffect} from 'react'
function HomePage() {
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchCountryData=async()=>{
            const response=await fetch(`${process.env.API_URL}/country`);
            console.log(response);
            setData(response);
        }
        fetchCountryData();
    },[])
    console.log("data",data);
    const cards=data?.map((item)=>{
        return(
            <Card
                key={item._id}
                item={item}
            />
        )
    })
  return (
    <div className="homepage">
        {cards}
    </div>
  )
}

export default HomePage