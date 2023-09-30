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
  <table cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>Rank</th>
        <th>User</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      {sortedInfluencers.slice(3).map((influencer, index) => (
        <tr key={index} className="list-item">
          <td className='rank'>{index + 4}</td>
          <td>
            <div className="user">
              <img src={influencer.img} alt={influencer.fullname} />
              <h2 className='fullname'>{influencer.fullname}</h2>
            </div>
          </td>
          <td>{influencer.point}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <br />
  <br />
  <br />
</div>

    <Navbar />
   </div>
  )
}

export default Ranking