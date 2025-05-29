import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Monitor, PenTool, BookMarked, Megaphone, ChevronRight, Target, BarChart, Presentation } from 'lucide-react';

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'product', name: 'Product Management' },
    { id: 'ux', name: 'UX Research' },
    { id: 'writing', name: 'Technical Writing' },
    { id: 'marketing', name: 'Tech Marketing' },
    { id: 'product-marketing', name: 'Product Marketing' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Product Management Fundamentals',
      category: 'product',
      type: 'Course',
      level: 'Beginner',
      duration: '6 weeks',
      icon: Monitor,
      description: 'Learn the basics of product management, from user research to product strategy.',
      link: '/paths/product-management',
    },
    {
      id: 2,
      title: 'UX Research Methods',
      category: 'ux',
      type: 'Workshop Series',
      level: 'Intermediate',
      duration: '4 weeks',
      icon: PenTool,
      description: 'Deep dive into qualitative and quantitative research methods in UX.',
      link: '/paths/ux-research',
    },
    {
      id: 3,
      title: 'Technical Writing Essentials',
      category: 'writing',
      type: 'Course',
      level: 'Beginner',
      duration: '8 weeks',
      icon: BookMarked,
      description: 'Master the art of technical documentation and API writing.',
      link: '#',
    },
    {
      id: 4,
      title: 'Tech Marketing Strategy',
      category: 'marketing',
      type: 'Workshop',
      level: 'Advanced',
      duration: '3 weeks',
      icon: Megaphone,
      description: 'Learn how to create and execute marketing strategies for tech products.',
      link: '#',
    },
    {
      id: 5,
      title: 'Product Marketing Fundamentals',
      category: 'product-marketing',
      type: 'Course',
      level: 'Beginner',
      duration: '6 weeks',
      icon: Target,
      description: 'Master the essentials of product marketing in the tech industry.',
      link: '/paths/product-marketing',
    },
    {
      id: 6,
      title: 'Market Analysis & Positioning',
      category: 'product-marketing',
      type: 'Workshop',
      level: 'Intermediate',
      duration: '4 weeks',
      icon: BarChart,
      description: 'Learn to analyze markets and position tech products effectively.',
      link: '#',
    },
    {
      id: 7,
      title: 'Product Launch Strategy',
      category: 'product-marketing',
      type: 'Course',
      level: 'Advanced',
      duration: '8 weeks',
      icon: Presentation,
      description: 'Create and execute successful product launch strategies in tech.',
      link: '#',
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='pt-20'>
      {/* Resources Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-aos="slide-right">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Curated resources to help you transition into your dream tech role. From beginner guides to advanced workshops, we've got you covered.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6" data-aos="fade-up">
            <div className="relative flex-1 mb-4 md:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(resource => {
            const IconComponent = resource.icon;
            return (
              <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={`${resource.id * 100}`}>
                <div className="p-6" >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-500">{resource.type} • {resource.level}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.duration}</span>
                    <Link
                      to={resource.link}
                      className="flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Start Learning
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning Paths Section */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"  data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Structured Learning Paths</h2>
            <p className="text-xl text-gray-600">Follow our curated learning paths to master your chosen role</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8"  data-aos="fade-up">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Management</h3>
              <p className="text-gray-600 mb-4">From market research to product strategy, learn everything you need to become a PM.</p>
              <Link
                to="/paths/product-management"
                className="text-purple-600 font-medium hover:text-purple-700 flex items-center"
              >
                View Path <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UX Research</h3>
              <p className="text-gray-600 mb-4">Master user research methods and create impactful product experiences.</p>
              <Link
                to="/paths/ux-research"
                className="text-purple-600 font-medium hover:text-purple-700 flex items-center"
              >
                View Path <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Marketing</h3>
              <p className="text-gray-600 mb-4">Learn to create compelling product narratives and go-to-market strategies.</p>
              <Link
                to="/paths/product-marketing"
                className="text-purple-600 font-medium hover:text-purple-700 flex items-center"
              >
                View Path <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;