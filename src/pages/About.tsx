import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6 flex flex-col items-center text-center">
      <motion.h1
        className="text-5xl font-extrabold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About CivicConnect
      </motion.h1>

      <motion.p
        className="max-w-4xl text-lg text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        CivicConnect is an innovative platform designed to enhance collaboration
        between citizens and the government. It bridges communication gaps,
        empowers citizens, and improves transparency in governance through
        digital engagement.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl transition transform hover:scale-105 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 rounded-2xl"></div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 relative z-10">
              {feature.title}
            </h2>
            <p className="text-gray-600 relative z-10">{feature.description}</p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-400 opacity-20 rounded-full transform translate-x-8 translate-y-8"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Real-Time Issue Reporting',
    description:
      'Citizens can report local issues with geotagged photos. AI categorizes and prioritizes based on urgency.',
  },
  {
    title: 'Crowdsourced Solutions',
    description:
      'Propose and vote on solutions to community problems. Winning ideas are forwarded to relevant authorities.',
  },
  {
    title: 'Government Dashboard',
    description:
      'Officials monitor reports, track progress, and respond to citizens directly with detailed analytics.',
  },
  {
    title: 'Public Transparency Metrics',
    description:
      'Track issue resolution rates, display government performance ratings, and provide public insights.',
  },
  {
    title: 'Community Engagement',
    description:
      'Forums for policy discussions, online surveys, and citizen participation in local governance.',
  },
  {
    title: 'Gamification & Rewards',
    description:
      'Earn points for contributions and redeem rewards for government services and public transport discounts.',
  },
];

export default About;