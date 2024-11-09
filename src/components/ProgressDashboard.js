import { useEffect, useState } from 'react';
import API from '../services/api';
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';

function ProgressDashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get('/api/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleComplete = (taskId) => {
    API.patch(`/api/tasks/${taskId}/`, { status: 'Completed' })
      .then(() => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, status: 'Completed' } : task));
      })
      .catch(error => console.error(error));
  };
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Dashboard</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            {task.status === 'Completed' ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
            ) : (
              <ExclamationIcon className="h-6 w-6 text-yellow-500 mr-2" />
            )}
            <span className={`flex-1 ${task.status === 'Completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              {task.title}
            </span>
            {task.status !== 'Completed' && (
              <button
                className="text-sm text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md"
                onClick={() => handleComplete(task.id)}
              >
                Mark as Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressDashboard;
