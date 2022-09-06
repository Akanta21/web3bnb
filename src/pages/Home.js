import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import bg from '../images/frontpagebg2.png'
import logo from '../images/airbnb.png'
import { ConnectButton, Select, DatePicker, Input, Icon } from 'web3uikit'

const Home = () => {
  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradient"></div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => console.log(data.label)}
              options={[
                { id: 'ny', label: 'New York' },
                { id: 'lon', label: 'London' },
                { id: 'db', label: 'Dubai' },
                { id: 'sin', label: 'Singapore' },
              ]}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In{' '}
            <DatePicker
              id="checkin"
              onChange={(evt) => console.log(evt.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out{' '}
            <DatePicker
              id="checkout"
              onChange={(evt) => console.log(evt.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="addGuests"
              type="number"
              onChange={(evt) => console.log(Number(evt.target.value))}
            />
          </div>
          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg="search" />
          </div>
        </div>
      </div>
      {/* <Link to="/rentals"> Rentals </Link> */}
    </>
  )
}

export default Home
