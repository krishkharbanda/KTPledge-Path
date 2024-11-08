import { useEffect, useState } from 'react';
import API from '../services/api';

function TikTokAssignments() {
    const [assignments, setAssignments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        API.get('/tiktok-assignments')
            .then((response) => setAssignments(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">TikTok Assignments</h2>
                <ul className="divide-y divide-gray-200">
                    {assignments.map((assignment) => (
                        <li key={assignment.id} className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium text-gray-900">{assignment.title}</p>
                                <p className="text-sm text-gray-500">Due: {new Date(assignment.due_date).toLocaleDateString()}</p>
                            </div>
                            <button
                                className="text-sm text-white bg-primary hover:bg-indigo-700 px-3 py-1 rounded-md"
                                onClick={() => {/* Handle submission */ }}
                            >
                                Submit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {/* Modal content */}
            </Modal>
        </>
    );
}

export default TikTokAssignments;