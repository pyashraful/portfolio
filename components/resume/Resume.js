export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>MD Ashraful Islam</h4>
              <p>
                <em>
                  Growing up as a tech lover, I love coding and creating
                  beautiful things that make the world a better place. I&apos;m
                  excited to contribute in a meaningful way to an awesome
                  company! My favorite technology is React. I have built
                  multiple functional projects with it.
                </em>
              </p>
              <ul>
                <li>Dhaka, Bangladesh</li>
                <li>+880 1856-454-154</li>
                <li>pyashraful@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Computer Science and Engineering</h4>
              <h5>2018 - Running</h5>
              <p>
                <em>Bangladesh University of Business and Technology (BUBT)</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Diploma in Computer Engineering</h4>
              <h5>2013 - 2018</h5>
              <p>
                <em>BCI Engineering Institute, Dhaka, Bangladesh</em>
              </p>
              <p>Bangladesh Technical Education Board</p>
              <p>Year: 2013 -2018</p>
              <p>GPA: 3.00 out of 4</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h4>BookMe</h4>
              <ul>
                <li>Bus ticket booking app</li>
                <li>React app with graphically sit booking facilities</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Text-Reader</h4>
              <ul>
                <li>
                  Built app to help kids who have communication difficulties.
                </li>
                <li>React js with Web Speech API and SpeechSynthesis.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>E-Store</h4>
              <ul>
                <li>
                  Built app to help kids who have communication difficulties.
                </li>
                <li>React js with Web Speech API and SpeechSynthesis.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
