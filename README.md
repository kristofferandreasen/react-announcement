<p align="center">
  <img src="./media/small-header.png" alt="react-announcement" height="200px">
</p>

<div align="center">
  📣 Push out beautiful website announcements in React 📣
</div>
<div align="center">
  This simple and modern component makes it easier for you to engage with your visitors in a non-intrusive way.
</div>

<br />

<div align="center">
  <!-- NPM version -->
  <a href="https://www.npmjs.com/package/react-announcement">
    <img src="https://img.shields.io/npm/v/react-announcement.svg"
      alt="NPM version" />
  </a>
  <!-- Downloads -->
  <a href="https://www.npmjs.com/package/react-announcement">
    <img src="https://img.shields.io/npm/dt/react-announcement.svg"
      alt="Downloads" />
  </a>
  <!-- Standard -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"
      alt="Standard" />
  </a>
</div>

<div align="center">
  <h3>
    <a href="https://kristofferandreasen.github.io/react-announcement/">
      Example Website
    </a>
    <span> | </span>
    <a href="https://www.npmjs.com/package/react-announcement">
      npm module
    </a>
    <span> | </span>
    <a href="https://github.com/kristofferandreasen/react-announcement#properties">
      Properties
    </a>
    <span> | </span>
    <a href="https://github.com/kristofferandreasen/react-announcement#contribute">
      Contributing
    </a>
  </h3>
</div>

<div align="center">
  <sub>A small component to help you convert. Built with ❤︎ by
  <a href="https://github.com/kristofferandreasen">Kristoffer Andreasen</a>
</div>

<p align="center">
  <img src="./media/react-announcement-video.gif" alt="example video">
</p>

## Install

```bash
npm install --save react-announcement
```

## Usage

```tsx
import * as React from 'react'
import Logo from './logo.svg'
import Announcement from 'react-announcement'

class Example extends React.Component {
  render () {
    return (
      <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
          imageSource={Logo}
      />
    )
  }
}
```

### Usage with optional properties

This example includes the two optional properties in the component.

The daysToLive property changes to cookie created by the component.
This way you can control how many days you want to wait before you show the announcement to the same user.

The secondsBeforeBannerShows property changes the amount of seconds a user wait before the announcement is presented.

```tsx
import * as React from 'react'
import Logo from './logo.svg'
import Announcement from 'react-announcement'

class Example extends React.Component {
  render () {
    return (
      <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
          imageSource={Logo}
          daysToLive={3}
          secondsBeforeBannerShows={20}
      />
    )
  }
}
```

## Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`title`|string|yes|| The title of the announcement
`subtitle`|string|yes|| The general card text on the announcement
`imageSource`|string|yes|| The image source string used on the left side of the image. Use a square image for the best results. Dimensions are 68x68 pixels.
`link`|string|yes|| The link used when the announcement is clicked.
`daysToLive`|number|no|7| An optional property specifying the number of days the cookie will live before the announcement is shown again to a user.
`secondsBeforeBannerShows`|number|no|5| The number of seconds a user has to keep the page open before the announcement is shown.
-----

## Contributing

Your contributions are always welcome!
Please have a look at the [contribution guidelines](https://github.com/kristofferandreasen/react-announcement/blob/master/CONTRIBUTING.md) first 🎉

## License

MIT © [kristofferandreasen](https://github.com/kristofferandreasen)
