import React, { Component } from 'react'
import Announcement from 'react-announcement'
import Logo from './logo-small.png'
import { FiBook } from "react-icons/fi";

export default class App extends Component {
  render () {
    return (
      <div style={backgroundStyles}>
        <div style={center}>
          <h1 className="title">react-announcement</h1>
          <p className="subtitle">Wait a couple of seconds and see the banner</p>

          <br></br>
          
          <a style={buttonStyle} href="https://github.com/kristofferandreasen/react-announcement">
            Documentation
            <FiBook 
              style={icon}
              size={20}
            />
          </a>

        </div>
        <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
          imageSource={Logo}
        />
      </div>
    )
  }
}

const backgroundStyles = {
  paddingTop: 100,
  paddingBottom: 100,
  paddingRight: 15,
  paddingLeft: 15
}

const buttonStyle = {
  color: '#FFF',
  backgroundColor: '#FF295C',
  fontWeight: 400,
  fontSize: 14,
  paddingRight: 14,
  paddingLeft: 14,
  paddingTop: 14,
  paddingBottom: 14,
  borderRadius: 10,
  outline: 'none',
  textDecoration: 'none'
}

const icon = {
  color: '#FFF',
  marginLeft: 10,
  marginBottom: 2,
  verticalAlign: 'middle'
}

const center = {
  textAlign: 'center'
}