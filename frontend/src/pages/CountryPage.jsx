import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DataCard from '../components/DataCard';
function CountryPage() {
    const { id } = useParams();
    const [countryData, setCountryData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001/country/${id}`)
            .then(res => res.json())
            .then(data => setCountryData(data))
    }, [id])
  return (
    <div className='countrypage'>
        <DataCard
            key={countryData._id}
            item={countryData}
        />
    </div>
  )
}

export default CountryPage