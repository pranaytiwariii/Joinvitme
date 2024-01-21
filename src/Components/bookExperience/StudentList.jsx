import React, { useState } from 'react';

const students = [
  {
    name: 'ABOUT',
    h1:'AKESIDE HIKE TO KARJAT',
    para:'EXPLORE A LAKESIDE ADVENTURE WITH THE ENTIRE HIKE TRACING THE WATER EDGE. DISCOVER A NATURAL SWIMMING HAVEN FOR PETS, CREATING A PERFECT RETREAT IN NATURE. ITS A BEFINER LEVEL EASY HIKE. PERFECT FOR EVERY AGE GROUP',
    compo:'Abot'
  },
  {
    name: 'ITINERARY',
    para:''
  },
  {
    name: 'IMAGES',
    para:''
  },
  {
    name: 'INCLUSIONS',
    para:''
  },
  {
    name: 'EXCLUSIONS',
    para:''
  },
  {
    name: 'THINGS TO CARRY',
    para:''
  },
  // more students...
];

const StudentList = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div>
      <div className="student-list flex">
        {students.map((student, index) => (
          <div
            key={index}
            className="student-name"
            onClick={() => setSelectedStudent(student)}
          >
            {student.name}
          </div>
        ))}
      </div>
      {selectedStudent && (
        <div className="student-details">
          <div>{selectedStudent.para}</div>
          {/* <{...setSelectedStudent.compo} /> */}
          <button onClick={() => setSelectedStudent(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default StudentList;