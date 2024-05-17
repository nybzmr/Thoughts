import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import "./Nav.css";

const Nav = () => {
  const [search, setSearch] = useState("");
  return (
    <nav>
      <div className="n-logo">
        <h1>Thoughts</h1>
      </div>

      <div className="n-form-button">
        <form className='n-form' onSubmit={(e) => e.preventDefault()}>
          <div className="search-icon">
            <SearchIcon/>
          </div>
          <input
            type="text"
            placeholder='Search post'
            id='n-search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="social-icons">
        <div>
          <HomeOutlinedIcon/>
        </div>
        <div>
          <NotificationsOutlinedIcon/>
        </div>
        <div>
          <ChatBubbleOutlineOutlinedIcon/>
        </div>
      </div>

      <div className="n-profile">
        <div className="n-img">P</div>
      </div>
    </nav>
  )
}

export default Nav;
