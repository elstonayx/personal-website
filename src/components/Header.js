import React from 'react'
import ProfilePicture from './profilepic'
import profilepic from '../assets/images/profilepic.jpg'
class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <ProfilePicture src={profilepic} />
          <h1>
            ELSTON (YU XUAN) <strong>AW</strong>
          </h1>
          <p>
            I'm currently a Year 2 Computer Engineering student
            <br />
            studying in the National University of Singapore, and
            <br />
            my focus area is on full stack development.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
