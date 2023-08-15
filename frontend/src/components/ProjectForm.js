import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/projects', { title })
      .then(response => {
        console.log('Project created:', response.data.project);
        setTitle('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Project Title"
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProjectForm;
