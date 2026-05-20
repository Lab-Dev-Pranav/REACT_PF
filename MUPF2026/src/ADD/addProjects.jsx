import React, { useState, useEffect } from "react";
import "./addProjects.css";
import projectsData from "./projects";

function AddProjects() {
  // Load from localStorage or use default data
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("portfolio_projects");
    return saved ? JSON.parse(saved) : projectsData;
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Grand");
  const [githubLink, setGithubLink] = useState("");
  const [runLink, setRunLink] = useState("");
  const [sequence, setSequence] = useState("");
  
  const [newLang, setNewLang] = useState("");
  const [languages, setLanguages] = useState([]);

  // Persist to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem("portfolio_projects", JSON.stringify(projects));
  }, [projects]);

  const addLanguage = () => {
    if (newLang.trim() !== "") {
      setLanguages([...languages, newLang.trim()]);
      setNewLang("");
    }
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !githubLink) {
      alert("Please fill in the project name, description, and GitHub link.");
      return;
    }

    const newProject = {
      name,
      description,
      languages,
      tag,
      githubLink,
      runLink: runLink || "",
      sequence: sequence ? parseInt(sequence) : projects.length + 1,
    };

    setProjects([...projects, newProject]);

    // Reset form
    setName("");
    setDescription("");
    setTag("Grand");
    setGithubLink("");
    setRunLink("");
    setLanguages([]);
    setNewLang("");
    setSequence("");
  };

  const handleDeleteProject = (index) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const updated = projects.filter((_, i) => i !== index);
      setProjects(updated);
    }
  };

  // Drag & Drop
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (index) => {
    const copied = [...projects];
    const draggedItem = copied[dragIndex];
    copied.splice(dragIndex, 1);
    copied.splice(index, 0, draggedItem);
    
    // Update sequences based on new order
    const updatedWithSequence = copied.map((item, idx) => ({
      ...item,
      sequence: idx + 1
    }));

    setProjects(updatedWithSequence);
  };

  const copyToClipboard = () => {
    const dataString = `const projectsData = ${JSON.stringify(projects, null, 2)};\n\nexport default projectsData;`;
    navigator.clipboard.writeText(dataString).then(() => {
      alert("JSON copied to clipboard! You can now paste it into projects.js");
    });
  };

  return (
    <div className="add-container">
      <div className="admin-header">
        <h1>Project Management</h1>
        <p>Curate your portfolio with Grand and Mini projects.</p>
        <button onClick={copyToClipboard} className="export-btn">
          Export JSON to Clipboard
        </button>
      </div>

      <div className="management-grid">
        {/* FORM SECTION */}
        <div className="card form-card">
          <h2>Add New Project</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                placeholder="e.g. E-commerce App"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Briefly describe the project..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Type (Tag)</label>
              <div className="radio-group">
                <label className={tag === "Grand" ? "active" : ""}>
                  <input
                    type="radio"
                    name="tag"
                    value="Grand"
                    checked={tag === "Grand"}
                    onChange={(e) => setTag(e.target.value)}
                  />
                  Grand
                </label>
                <label className={tag === "Mini" ? "active" : ""}>
                  <input
                    type="radio"
                    name="tag"
                    value="Mini"
                    checked={tag === "Mini"}
                    onChange={(e) => setTag(e.target.value)}
                  />
                  Mini
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Languages / Tech Stack</label>
              <div className="input-with-button">
                <input
                  type="text"
                  placeholder="e.g. React, Node.js"
                  value={newLang}
                  onChange={(e) => setNewLang(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
                />
                <button type="button" onClick={addLanguage} className="add-point-btn">
                  Add
                </button>
              </div>
              <div className="points-preview">
                {languages.map((l, i) => (
                  <div key={i} className="point-tag">
                    {l}
                    <span onClick={() => removeLanguage(i)}>×</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>GitHub Link</label>
              <input
                type="text"
                placeholder="https://github.com/..."
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Live Demo Link (Optional)</label>
              <input
                type="text"
                placeholder="https://..."
                value={runLink}
                onChange={(e) => setRunLink(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Sequence (Optional)</label>
              <input
                type="number"
                placeholder="Ordering number"
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">
              Create Project Entry
            </button>
          </form>
        </div>

        {/* LIST SECTION */}
        <div className="card list-card">
          <h2>Portfolio Overview</h2>
          <div className="draggable-list">
            {projects.map((item, index) => (
              <div
                key={index}
                className="draggable-item"
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
              >
                <div className="item-info">
                  <span className="item-index">{item.sequence || index + 1}</span>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <span className={`tag-badge ${item.tag}`}>{item.tag}</span>
                  </div>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleDeleteProject(index)} className="delete-btn">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <span className="drag-handle">☰</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProjects;
