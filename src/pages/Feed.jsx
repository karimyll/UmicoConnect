import React from 'react'
import Data from '../data/influencersData.json'
import Logo from '../assets/img/UmicoFeed.svg'
import BackIcon from '../assets/img/back.svg'
import { Link } from 'react-router-dom'

const Feed = () => {

    const influencers = Data;
    return (
        <div className="feed">
            <div className="feed-header">
                <img className='back' src={BackIcon} alt="" />
                <img src={Logo} alt="" />
            </div>

            <div className="influencers-list">

                {Data.map((influencer) => {
                    return (
                        <div className="userone">
                            <img src={influencer.img} alt="" />
                            <p className="fullname">{influencer.fullname}</p>
                        </div>
                    )
                })}
            </div>
            <br />
            <div className="posts">
  {Data.map((influencer, index) => {
    if (influencer.products && influencer.products.length > 0) {
      return (
        <div className="post" key={index}>
          <div className="post-header">
            <div className="user-info">
              <h5 className="fullname">{influencer.fullname}</h5>
              {influencer.tag ? (
                <p className="tag">{influencer.tag}</p>
              ) : null }
            </div>
            <div className="post-act">
              <Link to="/">
                <p>Daha çoxu</p>
                <img className='next-icon' src={BackIcon} alt="" />
              </Link>
            </div>
          </div>
          <div className="post-content">
            <div className="product">
              {influencer.products.map((product) => (
                <div className="product-item" key={product.id}>
                  <img src={product.img} alt={product.title} />
                  <h6 className="product-title">{product.title}</h6>
                  <p className="product-price">{product.price}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">Məhsulu bax</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null; // Ürünü olmayan influencer'ları görmezden gel
  })}
</div>


        </div>
    )
}

export default Feed