import React from 'react';

export default function Abilities() {
  const skillsA = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']; // Replace with your actual skills
  const skillsB = ['Skill 5', 'Skill 6', 'Skill 7', 'Skill 8']; // Replace with your actual skills
    
  return (
      <div>
      
        <div className="abilities">
         <h2>ABILITIES</h2>
         <p>Here are my most important abilities as a Creative Engineer</p>
        </div>

        //Skills list on the left
        <div className="SkillA" style={{ display: 'inline-block', width: '50%', marginRight: '10px' }}>
          
         {skillsA.map((skillA, index) => (
         <div key={index}>{skillA}</div>
         ))}

        </div>

        //Skills list on the right
        <div className="SkillB" style={{ display: 'inline-block', width: '50%' }}>
        
         {skillsB.map((skillB, index) => (
         <div key={index}>{skillB}</div>
         ))}

        </div> 

      </div>
    );
}





