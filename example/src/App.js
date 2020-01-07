import React, { Component } from 'react'
import Announcement from 'react-announcement'
import Logo from './react.svg'

export default class App extends Component {
  render () {
    return (
      <div>
        <Announcement
          title="Here is the new component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
          imageSource={Logo}
        />
      </div>
    )
  }
}
