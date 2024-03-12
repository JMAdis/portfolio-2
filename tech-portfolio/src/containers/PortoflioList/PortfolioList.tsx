import "./PortfolioList.scss";
import { ProjectInfoTypes } from "../../types/ProjectInfoTypes";
import PortfolioTile from "../../components/PortfolioTIle/PortfolioTile";

type PortfolioListProps = {
  projects: ProjectInfoTypes[];
};

const PortfolioList = ({ projects }: PortfolioListProps) => {
  return (
    <section className="projects-container" id="portfolio">
      <h2 className="projects__title">Take a look at my recent work:</h2>
      <div className="projects">
        {projects.map((project) => (
          <PortfolioTile
            title={project.title}
            primarylanguage={project.primarylanguage}
            secondarylanguage={project.secondarylanguage}
            repo={project.repo}
            link={project.link}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioList;
