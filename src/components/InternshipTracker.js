import { useEffect, useState } from 'react';
import API from '../services/api';
import { Doughnut } from 'react-chartjs-2';
import { PlusIcon } from '@heroicons/react/solid';

function InternshipTracker() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get('/applications')
      .then((response) => setApplications(response.data))
      .catch((error) => console.error(error));
  }, []);

  const statusCounts = applications.reduce(
    (acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ['#3B82F6', '#F59E0B', '#10B981', '#EF4444'],
        hoverBackgroundColor: ['#2563EB', '#D97706', '#059669', '#DC2626'],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Internship Status Tracker</h2>
        <button className="flex items-center text-sm text-white bg-primary hover:bg-indigo-700 px-3 py-1 rounded-md">
          <PlusIcon className="h-5 w-5 mr-1" />
          Add Application
        </button>
      </div>
      <div className="w-full h-64">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default InternshipTracker;
