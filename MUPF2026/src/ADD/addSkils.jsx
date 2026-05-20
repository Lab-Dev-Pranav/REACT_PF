import React, { useState, useEffect } from "react";
import "./addSkils.css";
import skillsData from "./skils";

function AddSkils() {
  // Load from localStorage or use default data
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem("portfolio_skills");
    return saved ? JSON.parse(saved) : skillsData;
  });

  const [skill, setSkill] = useState("");
  const [tag, setTag] = useState("core");
  const [newPoint, setNewPoint] = useState("");
  const [points, setPoints] = useState([]);
  const [sequence, setSequence] = useState("");

  // Persist to localStorage whenever skills change
  useEffect(() => {
    localStorage.setItem("portfolio_skills", JSON.stringify(skills));
  }, [skills]);

  const addPoint = () => {
    if (newPoint.trim() !== "") {
      setPoints([...points, newPoint.trim()]);
      setNewPoint("");
    }
  };

  const removePoint = (index) => {
    setPoints(points.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!skill || !tag || points.length === 0) {
      alert("Please fill in the skill name, tag, and at least one point.");
      return;
    }

    const now = new Date().toISOString();
    const newSkill = {
      skill,
      points,
      tag,
      sequence: sequence ? parseInt(sequence) : skills.length + 1,
      createdAt: now,
      updatedAt: now,
    };

    setSkills([...skills, newSkill]);

    // Reset form
    setSkill("");
    setTag("core");
    setPoints([]);
    setNewPoint("");
    setSequence("");
  };

  const handleDeleteSkill = (index) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      const updated = skills.filter((_, i) => i !== index);
      setSkills(updated);
    }
  };

  // Drag & Drop
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (index) => {
    const copied = [...skills];
    const draggedItem = copied[dragIndex];
    copied.splice(dragIndex, 1);
    copied.splice(index, 0, draggedItem);
    
    // Update sequences based on new order
    const updatedWithSequence = copied.map((item, idx) => ({
      ...item,
      sequence: idx + 1,
      updatedAt: new Date().toISOString()
    }));

    setSkills(updatedWithSequence);
  };

  const copyToClipboard = () => {
    const dataString = `const skillsData = ${JSON.stringify(skills, null, 2)};\n\nexport default skillsData;`;
    navigator.clipboard.writeText(dataString).then(() => {
      alert("JSON copied to clipboard! You can now paste it into skils.js");
    });
  };

  return (
    <div className="add-container">
      <div className="admin-header">
        <h1>Skill Management</h1>
        <p>Update your skills with core and soft categories.</p>
        <button onClick={copyToClipboard} className="export-btn">
          Export JSON to Clipboard
        </button>
      </div>

      <div className="management-grid">
        {/* FORM SECTION */}
        <div className="card form-card">
          <h2>Add New Skill</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Skill Name</label>
              <input
                type="text"
                placeholder="e.g. JavaScript, React, etc."
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Tag (Type)</label>
              <div className="radio-group">
                <label className={tag === "core" ? "active" : ""}>
                  <input
                    type="radio"
                    name="tag"
                    value="core"
                    checked={tag === "core"}
                    onChange={(e) => setTag(e.target.value)}
                  />
                  Core
                </label>
                <label className={tag === "soft" ? "active" : ""}>
                  <input
                    type="radio"
                    name="tag"
                    value="soft"
                    checked={tag === "soft"}
                    onChange={(e) => setTag(e.target.value)}
                  />
                  Soft
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Key Points</label>
              <div className="input-with-button">
                <input
                  type="text"
                  placeholder="Add a point about this skill..."
                  value={newPoint}
                  onChange={(e) => setNewPoint(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPoint())}
                />
                <button type="button" onClick={addPoint} className="add-point-btn">
                  Add
                </button>
              </div>
              <div className="points-preview">
                {points.map((p, i) => (
                  <div key={i} className="point-tag">
                    {p}
                    <span onClick={() => removePoint(i)}>×</span>
                  </div>
                ))}
              </div>
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
              Create Skill Entry
            </button>
          </form>
        </div>

        {/* LIST SECTION */}
        <div className="card list-card">
          <h2>Manage & Reorder</h2>
          <div className="draggable-list">
            {skills.map((item, index) => (
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
                    <h3>{item.skill}</h3>
                    <span className={`tag-badge ${item.tag}`}>{item.tag}</span>
                  </div>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleDeleteSkill(index)} className="delete-btn">
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

export default AddSkils;