import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <Image src="/static/img/about-me.jpg" title="" alt="" width={450} height={300} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  Hello :)
                </h3>
                <p>
                  After seven years of experience in design, my interest in technology and software development grew, leading me to make a significant career transition. To specialize, I participated in an intensive programming bootcamp and completed a technical course in web development.
                  <br></br>
                  <br></br>
                  Today, I combine my strong foundation in creative design with advanced technology skills to deliver innovative projects, focused on both aesthetics and functionality, always with a technical and strategic perspective.
                </p>
                {/* <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5k</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                    </div>
                  </div>
                  </div>
                </div> */}
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contact">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#portfolio">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2021-Present</span>
                <h6>UNISINOS | Systems Analysis and Development</h6>
                <p>Unisinos is the first in Latin America to emphasize software process quality.</p>

              </li>
              <li>
                <span>2022-2022</span>
                <h6>LABENU | Web Development Bootcamp</h6>
                <p>Program with over 1000 hours of hands-on experience in Full-stack development.</p>

              </li>
              <li>
                <span>2020-2022</span>
                <h6>MBA PUC | Marketing, Branding, and Growth</h6>
                <p>The Pontifical Catholic University is among the most traditional higher education institutions in Brazil.</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                I have over seven years of experience in design, along with the knowledge to create websites (like this portfolio you're viewing).
                I believe that each line of code is a step towards solving problems around the world.
              </p>

              <div className="skill-lt">
                <h6>HTML | CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "83%" }}>
                    <span data-toggle="tooltip" title="83%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "65%" }}>
                    <span data-toggle="tooltip" title="65%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>PHP</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "48%" }}>
                    <span data-toggle="tooltip" title="48%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>MySQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "64%" }}>
                    <span data-toggle="tooltip" title="64%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="85%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Wordpress</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "74%" }}>
                    <span data-toggle="tooltip" title="74%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default About;
