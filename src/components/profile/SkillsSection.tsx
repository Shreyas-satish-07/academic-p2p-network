import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface SkillsSectionProps {
  skills: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Card>
      <CardHeader>
        <span className="card-tab tab-marigold">SK</span>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chip-row">
          {skills.map((skill, index) => (
            <span key={index} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
