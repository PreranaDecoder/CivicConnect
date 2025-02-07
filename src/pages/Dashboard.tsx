import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaComments, FaChartBar } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('reports');

  const tabs = [
    { id: 'reports', label: 'My Reports', icon: <FaMapMarkerAlt /> },
    { id: 'discussions', label: 'Discussions', icon: <FaComments /> },
    { id: 'analytics', label: 'Analytics', icon: <FaChartBar /> },
  ];

  const mockReports = [
    { id: 1, title: 'Broken Streetlight', status: 'In Progress', date: '2023-11-20' },
    { id: 2, title: 'Pothole on Main Street', status: 'Pending', date: '2023-11-19' },
    { id: 3, title: 'Illegal Dumping', status: 'Resolved', date: '2023-11-18' },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm p-6 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {currentUser?.email}
          </h1>
          <p className="text-gray-600 mt-2">
            Track your reports, participate in discussions, and make a difference in your community.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-4 text-center border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {tab.icon}
                    {tab.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {activeTab === 'reports' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  New Report
                </button>
              </div>
              <div className="space-y-4">
                {mockReports.map((report) => (
                  <motion.div
                    key={report.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-900">{report.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        report.status === 'Resolved' 
                          ? 'bg-green-100 text-green-800'
                          : report.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Reported on {report.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'discussions' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">Community Discussions</h3>
              <p className="text-gray-500 mt-2">Coming soon! Join discussions about local issues.</p>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">Analytics Dashboard</h3>
              <p className="text-gray-500 mt-2">Track the impact of your contributions.</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;