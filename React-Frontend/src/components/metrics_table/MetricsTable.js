import React from 'react';
import sampleData from '../../data/SampleData.json';
import { determineRiskLevel, getColor } from '../../utils/HealthRiskUtils';

const MetricsTable = () => {
  return (
    <div className="overflow-auto rounded-lg shadow-lg mt-6">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {['ID', 'Date', 'A1C (%)', 'LDL (mg/dL)', 'Glucose (mg/dL)'].map((header) => (
              <th key={header} className="py-2 px-4 text-left bg-gray-100 font-semibold text-gray-600 border-b border-gray-300">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleData.map((patient) => (
            <tr key={patient.id} className="text-gray-700">
              <td className="py-2 px-4 border-b border-gray-300">{patient.id}</td>
              <td className="py-2 px-4 border-b border-gray-300">{patient.date}</td>
              {['a1c', 'ldl', 'glucose'].map((metric) => (
                <td key={metric} className={`py-2 px-4 ${getColor(determineRiskLevel(metric, patient[metric]))} border-b border-gray-300`}>
                  {patient[metric]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsTable;
