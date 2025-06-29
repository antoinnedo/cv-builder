import React from 'react';

const Navbar = ({ exportToPDF, toggleEditor, showEditor }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>CV Builder</h2>
      </div>
      <div className="navbar-actions">
        <button
          className="toggle-btn"
          onClick={toggleEditor}
        >
          {showEditor ? 'Hide Editor' : 'Show Editor'}
        </button>
        <button
          className="export-btn"
          onClick={exportToPDF}
        >
          Export PDF
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
