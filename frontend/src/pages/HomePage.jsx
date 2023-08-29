import Card from '../components/Card'
import {useState, useEffect} from 'react'
function HomePage() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/country')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    const cards=data.map((item)=>{
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