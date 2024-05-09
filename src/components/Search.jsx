import React, { useEffect, useState } from 'react'
import './Search.css'

export default function Search() {

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      setFilterData(data);
    })
    .catch(err => console.error(err))
  },[])

  const [data,setData]= useState([])
  const [filterData,setFilterData]= useState([])

  const handleFilter =(value) => {
    const res = filterData.filter(f => f.name.toLowerCase().includes(value))
    setData(res);
    if(value==="")
    {
      setData([])
    }
  }

  return (
    <div className='searchWrapper'>
    <div className='search'>
      <input type="text" placeholder="Search here" onChange={e => handleFilter(e.target.value)}/>
    </div>

    <div className='searchResult'>
      {data.map((d,i) => (
        <div key={i}>
          {d.name}   
          </div>
      ))}
    </div>
    </div>
  )
}
