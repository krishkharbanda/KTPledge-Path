import { useEffect, useState } from 'react';
import API from '../services/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CoffeeChatScheduler() {
  const [activeMembers, setActiveMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [proposedTime, setProposedTime] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    API.get('/active-members')
      .then((response) => setActiveMembers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleRequest = () => {
    // Send request to backend API
    API.post('/coffee-chats', {
      memberId: selectedMember,
      time: proposedTime,
      location,
    })
      .then(() => {
        alert('Coffee chat requested!');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Schedule a Coffee Chat</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Active Member</label>
          <select
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="">Select Active Member</option>
            {activeMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Proposed Time</label>
          <DatePicker
            selected={proposedTime}
            onChange={(date) => setProposedTime(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="Pp"
            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary"
            placeholderText="Select Date and Time"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <button
            onClick={handleRequest}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"
          >
            Request Coffee Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeChatScheduler;
