import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import EditorPanel from './components/EditorPanel';
import CVPreview from './components/CVPreview';
import './App.css';

  const LOCAL_STORAGE_KEY = 'cvFormData';

const App = () => {
  const getInitialFormData = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      // If data exists in localStorage, parse it from JSON string back to object
      return JSON.parse(savedData);
    }

    return {
      // Personal Info
      name: 'Anthony Do',
      phone: '(682) 306 1796',
      email: 'minh.hoang.do@tcu.edu',
      github: 'antoinnedo',
      linkedin: 'in/anthonydo2307',

      // Education
      education: [
        {
          id: 1,
          location: 'Fort Worth, TX',
          institution: 'Texas Christian University',
          dates: 'Aug 2023 – May 2027',
          degree: 'B.S. in Computer Science',
          details: 'Dean\'s List | GPA: 3.71',
          coursework: 'Data Structures and Algorithms, Object-Oriented Programming, Computer Architecture, Compiler Concepts, Linux/Unix, Calculus, Discrete Math, Linear Algebra.'
        },
        {
          id: 2,
          location: 'Remote',
          institution: 'CodePath',
          dates: 'Jun 2024 – Present',
          degree: '',
          details: '',
          coursework: 'Technical Interview 101, Technical Interview 102, Web Development 101, Cybersecurity 101.'
        }
      ],

      // Experience
      experience: [
        {
          id: 1,
          title: 'STEM Tutor',
          company: 'Texas Christian University',
          dates: 'Aug 2024 – Present',
          bullets: [
            'Tutored over 30 students in Computer Science, Math, and Physics courses, improving their grade by 1+ letter.',
            'Worked with the academic manager to support students in overcoming academic and behavioral challenges, ensuring consistent performance.'
          ]
        },
        {
          id: 2,
          title: 'Software Engineer Intern',
          company: 'Rakuna',
          dates: 'Jun 2025 – Nov 2025',
          bullets: [
            'Will be contributing to the development of campus recruiting software features.',
            'Will gain experience in agile methodologies, software testing, and quality assurance.',
            'Expected to assist with full-stack development, including Ruby, JavaScript, React.js, REST APIs, Docker, AWS and Python.'
          ]
        }
      ],

      // Projects
      projects: [
        {
          id: 1,
          name: 'PingPong',
          github: 'Github',
          description: 'A classic 8-bit game PingPong adaptation (implementing AWT 2D Graphics library with pixel operation functions, objects\' coordinates and dimensions) with both multiplayer and AI mode (predicting based on the movement vectors and object collision detections).',
          technologies: 'Java, Swing, AWT.'
        },
        {
          id: 2,
          name: '2048',
          github: 'Github',
          description: 'A tile-merging puzzle game where identical tiles combine according to a row/column-based priority with each key stroke, aiming to form 2048, complete with fully customizable themes (built with FantaCSS).',
          technologies: 'JavaScript, HTML, CSS.'
        },
        {
          id: 3,
          name: 'WhatToDo',
          github: 'Github',
          description: 'A user-friendly to-do list application to help users manage everyday tasks efficiently with functions such as creating new tasks, marking tasks as completed, and deleting tasks from the list.',
          technologies: 'JavaScript, Reactjs, HTML, CSS.'
        }
      ],

      // Extracurricular
      extracurricular: [
        {
          id: 1,
          title: 'Co-secretary',
          organization: 'Omega Deta Phi',
          dates: 'Apr 2024 – Present',
          bullets: [
            'Documented social, fundraising, and volunteer preparations, including managing venues, tools, dues, and a budget exceeding $3000 for the fraternity.',
            'Coordinated collaboration with other 7 multi-cultural greek organizations and board members to organize monthly events with over 100 people.',
            'Monitored and ensured 100% event quotas achieved with more than 20 members to ensure tasks remained on track.'
          ]
        }
      ],

      // Skills
      programmingLanguages: 'TypeScript/JavaScript, Java, Python, C++, C#, Assembly.',
      frameworks: 'Node.js, Bootstrap, Angular, Next.js, React.js, Linux, Git.'
    };
  };

  const [formData, setFormData] = useState(getInitialFormData);
  const [showEditor, setShowEditor] = useState(true);

  // useEffect hook to save formData to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
      console.log('Form data saved to localStorage.');
    } catch (error) {
      console.error('Failed to save data to localStorage:', error);
      // Optionally, inform the user if saving fails (e.g., storage full)
    }
  }, [formData]); // Dependency array: this effect runs whenever formData changes

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayItemChange = (arrayName, id, field, value) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleBulletChange = (arrayName, id, bulletIndex, value) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item =>
        item.id === id ? {
          ...item,
          bullets: item.bullets.map((bullet, index) =>
            index === bulletIndex ? value : bullet
          )
        } : item
      )
    }));
  };

  const addBullet = (arrayName, id) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item =>
        item.id === id ? {
          ...item,
          bullets: [...item.bullets, '']
        } : item
      )
    }));
  };

  const removeBullet = (arrayName, id, bulletIndex) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item =>
        item.id === id ? {
          ...item,
          bullets: item.bullets.filter((_, index) => index !== bulletIndex)
        } : item
      )
    }));
  };

  const addSection = (arrayName, template) => {
    const newId = Math.max(...formData[arrayName].map(item => item.id)) + 1;
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], { ...template, id: newId }]
    }));
  };

  const removeSection = (arrayName, id) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter(item => item.id !== id)
    }));
  };

  const exportToPDF = () => {
    window.print();
  };

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <div className="app">
      <Navbar
        exportToPDF={exportToPDF}
        toggleEditor={toggleEditor}
        showEditor={showEditor}
      />

      <div className="main-content">
        {showEditor && (
          <EditorPanel
            formData={formData}
            handleInputChange={handleInputChange}
            handleArrayItemChange={handleArrayItemChange}
            handleBulletChange={handleBulletChange}
            addBullet={addBullet}
            removeBullet={removeBullet}
            addSection={addSection}
            removeSection={removeSection}
          />
        )}

        <CVPreview
          formData={formData}
          handleInputChange={handleInputChange}
          handleArrayItemChange={handleArrayItemChange}
          handleBulletChange={handleBulletChange}
          addBullet={addBullet}
          removeBullet={removeBullet}
          addSection={addSection}
          removeSection={removeSection}
          showEditor={showEditor}
        />
      </div>
    </div>
  );
};

export default App;
