import React from 'react'
import ChartUserList from '../data/infchart.json';


const Home = () => {
  return (
    <div className="home">
      <h1>Users</h1>
      <ul>
        {ChartUserList.map((user) => (
          <li key={user.id}>
            <img src={user.img} width="40px" alt="" />
            <h2>{user.fullname}</h2>
            <p>{user.point}</p>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Home