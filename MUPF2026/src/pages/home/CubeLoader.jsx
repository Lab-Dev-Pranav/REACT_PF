import "./CubeLoader.css";

const columns = [-1, 0, 1];
const blocks = [3, 2, 1];

export default function CubeLoader() {
  return (
    <div className="cube-loader" role="img" aria-label="Animated cube loader">
      {[1, 2, 3].map((cube) => (
        <div className="cube" key={cube}>
          {columns.map((x) => (
            <div className="cube-column" key={x} style={{ "--x": x, "--y": 0 }}>
              {blocks.map((i) => (
                <span key={i} style={{ "--i": i }} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}