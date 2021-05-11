import Layout from "../components/Layout";
import Image from "next/image";
import { technologies, experience, projects } from "../data";
import Contact from "../components/ContactForm";
import Col from "../components/Col";
import Row from "../components/Row";

const Portfolio = ({ MyAge }) => {
  return (
    // Presentation Card

    <Layout title="My portfolio" sideBar={false} animation>
      <Row>
        <Col col={12}>
          <div className="card">
            <Row>
              <Col col={4}>
                <Image
                  src="/perfil.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={450}
                ></Image>
              </Col>
              <Col col={8}>
                <div className="card-body">
                  <h2 className="display-4">Janyel Marrero</h2>
                  <h4>Estudinet</h4>
                  <p>
                    I'm a junior Full Stack JavaScript developer. I'm seeking
                    competitives and chalenging projects that help me to grown
                    up my skills and develop another ones. Don't count the days,
                    make the days count.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Technologies area  */}
      <Row>
        <Col col={4} padding={"py-2"}>
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>
              <h2>Technologies</h2>
              {technologies.map(({ tech, progress }, i) => (
                <div className="card-body" key={i}>
                  <h4>{tech}</h4>
                  <div className="progress">
                    <div
                      style={{ width: `${progress}%` }}
                      className="progress-bar bg-success"
                      role="progressbar"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Experience */}
        <Col col={8} padding={"py-2"}>
          <div className="card bg-light p-2">
            <h2>Experience</h2>
            <div className="card">
              {experience.map(({ job, resumen, timeline }, i) => (
                <div key={i} className="card-body">
                  <h3>{job}</h3>
                  <div className="card-body">{resumen}</div>
                  <div className="card-footer">{timeline}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card bg-light p-2 my-2">
            <h2>Main Interests and Hobies</h2>
            <div className="card card-body">
              <ul>
                <li>Back end Develop</li>
                <li>Front end Develop</li>
                <li>Mobile Develop</li>
                <li>Cyber Security</li>
                <li>Sports: Calistenia</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      {/* Projects Area */}
      <Row>
        <Col col={12}>
          <div className="card bg-light card-body">
            <h2 className="card-title">My Projects</h2>
            <Row>
              {projects.map(
                ({ code, imgUrl, description, project, demo }, i) => (
                  <div key={i} className="col-md-6 col-lg-4 my-2">
                    <div className="card mb-3 h-100">
                      <h3 className="card-header">{project}</h3>
                      <img
                        class="d-block user-select-none"
                        src={imgUrl}
                        width="100%"
                        height="200"
                        focusable="false"
                      />
                      <div className="card-body bg-dark text-light">
                        <p className="card-text">{description}</p>
                      </div>

                      <div className="card-body bg-dark text-light">
                        <a href={demo} className={`card-link ${demo == "#" ? "disable user-select-none" : ""}`} >
                          {`${demo != "#" ? "Demo" : "In line soon"}`}
                        </a>
                        <a href={code} className="card-link">
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Row>
          </div>
        </Col>
      </Row>
      <Contact />
    </Layout>
  );
};

export function getStaticProps() {
  const date = new Date();
  const years = date.getFullYear() - 1997;
  const age =
    date.getMonth() < 3 ? years - 1 : date.getDate() < 26 ? years - 1 : years;
  return { props: { MyAge: age } };
}

export default Portfolio;
