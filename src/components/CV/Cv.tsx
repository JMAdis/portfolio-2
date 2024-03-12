import { useCallback, useState } from "react";
import "./Cv.scss";

const Cv = () => {
  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const toggleIsExpanded = useCallback((index: number) => {
    setIsExpanded((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  }, []);

  return (
    <section className="cv">
      <h2 className="cv__title">My Journey</h2>
      <p className="cv__intro">
        Coming from a successful career in Marketing and Communications, I found
        a new calling in software development. I believe my background in
        MarComms complements my newfound skills, blending creativity and
        problem-solving to create tech solutions that truly resonate with end
        users.
      </p>
      <h3 className="cv__subtitle">Experience</h3>
      <ul>
        <li className="cv__list">
          <button onClick={() => toggleIsExpanded(0)} className="cv__button">
            Trainee Software Developer @ Nology{" "}
            {isExpanded[0] ? "\u2796" : "\u2795"}
          </button>
        </li>
        <div
          className="cv__collapsible"
          style={{ height: isExpanded[0] ? "auto" : "0px" }}
        >
          <p className="cv__collapsible--info cv__collapsible--date">
            Nov 23 - Present
          </p>
          <ul className="cv__collapsible--info">
            <li>
              Contributed to a successful client project during the bootcamp,
              showcasing adaptability and teamwork in delivering a dynamic
              solution.
            </li>
            <li>
              Applied problem-solving skills to overcome challenges in a
              fast-paced learning environment, demonstrating proficiency in
              technologies such as React, SCSS/CSS, and TypeScript. Leveraged
              these skills to contribute to the creation of multiple projects.
            </li>
            <li>
              Completed comprehensive training in HTML, CSS, JavaScript,
              TypeScript, React, Java, Spring Boot, Git, and MySQL, gaining
              hands-on experience in the full development stack for both
              front-end and back-end applications.
            </li>
          </ul>
        </div>
        <li className="cv__list">
          <button onClick={() => toggleIsExpanded(1)} className="cv__button">
            Communications and Content Manager @ Tilton Consultancy{" "}
            {isExpanded[1] ? "\u2796" : "\u2795"}
          </button>
        </li>
        <div
          className="cv__collapsible"
          style={{ height: isExpanded[1] ? "auto" : "0px" }}
        >
          <p className="cv__collapsible--info cv__collapsible--date">
            June 23 - Nov 23
          </p>
          <ul className="cv__collapsible--info">
            <li>
              Streamlined client reporting, introducing a new format for monthly
              social reporting with advanced tools for thorough analysis.
            </li>
            <li>
              Represented a client at an international fashion summit, securing
              press interviews, creating engaging social media content, and
              enhancing brand visibility through stakeholder and journalist
              liaisons.
            </li>
            <li>
              Led a multinational malaria net campaign, developing all social
              media, web, and email content. Ensured consistency in messaging
              for partners and celebrated a key organizational milestone.
            </li>
            <li>
              Consistently contributed strong communication and copywriting
              expertise, delivering compelling content that achieved strategic
              objectives and garnered extensive media coverage. Meticulously
              maintained attention to detail across all projects.
            </li>
          </ul>
        </div>
        <li className="cv__list">
          <button onClick={() => toggleIsExpanded(2)} className="cv__button">
            Marketing Communications Executive @ CMR Surgical{" "}
            {isExpanded[2] ? "\u2796" : "\u2795"}
          </button>
        </li>

        <div
          className="cv__collapsible"
          style={{ height: isExpanded[2] ? "auto" : "0px" }}
        >
          <p className="cv__collapsible--info cv__collapsible--date">
            Jan 22 - May 23
          </p>
          <ul className="cv__collapsible--info">
            <li>
              Successfully launched a multi-language documentary campaign
              showcasing CMR's groundbreaking work in a leading UK hospital.
              Coordinated PR, social media, translations, and stakeholder
              collaboration for maximum impact.
            </li>
            <li>
              Collaborated with high-profile industry partners and internal
              teams to plan and execute the launch of a surgical podcast
              dedicated to educating aspiring surgeons about surgical robotics.
            </li>
            <li>
              Orchestrated a 9-language international marketing campaign for
              brand awareness and lead generation. Led ongoing communications
              strategy, managed paid and digital ads, translations, and produced
              landing pages. Resulted in 3M+ YouTube impressions and +445,000 on
              LinkedIn.
            </li>
          </ul>
        </div>
      </ul>
    </section>
  );
};

export default Cv;
