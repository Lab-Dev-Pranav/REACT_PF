import "./WeWorked.css";

import projectsData from "../../ADD/projects"
import skillsData from "../../ADD/skils"



const skillsList = skillsData.map(({ name_id, name }) => ({
  name_id,
  name,
  page: "skills",
}));

// console.log(skillsList);


const projectList = projectsData.map(({ name_id, name }) => ({
  name_id,
  name,
  page: "projects",
}));

// console.log(projectList);


const baseUrl = window.location.origin;

// console.log(baseUrl);

export default function WeWorked() {

  return (
    <section className="worked-section">

      {/* Projects */}
      <h1>🗂️ Projects</h1>
      <MarqueeRow
        items={projectList}
        direction="left"
      />

      {/* Skills */}
      <h1>🛠️ Skills</h1>
      {/* <div className="desktop-view"> */}
      <MarqueeRow
        items={skillsList}
        direction="right"
      />
      {/* </div> */}
    </section>
  );
}

function MarqueeRow({ items, direction }) {
  return (
    <div className="marquee-container">
      <div
        className={`marquee-track ${direction === "right"
          ? "marquee-reverse"
          : "marquee"
          }`}
      >
        {[...items, ...items].map((item, index) => (
          // baseUrl
          <a href={`/${item.page}#${encodeURIComponent(item.name_id)}`}
            key={`${item.page}-${item.name_id}-${index}`}
          >
            <div className="glass-card" >

              <p>{item.name}</p>

          

              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </a>

        ))}
      </div>
    </div>
  );
}
