import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  img?: string; // Optional for image path
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Explore the Platform",
    img: "/img/homepage/explore-the-platform.png",
    description: (
      <>
        Browse key features like credential management, processflows, execution
        history, and AI agents, everything built to simplify integration.{' '}
        <a href="/platform">Explore</a>
      </>
    ),
  },
  {
    title: "Integrate Applications",
    img: "/img/homepage/integrate-applications.png",
    description: (
      <>
        Connect your favorite apps in minutes. Sync data effortlessly across
        platforms with zero-code integrations and enterprise-grade reliability.{' '}
        <a href="/app-integrations">Explore</a>
      </>
    ),
  },
  {
  title: "Start Your Automation Journey",
    img: "/img/homepage/start-your-automation-journey.png",
  description: (
    <>
      Turn manual tasks into smart, automated workflows. Launch faster, scale
      smarter — Your journey to operational efficiency starts here. 
    </>
  ),
},
];

function Feature({ title, Svg, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {img ? (
          <img
            src={img}
            alt={title}
            width={120}
            height={80}
            className={styles.featureSvg}
            style={{ display: "block", margin: "0 auto 1rem" }}
          />
        ) : Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
