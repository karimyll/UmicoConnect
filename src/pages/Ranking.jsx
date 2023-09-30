import React from 'react'
import Navbar from '../components/Navbar'
import Data from '../data/influencersData.json'

const Ranking = () => {

    const influencers = Data;
    const sortedInfluencers = influencers.sort((a, b) => b.points - a.points);
  

  return (
   <div className="ranking">
        <h1>Leaderboard</h1>
        <div className="top">
        <div className="top-2">
          <img src={sortedInfluencers[1].img} alt={sortedInfluencers[1].fullname} />
          <h2>{sortedInfluencers[1].fullname}</h2>
          <p>{sortedInfluencers[1].point}</p>
        </div>
        <div className="top-1">
          <img src={sortedInfluencers[0].img} alt={sortedInfluencers[0].fullname} />
          <h2>{sortedInfluencers[0].fullname}</h2>
          <p>{sortedInfluencers[0].point}</p>
        </div>
        <div className="top-3">
          <img src={sortedInfluencers[2].img} alt={sortedInfluencers[2].fullname} />
          <h2>{sortedInfluencers[2].fullname}</h2>
          <p>{sortedInfluencers[2].point}</p>
        </div>
      </div>
        <div className="list">
            <div className="user">
                <div className="avatar"></div>
                <div className="name">John Doe</div>
                <div className="points">1000</div>
            </div>
        </div>
    <Navbar />
   </div>
  )
}

export default Ranking