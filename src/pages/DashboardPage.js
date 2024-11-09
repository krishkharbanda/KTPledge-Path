import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProgressDashboard from '../components/ProgressDashboard';
import InternshipTracker from '../components/InternshipTracker';
import CoffeeChatScheduler from '../components/CoffeeChatScheduler';
import {Chart, ArcTracker, ArcElement} from 'chart.js';
Chart.register(ArcElement);

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProgressDashboard />
            <InternshipTracker />
          </div>
          <div className="mt-6">
            <CoffeeChatScheduler />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage;
