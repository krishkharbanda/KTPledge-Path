import { useEffect, useState } from 'react';
import API from '../services/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function StudyHoursLog() {
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState('');
  const [participants, setParticipants] = useState([]);
  const [allPledges, setAllPledges] = useState([]);

  useEffect(() => {
    API.get('/pledges')
      .then((response) => setAllPledges(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = () => {
    // Submit study hours log
    API.post('/study-hours', {
      date,
      duration,
      participants,
    })
      .then(() => {
        alert('Study hours logged!');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Log Study Hours</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="P"
            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration (hours)</label>
          <input
            type="number"
            placeholder="Enter duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Participants</label>
          <select
            multiple
            value={participants}
            onChange={(e) => setParticipants(Array.from(e.target.selectedOptions, option => option.value))}
            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          >
            {allPledges.map((pledge) => (
              <option key={pledge.id} value={pledge.id}>
                {pledge.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</p>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"
          >
            Log Study Hours
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudyHoursLog;