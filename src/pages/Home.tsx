import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCity, FaUsers, FaChartLine, FaArrowRight, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaCity className="h-8 w-8" />,
      title: "Real-Time Issue Reporting",
      description: "Report local issues instantly with geotagged photos and AI-powered categorization.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaUsers className="h-8 w-8" />,
      title: "Community Engagement",
      description: "Participate in discussions, surveys, and propose solutions to local problems.",
      color: "from-violet-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaChartLine className="h-8 w-8" />,
      title: "Transparency Metrics",
      description: "Track issue resolution rates and government performance in real-time.",
      color: "from-rose-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80"
    }
  ];

  const howToSteps = [
    {
      title: "Create an Account",
      description: "Sign up with your email or Google account to join our community platform.",
      icon: "🎯"
    },
    {
      title: "Report Issues",
      description: "Use our mobile-friendly interface to report local issues with photos and location.",
      icon: "📱"
    },
    {
      title: "Engage & Collaborate",
      description: "Participate in discussions, vote on solutions, and track progress.",
      icon: "🤝"
    },
    {
      title: "Make Impact",
      description: "See your contributions lead to real changes in your community.",
      icon: "✨"
    }
  ];

  const faqs = [
    {
      question: "What is CivicConnect?",
      answer: "CivicConnect is a digital platform that bridges the gap between citizens and local government, enabling efficient communication, issue reporting, and community collaboration for better governance."
    },
    {
      question: "How does it work?",
      answer: "Users can report local issues, propose solutions, and track progress through our platform. AI-powered categorization ensures efficient routing to relevant authorities, while our transparency metrics keep everyone informed."
    },
    {
      question: "What kind of issues can I report?",
      answer: "You can report various civic issues including infrastructure problems, public safety concerns, environmental issues, and more. Our AI system helps categorize and prioritize reports appropriately."
    },
    {
      question: "What impact does CivicConnect have?",
      answer: "CivicConnect has helped resolve thousands of community issues, improved government response times by 60%, and increased citizen participation in local governance by 45%. Our platform has led to more efficient resource allocation and better community outcomes."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -inset-[10px] opacity-50"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, #7c3aed 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, #4f46e5 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bridging Citizens and Government
          </motion.h1>
          <motion.p 
            className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join CivicConnect to make your voice heard and contribute to building a better community through digital engagement.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/register" 
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300"
              >
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            variants={itemVariants}
          >
            Empowering Communities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white transform -translate-y-12 group-hover:-translate-y-14 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                    whileHover={{ x: 5 }}
                  >
                    Learn more <FaArrowRight className="ml-2" />
                  </motion.a>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact Statistics Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 rounded-2xl bg-blue-50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-bold text-blue-600 mb-2">10k+</h3>
              <p className="text-gray-600">Active Citizens</p>
            </motion.div>
            <motion.div
              className="text-center p-8 rounded-2xl bg-purple-50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-bold text-purple-600 mb-2">5k+</h3>
              <p className="text-gray-600">Issues Resolved</p>
            </motion.div>
            <motion.div
              className="text-center p-8 rounded-2xl bg-pink-50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-bold text-pink-600 mb-2">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How-to Guide Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started with CivicConnect in four simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute top-4 right-4 text-gray-300 text-lg">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about CivicConnect</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <FaQuestionCircle className="text-indigo-600 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-indigo-100"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of citizens who are already making their communities better.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;