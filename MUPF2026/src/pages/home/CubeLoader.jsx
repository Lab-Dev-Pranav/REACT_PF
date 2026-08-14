import "./CubeLoader.css";

const columns = [-1, 0, 1];
const blocks = [3, 2, 1];
const languages = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java', 'SQL', 'Git', 'Python'];

export default function CubeLoader() {
  return (
    <div className="cube-loader" aria-label="Programming language cubes">
      {[1, 2, 3].map((cube, cubeIndex) => (
        <div className="cube" key={cube}>
          {columns.map((x, columnIndex) => (
            <div className="cube-column" key={x} style={{ "--x": x, "--y": 0 }}>
              {blocks.map((i, blockIndex) => {
                const languageIndex = cubeIndex * columns.length * blocks.length + columnIndex * blocks.length + blockIndex;
                const language = languages[languageIndex % languages.length];

                return (
                  <span
                    className="cube-block"
                    key={i}
                    style={{ "--i": i }}
                    tabIndex={0}
                    role="img"
                    aria-label={language}
                  >
                    {/* <span className="cube-tooltip" role="tooltip">{language}</span> */}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}