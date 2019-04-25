import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

import hopposter from '../assets/images/hopposter.jpg'
import vincent from '../assets/images/vincent.jpg'
import jithub from '../assets/images/jithub.png'

import resumepdf from '../assets/resume/Elston_Yu_Xuan_AW_Resume.pdf'
import SkillBars from '../components/skillbar'

const WebDev = [
  { type: 'HTML', level: 99 },
  { type: 'CSS', level: 98 },
  { type: 'Node.JS', level: 90 },
  { type: 'React', level: 85 },
  { type: 'Express', level: 70 },
  { type: 'PHP', level: 20 },
]

const Database = [
  { type: 'PostgresQL', level: 50 },
  { type: 'MongoDB', level: 70 },
  { type: 'SQL', level: 50 },
]

const Language = [
  { type: 'Javascript', level: 85 },
  { type: 'C', level: 90 },
  { type: 'C++', level: 85 },
  { type: 'Python', level: 80 },
  { type: 'Java', level: 80 },
  { type: 'Assembly', level: 50 },
]

const Hardware = [
  { type: 'Microcontroller Programming', level: 85 },
  { type: 'FreeRTOS', level: 80 },
  { type: 'Verilog', level: 85 },
  { type: 'Circuit Design', level: 80 },
]

const Analytics = [
  { type: 'Pandas', level: 70 },
  { type: 'Matplotlib', level: 70 },
  { type: 'seaborn', level: 70 },
  { type: 'Jupyter Notebook', level: 80 },
]
class Homepage extends React.Component {
  render() {
    const siteTitle = 'Elston Aw'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <section id="one" className="main style1">
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
              <div className="smallDiv">
                <h2>National University of Singapore</h2>
                <h4>B.Eng in Computer Engineering - Class of 2021</h4>
                <br />
                <p>
                  Pursuing a Computer Engineering degree in the National
                  University of Singapore.
                </p>
              </div>
              <br />
              <div className="smallDiv">
                <h2>Anglo-Chinese Junior College</h2>
                <h4>Science Stream - Class of 2014</h4>
                <br />
                <p>
                  Took the General Cambridge-Singapore Education Advanced Level
                  Examinations, with subjects Physics, Chemistry, Mathematics
                  and Economics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="main style1">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>My Experiences</h2>
              </header>
            </div>
            <div className="col-12">
              <Timeline lineColor={'#ddd'}>
                <TimelineItem
                  key="001"
                  dateText="March 2019 – Present"
                  style={{ color: '#e86971' }}
                >
                  <h2>Mobbin</h2>
                  <h4>Front-end Software Engineering Intern</h4>
                  <br />
                  <p>
                    Mobbin is a hand-picked collection of the latest mobile
                    design patterns from apps that reflect the best in design.
                    It helps designers gain inspiration from other iOS
                    applications and design patterns.
                  </p>
                  <b>Key Job Scope</b>
                  <ul>
                    <li>
                      Created front-end assets in React to designer’s
                      specifications.
                    </li>
                    <li>
                      Assisted with the migration of data from the old codebase
                      to the new codebase.
                    </li>
                  </ul>
                </TimelineItem>
                <TimelineItem
                  key="002"
                  dateText="Jan 2019 – Present"
                  dateInnerStyle={{ background: '#61b8ff' }}
                >
                  <h2>National University of Singapore</h2>
                  <h4>
                    Teaching Assistant for CG2271: Real-time Operating Systems
                  </h4>
                  <br />
                  <p>
                    CG2271 teaches students basic realtime operating systems
                    (RTOS) concepts like tasks, scheduling algorithms, RTOS
                    customisation and concurrent real-time programming. Students
                    would gain both conceptual and hands-on knowledge on
                    customizing RTOSes and writing real-time programs.
                  </p>
                  <b>Key Job Scope</b>
                  <ul>
                    <li>Assist students through weekly lab work.</li>
                    <li>
                      Mark lab reports, giving timely feedback for students.
                    </li>
                    <li>
                      Ensure the safety of the experiments being conducted.
                    </li>
                  </ul>
                </TimelineItem>
                <TimelineItem
                  key="003"
                  dateText="Aug – Nov 2018"
                  dateInnerStyle={{ background: '#76bb7f' }}
                >
                  <h2>National University of Singapore</h2>
                  <h4>
                    Teaching Assistant for CG1111: Engineering Principles and
                    Practices I
                  </h4>
                  <br />
                  <p>
                    CG1111 is an introductory project module on the engineering
                    principles of how computer-aided systems work and fail, and
                    the engineering practice of how they are designed, built and
                    valued.
                  </p>
                  <b>Key Job Scope</b>
                  <ul>
                    <li>Assist students through weekly lab work.</li>
                    <li>
                      Mark lab reports, giving timely feedback for students.
                    </li>
                    <li>
                      Ensure the safety of the experiments being conducted.
                    </li>
                  </ul>
                </TimelineItem>
                <TimelineItem
                  key="004"
                  dateText="Feb – Jul 2017"
                  dateInnerStyle={{ background: '#fcd307' }}
                >
                  <h2>Arvato Digital Services</h2>
                  <h4>Transactional Specialist</h4>
                  <br />
                  <p>
                    Arvato Digital Services is a leading service provider,
                    providing managed BPO services to Microsoft.
                  </p>
                  <b>Key Job Scope</b>
                  <ul>
                    <li>
                      Handled large transactions for a major global
                      technological company.
                    </li>
                    <li>
                      Used Customer Relations Management tools and in-house
                      management tools to communicate with clients and handle
                      transactions.
                    </li>
                    <li>
                      Took part in the annual closing in June 2017, to close
                      many other major deals with partners.
                    </li>
                  </ul>
                </TimelineItem>
              </Timeline>
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
                <SkillBars hue="100" saturation="40" skills={WebDev} />
              </div>
              <div className="smallDiv col-6">
                <h3>Database</h3>
                <SkillBars hue="200" saturation="40" skills={Database} />
              </div>
              <div className="smallDiv col-6">
                <h3>Programming Languages</h3>
                <SkillBars hue="300" saturation="40" skills={Language} />
              </div>
              <div className="smallDiv col-6">
                <h3>Hardware Design</h3>
                <SkillBars hue="400" saturation="40" skills={Hardware} />
              </div>
              <br />
              <div className="smallDiv col-6">
                <h3>Data Analytics</h3>
                <SkillBars hue="600" saturation="40" skills={Analytics} />
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
                <img src={hopposter} alt="" />
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
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={jithub} alt="" />
              </span>
              <h3>JitHub - Personal Meeting Scheduler</h3>
              <p>
                JitHub is an application that saves your contacts and helps you
                schedule meetings through cross-checking the timetable of your
                group mates.
              </p>
              <p>
                JitHub was built in CS2113T Software Engineering module to teach
                students the principles of software engineering and Object
                Oriented Programming in Java.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/CS2113-AY1819S1-W12-1/main"
                    className="button"
                  >
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
                <a
                  href={resumepdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
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
