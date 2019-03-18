import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'

import pic02 from '../assets/images/pic02.jpg'
import vincent from '../assets/images/vincent.jpg'
import pic04 from '../assets/images/pic04.jpg'
class Homepage extends React.Component {
  render() {
    const siteTitle = 'Elston Aw'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <section className="main style1">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>My Background</h2>
              </header>
              <p>
                I am a Year 2 Computer Engineering student looking for
                opportunities to develop my technical and soft skills. I am
                diligent and self-driven, and I like challenges that can push
                myself to greater heights. My field of interests are in full
                stack development, embedded systems, and artificial
                intelligence.
              </p>
              <p>
                During my free time, I would read up on the cutting edge
                technology being developed as I'm interested in the latest
                technology. When I'm not doing that, I enjoy a leisurely climb
                at a nearby climbing gym with my friends, or water sports like
                diving and kayaking.
              </p>
            </div>
          </div>
        </section>

        <section className="main style2">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>My Education</h2>
              </header>
              <p>
                I'm currently studying at National University of Singapore, with
                a Bachelor of Engineering in Computer Engineering with Honours.
                Previously, I was studying at Anglo-Chinese Junior College.
              </p>
            </div>
          </div>
        </section>

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>My Experiences</h2>
              </header>
            </div>
            <div className="smallDiv col-6">
              <h2>Mobbin</h2>
              <p>Software Engineering Intern</p>
              <p>Mar 2019 - present</p>
            </div>
            <div className="smallDiv col-6">
              <p>
                Mobbin is a hand-picked collection of the latest mobile design
                patterns from apps that reflect the best in design. It helps
                designers gain inspiration from other iOS applications and
                design patterns.
              </p>
              <br />
              <b>Key Job Scope</b>
              <ul>
                <li>
                  Created front-end assets in React to designer’s
                  specifications.
                </li>
                <li>
                  Assisted with the migration of data from the old codebase to
                  the new codebase.
                </li>
              </ul>
              <br />
              <br />
            </div>
            <div className="smallDiv col-6">
              <h2>National University of Singapore</h2>
              <p>Teaching Assistant for CG2271: Real-time Operating Systems</p>
              <p>Jan 2019 - present</p>
            </div>

            <div className="smallDiv col-6">
              <p>
                CG2271 teaches students basic realtime operating systems (RTOS)
                concepts like tasks, scheduling algorithms, RTOS customisation
                and concurrent real-time programming. Students would gain both
                conceptual and hands-on knowledge on customizing RTOSes and
                writing real-time programs.
              </p>
              <br />
              <b>Key Job Scope</b>
              <ul>
                <li>
                  Conduct weekly lab sessions for students, teaching them how to
                  apply RTOS concepts.
                </li>
                <li>
                  Mark lab reports biweekly, giving timely feedback for
                  students.
                </li>
                <li>
                  Conduct tutorial sessions to reinforce on concepts taught
                  during lecture.
                </li>
              </ul>
              <br />
              <br />
            </div>
            <div className="smallDiv col-6">
              <h2>National University of Singapore</h2>
              <p>
                Teaching Assistant for CG1111: Engineering Principles and
                Practices I
              </p>
              <p>Aug - Nov 2018</p>
            </div>

            <div className="smallDiv col-6">
              <p>
                CG1111 is an introductory project module on the engineering
                principles of how computer-aided systems work and fail, and the
                engineering practice of how they are designed, built and valued.
              </p>
              <br />
              <b>Key Job Scope</b>
              <ul>
                <li>Assist students through weekly lab work.</li>
                <li>Mark lab reports, giving timely feedback for students.</li>
                <li>Ensure the safety of the experiments being conducted.</li>
              </ul>
              <br />
              <br />
            </div>
            <div className="smallDiv col-6">
              <h2>Arvato Digital Services</h2>
              <p>Transactional Specialist</p>
              <p>Feb 2017 - Jul 2017</p>
            </div>
            <div className="smallDiv col-6">
              <p>
                Arvato Digital Services is a leading service provider, providing
                managed BPO services to Microsoft.
              </p>
              <br />
              <b>Key Job Scope</b>
              <ul>
                <li>
                  Handled large transactions for a major global technological
                  company.
                </li>
                <li>
                  Used Customer Relations Management tools and in-house
                  management tools to communicate with clients and handle
                  transactions.
                </li>
                <li>
                  Took part in the annual closing in June 2017, to close many
                  other major deals with partners.
                </li>
              </ul>
              <br />
              <br />
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <span className="icon style2 major fa-microchip" />
                </li>
                <li>
                  <span className="icon style3 major fa-database" />
                </li>
                <li>
                  <span className="icon style4 major fa-desktop" />
                </li>
                <li>
                  <span className="icon style4 major fa-bar-chart" />
                </li>
                <li>
                  <span className="icon style4 major fa-pencil" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>My Technical Skills</h2>
              </header>

              <div className="smallDiv col-6">
                <h3>Web Development</h3>
                <ul>
                  <li>HTML/CSS</li>
                  <li>Node.JS</li>
                  <li>React</li>
                  <li>Express.JS</li>
                  <li>PHP</li>
                </ul>
              </div>
              <br />
              <div className="smallDiv col-6">
                <h3>Database</h3>
                <ul>
                  <li>PostgresQL</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <br />
              <div className="smallDiv col-6">
                <h3>Programming Languages</h3>
                <ul>
                  <li>C</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>Assembly</li>
                </ul>
              </div>
              <br />
              <div className="smallDiv col-6">
                <h3>Hardware Design</h3>
                <ul>
                  <li>Microcontroller Programming (ATMega328P)</li>
                  <li>FreeRTOS</li>
                  <li>Verilog</li>
                  <li>Circuit Design</li>
                </ul>
              </div>
              <br />
              <div className="smallDiv col-6">
                <h3>Data Analytics</h3>
                <ul>
                  <li>Pandas</li>
                  <li>matplotlib</li>
                  <li>Seaborn</li>
                  <li>Jupyter Notebook</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>My Projects</h2>
              </header>
              <p>Here are some projects that I have embarked on.</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Hop Café App</h3>
              <p>
                Hop is an iOS App that helps you find cafés around you. It shows
                you the availability of popular amenities, as well as reviews
                from famous food bloggers.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://github.com/xhxh96/Hop" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={vincent} alt="" />
              </span>
              <h3>Vincent to the Rescue</h3>
              <p>
                Vincent is an autonomous search and rescue robot. This robot was
                built to teach students about designing a complex computer
                engineering system, that facilitates information processing,
                that features real-world interfacing, and understanding the
                effects of certain useful metrics such as, scaling, safety,
                security, sustainability, societal impact, fault-tolerant
                design, etc.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Contact Me</h2>
            </header>
            <p>
              Interested to connect? Click on the links below to send me an
              email or check out my resume! <br />
              You may also contact me through the following social profiles
              below.
            </p>
            <ul className="actions uniform">
              <li>
                <a
                  href="mailto:elstonaw@comp.nus.edu.sg"
                  className="button special"
                >
                  Email Me
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  View My Resume
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
