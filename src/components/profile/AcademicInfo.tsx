import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface AcademicInfoProps {
  department: string;
  semester: string;
  cgpa: number;
  batch: string;
  college: string;
}

export const AcademicInfo: React.FC<AcademicInfoProps> = ({
  department,
  semester,
  cgpa,
  batch,
  college,
}) => {
  return (
    <Card>
      <CardHeader>
        <span className="card-tab tab-slate">AC</span>
        <CardTitle>Academic information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="academic-grid">
          <div className="academic-cell">
            <div className="l">Department</div>
            <div className="v">{department}</div>
          </div>
          <div className="academic-cell">
            <div className="l">Semester</div>
            <div className="v">{semester}</div>
          </div>
          <div className="academic-cell">
            <div className="l">CGPA</div>
            <div className="v">{cgpa} / 10</div>
          </div>
          <div className="academic-cell">
            <div className="l">Batch</div>
            <div className="v">{batch}</div>
          </div>
          <div className="academic-cell">
            <div className="l">College</div>
            <div className="v">{college}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicInfo;
