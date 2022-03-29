import { Row, Col } from "react-bootstrap";

const skills = [
  { name: "HTML", level: 80 },
  { name: "css", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "React js", level: 80 },
  { name: "Node js", level: 80 },
  { name: "MongoDB", level: 80 },
];

export default function Skills() {
  return (
    <section id="facts" className="facts">
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row skills-content">
            <Row xs={1} md={2}>
              {skills.map((skill) => (
                <Col key={skill.name}>
                  <div className="progress" key={skill.name}>
                    <span className="skill">
                      {skill.name} <i className="val">{`${skill.level}%`}</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </section>
  );
}
