import React from 'react';

const CVPreview = ({ formData, showEditor }) => {
  return (
    <div className={`cv-preview ${!showEditor ? 'full-width' : ''}`}>
      <div className="page">
        {/* Header with Contact Info and Name */}
        <div className="cv-header">
          <div className="contact-info-left">
            <div>Github: {formData.github}</div>
            <div>Linkedin: {formData.linkedin}</div>
          </div>
          <div className="contact-name">
            <h1>{formData.name}</h1>
          </div>
          <div className="contact-info-right">
            <div>{formData.phone}</div>
            <div>{formData.email}</div>
          </div>
        </div>

        {/* Education Section */}
        <div className="cv-section">
          <h2>EDUCATION</h2>
          {formData.education.map((edu) => (
            <div key={edu.id} className="cv-item">
              <div className="cv-item-header">
                <span className="location">{edu.location}</span>
                <span className="institution">{edu.institution}</span>
                <span className="dates">{edu.dates}</span>
              </div>
              {edu.degree && (
                <div className="degree-details">
                  <span className="bullet">■</span>
                  <span>{edu.degree}{edu.details && ` | ${edu.details}`}</span>
                </div>
              )}
              {edu.coursework && (
                <div className="coursework">
                  <span className="bullet">■</span>
                  <span>Coursework: {edu.coursework}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="cv-section">
          <h2>EXPERIENCE</h2>
          {formData.experience.map((exp) => (
            <div key={exp.id} className="cv-item">
              <div className="cv-item-header">
                <span className="title">{exp.title}</span>
                <span className="company">{exp.company}</span>
                <span className="dates">{exp.dates}</span>
              </div>
              {exp.bullets.map((bullet, index) => (
                bullet && (
                  <div key={index} className="bullet-point">
                    <span className="bullet">■</span>
                    <span>{bullet}</span>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="cv-section">
          <h2>PROJECTS</h2>
          {formData.projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-header">
                <span className="project-name">{project.name}</span>
                <span className="github-link">{project.github}</span>
              </div>
              {project.description && (
                <div className="project-description">
                  <span className="bullet">■</span>
                  <span>{project.description}</span>
                </div>
              )}
              {project.technologies && (
                <div className="project-tech">
                  <span className="bullet">■</span>
                  <span>Utilized {project.technologies}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extracurricular Section */}
        <div className="cv-section">
          <h2>EXTRACURRICULAR</h2>
          {formData.extracurricular.map((extra) => (
            <div key={extra.id} className="cv-item">
              <div className="cv-item-header">
                <span className="title">{extra.title}</span>
                <span className="company">{extra.organization}</span>
                <span className="dates">{extra.dates}</span>
              </div>
              {extra.bullets.map((bullet, index) => (
                bullet && (
                  <div key={index} className="bullet-point">
                    <span className="bullet">■</span>
                    <span>{bullet}</span>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="cv-section">
          <h2>SKILLS AND TECHNOLOGIES</h2>
          {formData.programmingLanguages && (
            <div className="skills-item">
              <span className="bullet">■</span>
              <strong>Programming Languages:</strong>
              <span>{formData.programmingLanguages}</span>
            </div>
          )}
          {formData.frameworks && (
            <div className="skills-item">
              <span className="bullet">■</span>
              <strong>Frameworks and Platforms:</strong>
              <span>{formData.frameworks}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
