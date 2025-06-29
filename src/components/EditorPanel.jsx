import React from 'react';

const EditorPanel = ({
  formData,
  handleInputChange,
  handleArrayItemChange,
  handleBulletChange,
  addBullet,
  removeBullet,
  addSection,
  removeSection
}) => {
  return (
    <div className="editor-panel">
      <h2>Editor</h2>

      {/* Personal Information */}
      <div className="section">
        <h3>Personal Information</h3>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <input
          type="text"
          placeholder="GitHub"
          value={formData.github}
          onChange={(e) => handleInputChange('github', e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn"
          value={formData.linkedin}
          onChange={(e) => handleInputChange('linkedin', e.target.value)}
        />
      </div>

      {/* Education */}
      <div className="section">
        <h3>Education</h3>
        {formData.education.map((edu) => (
          <div key={edu.id} className="subsection">
            <input
              type="text"
              placeholder="Location"
              value={edu.location}
              onChange={(e) => handleArrayItemChange('education', edu.id, 'location', e.target.value)}
            />
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => handleArrayItemChange('education', edu.id, 'institution', e.target.value)}
            />
            <input
              type="text"
              placeholder="Dates"
              value={edu.dates}
              onChange={(e) => handleArrayItemChange('education', edu.id, 'dates', e.target.value)}
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleArrayItemChange('education', edu.id, 'degree', e.target.value)}
            />
            <input
              type="text"
              placeholder="Details (GPA, etc.)"
              value={edu.details}
              onChange={(e) => handleArrayItemChange('education', edu.id, 'details', e.target.value)}
            />
            <textarea
              placeholder="Coursework"
              value={edu.coursework}
              onChange={(e) => handleArrayItemChange('education', edu.id, 'coursework', e.target.value)}
            />
            <button onClick={() => removeSection('education', edu.id)}>Remove</button>
          </div>
        ))}
        <button onClick={() => addSection('education', {
          location: '',
          institution: '',
          dates: '',
          degree: '',
          details: '',
          coursework: ''
        })}>Add Education</button>
      </div>

      {/* Experience */}
      <div className="section">
        <h3>Experience</h3>
        {formData.experience.map((exp) => (
          <div key={exp.id} className="subsection">
            <input
              type="text"
              placeholder="Job Title"
              value={exp.title}
              onChange={(e) => handleArrayItemChange('experience', exp.id, 'title', e.target.value)}
            />
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleArrayItemChange('experience', exp.id, 'company', e.target.value)}
            />
            <input
              type="text"
              placeholder="Dates"
              value={exp.dates}
              onChange={(e) => handleArrayItemChange('experience', exp.id, 'dates', e.target.value)}
            />
            {exp.bullets.map((bullet, index) => (
              <div key={index} className="bullet-item">
                <textarea
                  placeholder="Bullet point"
                  value={bullet}
                  onChange={(e) => handleBulletChange('experience', exp.id, index, e.target.value)}
                />
                <button onClick={() => removeBullet('experience', exp.id, index)}>-</button>
              </div>
            ))}
            <button onClick={() => addBullet('experience', exp.id)}>Add Bullet</button>
            <button onClick={() => removeSection('experience', exp.id)}>Remove Experience</button>
          </div>
        ))}
        <button onClick={() => addSection('experience', {
          title: '',
          company: '',
          dates: '',
          bullets: ['']
        })}>Add Experience</button>
      </div>

      {/* Projects */}
      <div className="section">
        <h3>Projects</h3>
        {formData.projects.map((project) => (
          <div key={project.id} className="subsection">
            <input
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => handleArrayItemChange('projects', project.id, 'name', e.target.value)}
            />
            <input
              type="text"
              placeholder="GitHub Link Text"
              value={project.github}
              onChange={(e) => handleArrayItemChange('projects', project.id, 'github', e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={project.description}
              onChange={(e) => handleArrayItemChange('projects', project.id, 'description', e.target.value)}
            />
            <input
              type="text"
              placeholder="Technologies"
              value={project.technologies}
              onChange={(e) => handleArrayItemChange('projects', project.id, 'technologies', e.target.value)}
            />
            <button onClick={() => removeSection('projects', project.id)}>Remove Project</button>
          </div>
        ))}
        <button onClick={() => addSection('projects', {
          name: '',
          github: 'Github',
          description: '',
          technologies: ''
        })}>Add Project</button>
      </div>

      {/* Extracurricular */}
      <div className="section">
        <h3>Extracurricular</h3>
        {formData.extracurricular.map((extra) => (
          <div key={extra.id} className="subsection">
            <input
              type="text"
              placeholder="Title"
              value={extra.title}
              onChange={(e) => handleArrayItemChange('extracurricular', extra.id, 'title', e.target.value)}
            />
            <input
              type="text"
              placeholder="Organization"
              value={extra.organization}
              onChange={(e) => handleArrayItemChange('extracurricular', extra.id, 'organization', e.target.value)}
            />
            <input
              type="text"
              placeholder="Dates"
              value={extra.dates}
              onChange={(e) => handleArrayItemChange('extracurricular', extra.id, 'dates', e.target.value)}
            />
            {extra.bullets.map((bullet, index) => (
              <div key={index} className="bullet-item">
                <textarea
                  placeholder="Bullet point"
                  value={bullet}
                  onChange={(e) => handleBulletChange('extracurricular', extra.id, index, e.target.value)}
                />
                <button onClick={() => removeBullet('extracurricular', extra.id, index)}>-</button>
              </div>
            ))}
            <button onClick={() => addBullet('extracurricular', extra.id)}>Add Bullet</button>
            <button onClick={() => removeSection('extracurricular', extra.id)}>Remove Activity</button>
          </div>
        ))}
        <button onClick={() => addSection('extracurricular', {
          title: '',
          organization: '',
          dates: '',
          bullets: ['']
        })}>Add Extracurricular</button>
      </div>

      {/* Skills */}
      <div className="section">
        <h3>Skills</h3>
        <textarea
          placeholder="Programming Languages"
          value={formData.programmingLanguages}
          onChange={(e) => handleInputChange('programmingLanguages', e.target.value)}
        />
        <textarea
          placeholder="Frameworks and Platforms"
          value={formData.frameworks}
          onChange={(e) => handleInputChange('frameworks', e.target.value)}
        />
      </div>
    </div>
  );
};

export default EditorPanel;
