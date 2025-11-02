// NotesAndTrainers.jsx
import React from 'react';
import './NotesAndTrainers.css';

// Notes Data
const notesData = [
  { id: 1, subject: 'DESIGN UI-UX', level: 'Level 3', price: '-' },
  { id: 2, subject: 'QUALITY ASSURANCE', level: 'Level 3', price: '-' },
  { id: 3, subject: 'FRONTEND DEVELOPMENT USING REACT JS', level: 'Level 4', price: '-' },
  { id: 4, subject: 'MOBILE APPLICATION DEVELOPMENT USING FLUTTER', level: 'Level 5', price: '-' },
  { id: 5, subject: 'INTRO TO COMPUTER NETWORKS', level: 'University', price: '-' },
  { id: 6, subject: 'DEVELOP DATABASE ', level: 'Level 4', price: '-' },
  { id: 7, subject: 'COMPUTER LITERACY ', level: 'Level 4', price: 'Free' },
];

// Trainers Data
const trainersData = [
  { id: 101, name: 'Daniel D.', description: 'A0 in Information Technology with 3 years of experience as Trainer' },
  { id: 102, name: 'Eric N.', description: 'Software Development Senior Trainer with 3 years of experience' },
  { id: 103, name: 'Peter ', description: 'Super talented trainer with A1 in Mathematics' },
];

// Trainings Data
const trainingsData = [
  { id: 201, subject: 'DESIGN UI-UX', level: 'Level 3', trainerId: 101, price: '-' },
  { id: 202, subject: 'QUALITY ASSURANCE', level: 'Level 3', trainerId: 101, price: '-' },
  { id: 203, subject: 'FRONTEND DEVELOPMENT USING REACT JS', level: 'Level 4', trainerId: 102, price: '-' },
  { id: 204, subject: 'MOBILE APPLICATION DEVELOPMENT USING FLUTTER', level: 'Level 5', trainerId: 102, price: '-' },
  { id: 205, subject: 'INTRO TO COMPUTER NETWORKS', level: 'University', trainerId: 101, price: '-' },
  { id: 206, subject: 'MATHEMATICS', level: 'Level 3', trainerId: 103, price: '-'},
  { id: 207, subject: 'DEVELOP DATABASE ', level: 'Level 4', trainerId: 101, price: '-' },
];

const NotesAndTrainers = () => {
  return (
    <div className="notes-page">
      {/* Available Notes Table */}
      <h2 className="notes-title">Available Notes</h2>
      <table className="notes-table">
        <thead>
          <tr>
            <th>Note ID</th>
            <th>Subject Name</th>
            <th>Subject Level</th>
            <th>Access Price</th>
          </tr>
        </thead>
        <tbody>
          {notesData.map((note) => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.subject}</td>
              <td>{note.level}</td>
              <td>{note.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Available Trainers Table */}
      <h2 className="notes-title">Available Trainers</h2>
      <table className="notes-table">
        <thead>
          <tr>
            <th>Trainer ID</th>
            <th>Trainer Name</th>
            <th>Trainer Description</th>
          </tr>
        </thead>
        <tbody>
          {trainersData.map((trainer) => (
            <tr key={trainer.id}>
              <td>{trainer.id}</td>
              <td>{trainer.name}</td>
              <td>{trainer.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Available Trainings Table */}
      <h2 className="notes-title">Available Trainings</h2>
      <table className="notes-table">
        <thead>
          <tr>
            <th>Training ID</th>
            <th>Subject Name</th>
            <th>Subject Level</th>
            <th>Trainer ID</th>
            <th>Training Price</th>
          </tr>
        </thead>
        <tbody>
          {trainingsData.map((training) => (
            <tr key={training.id}>
              <td>{training.id}</td>
              <td>{training.subject}</td>
              <td>{training.level}</td>
              <td>{training.trainerId}</td>
              <td>{training.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="notes-title"> Promotion Notice:
Need to print and bind your documents? Enjoy our fast, reliable, and affordable printing and binding services.  </h2>
    </div>
  );
};

export default NotesAndTrainers;


