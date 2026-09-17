import Card from "../Card/card";
import Row from "../Row/Row";
import SectionTitle from "../SectionTitle/SectionTitle";
import { projects } from "../../data/projects";

function FeaturedProjects() {
  return (
    <section className="overflow-hidden bg-canvas py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <SectionTitle title="Featured Projects" />
        <Row>
          {projects.map((project) => (
            <Card key={project.title} {...project} variant="project" />
          ))}
        </Row>
      </div>
    </section>
  );
}

export default FeaturedProjects;
