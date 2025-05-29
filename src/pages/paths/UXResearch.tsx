import React from 'react';
import { ArrowLeft, PenTool, Target, Users, BookOpen, Award, ChevronRight, Lightbulb, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

function UXResearch() {
  const modules = [
    {
      title: 'UX Research Fundamentals',
      duration: '2 weeks',
      topics: [
        'Introduction to UX Research',
        'Research Methods Overview',
        'User Psychology Basics',
        'Research Ethics and Best Practices'
      ]
    },
    {
      title: 'Research Methods & Tools',
      duration: '2 weeks',
      topics: [
        'Qualitative Research Methods',
        'Quantitative Research Methods',
        'User Interviews & Usability Testing',
        'Survey Design and Analysis'
      ]
    },
    {
      title: 'Analysis & Presentation',
      duration: '2 weeks',
      topics: [
        'Data Analysis Techniques',
        'Research Synthesis',
        'Creating Research Reports',
        'Presenting Findings to Stakeholders'
      ]
    }
  ];

  const tools = [
    'Maze',
    'UserTesting',
    'Lookback',
    'Optimal Workshop',
    'Dovetail',
    'Miro'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources" className="inline-flex items-center text-purple-200 hover:text-white mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Resources
          </Link>
          <h1 className="text-4xl font-bold mb-6">UX Research Learning Path</h1>
          <p className="text-xl text-purple-200 max-w-3xl">
            Learn to conduct effective user research and create insights that drive better product decisions.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-purple-50 p-6 rounded-xl">
            <Eye className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">6-Week Program</h3>
            <p className="text-gray-600">Comprehensive curriculum covering research methods and analysis</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <Lightbulb className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real Projects</h3>
            <p className="text-gray-600">Hands-on experience with actual research projects</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <Users className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Mentorship from experienced UX Researchers</p>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Curriculum</h2>
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                <p className="text-purple-600 mb-4">{module.duration}</p>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Research Tools You'll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 px-4 py-3 rounded-lg text-center">
                <span className="text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Career Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Roles You'll Be Ready For</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 text-purple-600 mr-3" />
                  UX Researcher
                </li>
                <li className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 text-purple-600 mr-3" />
                  User Researcher
                </li>
                <li className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 text-purple-600 mr-3" />
                  Research Operations
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Average Salary Range</h3>
              <p className="text-3xl font-bold text-purple-600">$75,000 - $140,000</p>
              <p className="text-gray-600 mt-2">Based on experience and location</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-purple-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your UX Research Career</h2>
          <p className="text-gray-600 mb-6">Join our next cohort and learn to drive product decisions with user insights</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default UXResearch;