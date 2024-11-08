import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardListIcon,
  CalendarIcon,
  ChatAltIcon,
} from '@heroicons/react/outline';

function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0 bg-white shadow">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 px-4">
            <Link to="/" className="text-primary font-bold text-2xl">
              KTPledge Path
            </Link>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link to="/" className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              <HomeIcon className="h-6 w-6 text-gray-500 mr-3" />
              Dashboard
            </Link>
            <Link to="/tasks" className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              <ClipboardListIcon className="h-6 w-6 text-gray-500 mr-3" />
              Tasks
            </Link>
            <Link to="/calendar" className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              <CalendarIcon className="h-6 w-6 text-gray-500 mr-3" />
              Calendar
            </Link>
            <Link to="/chats" className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              <ChatAltIcon className="h-6 w-6 text-gray-500 mr-3" />
              Coffee Chats
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;