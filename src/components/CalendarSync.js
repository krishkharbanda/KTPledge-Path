import { useEffect } from 'react';
import { gapi } from 'gapi-script';

function CalendarSync() {
  const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
  const API_KEY = 'YOUR_API_KEY';
  const SCOPES = 'https://www.googleapis.com/auth/calendar';

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      // User signed in, proceed with syncing
    });
  };

  return (
    <button onClick={handleAuthClick} className="bg-red-500 text-white p-2 rounded">
      Sync with Google Calendar
    </button>
  );
}

export default CalendarSync;
