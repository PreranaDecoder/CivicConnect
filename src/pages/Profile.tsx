import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { FiEdit2, FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: currentUser?.email || '',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Active community member passionate about improving local infrastructure.',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to your backend
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FiEdit2 className="w-4 h-4" />
            <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full flex items-center justify-center">
                <FiUser className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {profileData.name}
                </h2>
                <p className="text-gray-600">Community Member</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{profileData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{profileData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{profileData.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bio</h3>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) =>
                    setProfileData({ ...profileData, bio: e.target.value })
                  }
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-700">{profileData.bio}</p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Activity Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Reports Filed</div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">8</div>
                  <div className="text-sm text-gray-600">Issues Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isEditing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex justify-end space-x-4"
          >
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Save Changes
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;