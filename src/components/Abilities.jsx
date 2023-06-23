import React from 'react';

export default function Abilities() {
  const skillsA = ['Front-End Web Development', 'HTML 5', 'CSS 3', 'Flexbox', 'Grid', 'Bootstrap 5', 'Javascript ES6', 'DOM Manipulation', 'jQuery', 'Bash Command Line', 'Git, GitHub and Version Control', 'Backend Web Development', 'Node.js', 'NPM', 'Express.js']; // Replace with your actual skills
  const skillsB = [ 'EJS', 'REST', 'APIs', 'Databases', 'SQL', 'MongoDB', 'Mongoose', 'Authentication', 'Firebase', 'React.js', 'React Hooks', 'Web Design', 'Deployment with GitHub Pages, Heroku and MongoDB Atlas']; // Replace with your actual skills
    
  return (
      <div className="abilities">
      
        <div>
         <h2>ABILITIES</h2>
         <p>Here are my most important abilities as a Creative Engineer</p>
        </div>

        {/* Skills list on the left */}
        <div className="SkillA" style={{ display: 'inline-block', width: '50%', marginRight: '10px' }}>
          
         {skillsA.map((skillA, index) => (
         <div key={index}>{skillA}</div>
         ))}

        </div>

        {/* Skills list on the right */}
        <div className="SkillB" style={{ display: 'inline-block', width: '50%' }}>
        
         {skillsB.map((skillB, index) => (
         <div key={index}>{skillB}</div>
         ))}

        </div> 

      </div>
    );
}





