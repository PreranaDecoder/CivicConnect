import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiMessageCircle, FiCalendar } from 'react-icons/fi';

const Community = () => {
  const events = [
    {
      title: 'Town Hall Meeting',
      date: '2023-12-15',
      time: '18:00',
      location: 'City Hall',
      attendees: 45,
    },
    {
      title: 'Community Cleanup Day',
      date: '2023-12-20',
      time: '09:00',
      location: 'Central Park',
      attendees: 78,
    },
    {
      title: 'Local Business Forum',
      date: '2023-12-25',
      time: '14:00',
      location: 'Community Center',
      attendees: 32,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Community Hub
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with your neighbors and participate in local events.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-teal-100 flex items-center justify-center">
                      <FiCalendar className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.date} at {event.time}
                    </p>
                    <p className="text-gray-600">
                      {event.location}
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <FiUsers className="mr-1" />
                      {event.attendees} attending
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Join
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Community Chat</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-teal-50">
                <FiMessageCircle className="w-6 h-6 text-purple-600 mb-2" />
                <h3 className="font-medium text-gray-900">Join the Discussion</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Connect with your neighbors and discuss local matters.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Start Chatting
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;