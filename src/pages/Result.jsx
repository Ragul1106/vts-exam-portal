import React, { useEffect, useState } from 'react';
import Resultrow from '../components/Resultrow'; 
import './Result.css'

const RADIUM_GREEN = '#d7f96a';

const staticData = [
  { name: 'Kavya', trainer: 'Priya', tech: 20, practical: 40 },
  { name: 'Diya', trainer: 'Priya', tech: 10, practical: 50 },
  { name: 'Geetha', trainer: 'Priya', tech: 15, practical: 45 },
  { name: 'Keerthi', trainer: 'Priya', tech: 10, practical: 60 },
  { name: 'Sujitha', trainer: 'Priya', tech: 20, practical: 30 },
  { name: 'Ramu', trainer: 'Priya', tech: 25, practical: 60 },
  { name: 'Ram', trainer: 'Priya', tech: 15, practical: 30 },
];

const Result = () => {
  const [rows, setRows] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('technicalExamResults') || '[]');
    const savedName = localStorage.getItem('currentTraineeName');
    let updated = false;

    const augmented = (stored.length > 0 ? stored : staticData).map((entry) => {
      const practical = entry.practical ?? Math.floor(Math.random() * 21) + 50;
      const score = entry.score ?? entry.tech ?? 0;
      const trainer = entry.trainer || 'Priya';
      const name = entry.name && entry.name.toLowerCase() !== 'unknown' ? entry.name : savedName || 'Unknown';
      const total = score + practical;

      if (entry.practical === undefined || entry.total === undefined || entry.name === 'Unknown') {
        updated = true;
      }

      return {
        ...entry,
        name,
        trainer,
        score,
        practical,
        total,
      };
    });

    if (updated || stored.length === 0) {
      localStorage.setItem('technicalExamResults', JSON.stringify(augmented));
    }

    setRows(augmented);
  }, []);

  const downloadCSV = () => {
    const header = ['S.No', 'Trainee Name', 'Trainer Name', 'Technical (30)', 'Practical (70)', 'Total (100)'];
    const csv = [
      header.join(','),
      ...rows.map((r, i) => [i + 1, r.name, r.trainer, r.score, r.practical, r.total].join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = Object.assign(document.createElement('a'), { href: url, download: 'exam_scores.csv' });
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const enterEditMode = () => setEditMode(true);

  const handleRowChange = (idx, field, value) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === idx
          ? {
              ...row,
              [field]: field === 'practical' || field === 'score' ? Number(value) : value,
              total:
                field === 'practical'
                  ? Number(value) + (row.score || 0)
                  : field === 'score'
                  ? Number(value) + (row.practical || 0)
                  : row.total,
            }
          : row
      )
    );
  };

  const saveChanges = () => {
    for (const r of rows) {
      const practical = Number(r.practical);
      const score = Number(r.score);

      if (practical < 0 || practical > 70 || Number.isNaN(practical)) {
        alert(`Practical mark for ${r.name} must be between 0 and 70`);
        return;
      }
      if (score < 0 || score > 30 || Number.isNaN(score)) {
        alert(`Technical score for ${r.name} must be between 0 and 30`);
        return;
      }
    }
    localStorage.setItem('technicalExamResults', JSON.stringify(rows));
    setEditMode(false);
  };

  const cellStyle = { border: 'none', padding: '25px' };

  return (
    <div className="container py-4">
      <Resultrow />

      <div className="table-responsive mt-4">
        <table className="text-center w-100 result-table" style={{ borderCollapse: 'collapse', border: 'none' }}>
          <thead>
            <tr style={{ backgroundColor: '#1C2B29', color: '#fff' }}>
              <th style={cellStyle}>S.No</th>
              <th style={cellStyle}>Trainee's Name</th>
              <th style={cellStyle}>Trainer Name</th>
              <th style={cellStyle}>Technical Marks <br /> (Out of 30)</th>
              <th style={cellStyle}>Practical Marks <br /> (Out of 70)</th>
              <th style={cellStyle}>Total Marks</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: RADIUM_GREEN, color: '#000' }}>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="6" style={cellStyle}>
                  No data yet
                </td>
              </tr>
            ) : (
              rows.map((r, i) => (
                <tr key={i}>
                  <td style={cellStyle} data-label="S.No">{i + 1}</td>
                  <td style={cellStyle} data-label="Trainee's Name">{r.name}</td>
                  <td style={cellStyle} data-label="Trainer Name">
                    {editMode ? (
                      <input
                        value={r.trainer}
                        onChange={(e) => handleRowChange(i, 'trainer', e.target.value)}
                        className="form-control form-control-sm text-center"
                        style={{ border: '1px solid #999', minWidth: 90 }}
                      />
                    ) : (
                      r.trainer
                    )}
                  </td>
                  <td style={cellStyle} data-label="Technical Marks (Out of 30)">
                    {editMode ? (
                      <input
                        type="number"
                        min="0"
                        max="30"
                        value={r.score}
                        onChange={(e) => handleRowChange(i, 'score', e.target.value)}
                        className="form-control form-control-sm text-center"
                        style={{ border: '1px solid #999', maxWidth: 80 }}
                      />
                    ) : (
                      r.score
                    )}
                  </td>
                  <td style={cellStyle} data-label="Practical Marks (Out of 70)">
                    {editMode ? (
                      <input
                        type="number"
                        min="0"
                        max="70"
                        value={r.practical}
                        onChange={(e) => handleRowChange(i, 'practical', e.target.value)}
                        className="form-control form-control-sm text-center"
                        style={{ border: '1px solid #999', maxWidth: 80 }}
                      />
                    ) : (
                      r.practical
                    )}
                  </td>
                  <td style={cellStyle} data-label="Total Marks">{r.total}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center gap-5 mt-3 me-5">
        <button className="btn btn-dark" onClick={downloadCSV}>Download</button>
        {editMode ? (
          <button className="btn btn-success" onClick={saveChanges}>Save</button>
        ) : (
          <button
            className="btn btn-secondary text-dark"
            onClick={enterEditMode}
            style={{ backgroundColor: '#d6ff63' }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Result;
