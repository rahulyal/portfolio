// src/App.jsx

import React from 'react';
import IntroCard from './components/IntroCard';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectsCard from './components/ProjectsCard';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <IntroCard />
      <EducationCard />
      <ExperienceCard />
      <ProjectsCard />
    </div>
  );
}

export default App;