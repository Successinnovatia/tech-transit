
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, BookOpen, Award, ChevronRight, Rocket } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Join a network of professionals transitioning into tech roles, sharing experiences and insights.'
    },
    {
      icon: Target,
      title: 'Structured Learning',
      description: 'Follow curated learning paths designed specifically for non-technical roles in tech.'
    },
    {
      icon: BookOpen,
      title: 'Expert Resources',
      description: 'Access comprehensive guides, workshops, and materials created by industry professionals.'
    },
    {
      icon: Award,
      title: 'Career Support',
      description: 'Get guidance on job applications, interviews, and career progression in tech.'
    }
  ];

  const pathways = [
    {
      title: 'Product Management',
      description: 'Learn to drive product strategy and development',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop'
    },
    {
      title: 'Product Marketing',
      description: 'Master go-to-market strategies and product positioning',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
    },
    {
      title: 'UX Research',
      description: 'Understand user needs and create better products',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop'
    }
  ];

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <div className="relative bg-purple-900 text-white overflow-hidden pt-10 md:pt-24 pb-6 md:pb-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-10">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Path to a Tech Career Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Transform your career with our comprehensive platform designed for minorities transitioning into non-technical tech roles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-500 bg-purple-500 text-white rounded-full hover:bg-purple-600 hover:border-purple-600 transition-colors"
              >
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your transition into tech</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center" data-aos="fade-up">
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Career Pathways Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Career Path</h2>
            <p className="text-xl text-gray-600">Explore our specialized tracks for different tech roles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-aos="slide-right">
                <img
                  src={pathway.image}
                  alt={pathway.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pathway.title}</h3>
                  <p className="text-gray-600 mb-4">{pathway.description}</p>
                  <Link
                    to="/resources"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div data-aos="fade-up">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-purple-200">Community Members</div>
            </div>
            <div data-aos="fade-up">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
            <div data-aos="fade-up">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-purple-200">Countries Reached</div>
            </div>
            <div data-aos="fade-up">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-200">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of ambitious professionals making the transition into tech. Your future starts here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/resources"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Browse Resources <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
            >
              Join Community <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;