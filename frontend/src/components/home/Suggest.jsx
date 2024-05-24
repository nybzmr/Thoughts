import React from 'react'
import './Suggest.css'
import Avatar from './Avatar'

function Suggest() {
  return (
    <div className='container'>
      <div className="Sugg-comp">
        <h2>Suggestions For You</h2>

        <div className="sugg-people">
          <div className="s-left">
            <Avatar />
            <h3>Elon Musk</h3>
          </div>
          <div className="s-right">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>

        <div className="sugg-people">
          <div className="s-left">
            <Avatar />
            <h3>Niels Bohr</h3>
          </div>
          <div className="s-right">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>

        <div className="sugg-people">
          <div className="s-left">
            <Avatar />
            <h3>Einstein</h3>
          </div>
          <div className="s-right">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>

        <div className="sugg-people">
          <div className="s-left">
            <Avatar />
            <h3>Newton</h3>
          </div>
          <div className="s-right">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>

        <div className="sugg-people">
          <div className="s-left">
            <Avatar />
            <h3>Bill Gates</h3>
          </div>
          <div className="s-right">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>

        <div className="sugg-people">
          <div className="s-left">
            <Avatar />
            <h3>Mark Zuck</h3>
          </div>
          <div className="s-right">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggest
