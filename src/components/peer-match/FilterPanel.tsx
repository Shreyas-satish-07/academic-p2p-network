import React, { useState } from 'react';

export const FilterPanel: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['React', 'Machine Learning']);
  const [selectedProjects, setSelectedProjects] = useState<string[]>(['Web apps']);
  const [selectedResearch, setSelectedResearch] = useState<string[]>(['Applied ML']);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(['Weekday evenings']);
  const [matchPct, setMatchPct] = useState<number>(65);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleProject = (project: string) => {
    setSelectedProjects((prev) =>
      prev.includes(project) ? prev.filter((p) => p !== project) : [...prev, project]
    );
  };

  const toggleResearch = (research: string) => {
    setSelectedResearch((prev) =>
      prev.includes(research) ? prev.filter((r) => r !== research) : [...prev, research]
    );
  };

  const toggleAvailability = (availability: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(availability) ? prev.filter((a) => a !== availability) : [...prev, availability]
    );
  };

  return (
    <div className="card">
      <div className="card-head">
        <span className="card-tab tab-pine">FL</span>
        <span className="card-title">Filters</span>
      </div>

      <div className="filter-group">
        <div className="filter-label">Department</div>
        <div className="filter-select">
          Computer Science
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-label">Semester</div>
        <div className="filter-select">
          All semesters
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-label">Skills</div>
        <div className="filter-chip-row">
          {['React', 'Python', 'Java', 'Machine Learning', 'Node.js'].map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <span
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`filter-chip ${isSelected ? 'selected' : ''}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-label">Project interests</div>
        <div className="filter-chip-row">
          {['Web apps', 'Mobile apps', 'Open source'].map((proj) => {
            const isSelected = selectedProjects.includes(proj);
            return (
              <span
                key={proj}
                onClick={() => toggleProject(proj)}
                className={`filter-chip ${isSelected ? 'selected' : ''}`}
              >
                {proj}
              </span>
            );
          })}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-label">Research interests</div>
        <div className="filter-chip-row">
          {['NLP', 'Applied ML', 'HCI'].map((res) => {
            const isSelected = selectedResearch.includes(res);
            return (
              <span
                key={res}
                onClick={() => toggleResearch(res)}
                className={`filter-chip ${isSelected ? 'selected' : ''}`}
              >
                {res}
              </span>
            );
          })}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-label">Availability</div>
        <div className="filter-chip-row">
          {['Weekday evenings', 'Weekends'].map((avail) => {
            const isSelected = selectedAvailability.includes(avail);
            return (
              <span
                key={avail}
                onClick={() => toggleAvailability(avail)}
                className={`filter-chip ${isSelected ? 'selected' : ''}`}
              >
                {avail}
              </span>
            );
          })}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-label">Match percentage</div>
        <div className="filter-range">
          <div className="filter-range-track relative w-full h-[5px] bg-[var(--line)] rounded-[20px]">
            <div
              className="filter-range-fill absolute left-0 top-0 bottom-0 bg-[var(--pine)] rounded-[20px]"
              style={{ width: `${((matchPct - 50) / 50) * 100}%` }}
            />
            <input
              type="range"
              min="50"
              max="100"
              value={matchPct}
              onChange={(e) => setMatchPct(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <span className="filter-range-val">{matchPct}%+</span>
        </div>
      </div>

      <button className="filter-apply">Apply filters</button>
    </div>
  );
};

export default FilterPanel;
