import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiLock, FiGlobe, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    twoFactorAuth: true,
    language: 'English',
    privacy: 'public',
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="space-y-8">
          {/* Notifications Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiBell className="mr-2" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Email Notifications</h3>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleToggle('emailNotifications')}
                  className={`p-2 rounded-full ${
                    settings.emailNotifications ? 'text-purple-600' : 'text-gray-400'
                  }`}
                >
                  {settings.emailNotifications ? (
                    <FiToggleRight className="w-8 h-8" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8" />
                  )}
                </motion.button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Push Notifications</h3>
                  <p className="text-sm text-gray-600">Get instant updates</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleToggle('pushNotifications')}
                  className={`p-2 rounded-full ${
                    settings.pushNotifications ? 'text-purple-600' : 'text-gray-400'
                  }`}
                >
                  {settings.pushNotifications ? (
                    <FiToggleRight className="w-8 h-8" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8" />
                  )}
                </motion.button>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiLock className="mr-2" />
              Security
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleToggle('twoFactorAuth')}
                  className={`p-2 rounded-full ${
                    settings.twoFactorAuth ? 'text-purple-600' : 'text-gray-400'
                  }`}
                >
                  {settings.twoFactorAuth ? (
                    <FiToggleRight className="w-8 h-8" />
                  ) : (
                    <FiToggleLeft className="w-8 h-8" />
                  )}
                </motion.button>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiGlobe className="mr-2" />
              Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={settings.language}
                  onChange={(e) =>
                    setSettings({ ...settings, language: e.target.value })
                  }
                  className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Privacy
                </label>
                <select
                  value={settings.privacy}
                  onChange={(e) =>
                    setSettings({ ...settings, privacy: e.target.value })
                  }
                  className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="friends">Friends Only</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Save Changes
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;