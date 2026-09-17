import Card from "../Card/card";
import Row from "../Row/Row";
import SectionTitle from "../SectionTitle/SectionTitle";
import { exploreLinks } from "../../data/exploreLinks";

function ContinueExploring({ onAboutOpen }) {
  return (
    <section className="overflow-hidden bg-canvas py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <SectionTitle title="Continue Exploring" />
        <Row>
          {exploreLinks.map((link) => (
            <Card
              key={link.path}
              {...link}
              onClick={link.action === "open-about" ? onAboutOpen : undefined}
            />
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ContinueExploring;
