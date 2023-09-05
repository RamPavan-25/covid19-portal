import Card from '../components/Card'
import {useState, useEffect} from 'react'
function HomePage() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`${process.env.API_URL}/country`)
        .then((res)=>{
            setData(res)
        })
    },[])

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