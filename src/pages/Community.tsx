import {
  Users,
  MessageSquare,
  Calendar,
  Award,
  ArrowRight,
  Globe2,
  UserPlus,
  BookOpen,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

function Community() {
  const upcomingEvents = [
    {
      title: "Product Marketing Workshop: Go-to-Market Strategy",
      date: "March 25, 2024",
      time: "2:00 PM WAT",
      speaker: "Mayowa Olawale",
      type: "Workshop",
    },
    {
      title: "Tech Marketing Masterclass",
      date: "March 28, 2024",
      time: "3:00 PM WAT",
      speaker: "Ifeoluwa Falana",
      type: "Masterclass",
    },
    {
      title: "Career Transition Stories",
      date: "April 1, 2024",
      time: "4:00 PM WAT",
      speaker: "Community Members",
      type: "Panel Discussion",
    },
  ];

  const successStories = [
    {
      name: "Chioma Okonkwo",
      role: "Product Marketing Manager at Microsoft",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      story:
        "From banking to tech in 6 months through TechTransit's mentorship program.",
    },
    {
      name: "David Adebayo",
      role: "Product Manager at Paystack",
      image:
        "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop",
      story:
        "Transitioned from teaching to product management with TechTransit's guidance.",
    },
    {
      name: "Amina Ibrahim",
      role: "UX Researcher at Paycrest",
      image:
        "https://img.freepik.com/premium-photo/portrait-smiling-young-woman_1048944-13115821.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      story:
        "Found her passion in UX research through TechTransit's community support.",
    },
  ];

  const communityFeatures = [
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description:
        "Engage in meaningful conversations about tech careers, industry trends, and personal growth.",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description:
        "Join our weekly workshops, webinars, and networking sessions with industry experts.",
    },
    {
      icon: UserPlus,
      title: "Mentorship Program",
      description:
        "Get paired with experienced professionals who guide your transition into tech.",
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description:
        "Access our curated collection of learning materials, templates, and guides.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-24 pb-6 md:pb-24">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Thriving Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with like-minded individuals, share experiences, and grow
              together in your tech journey.
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-2">
              <Link to="/register" className="flex items-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                  Join Community
                </button>
              </Link>

              <a href="#features" className="flex items-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="bg-white py-20" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed in your tech journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
                  data-aos="fade-right"
                >
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join our interactive sessions and learn from the best
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">
                  {event.date} at {event.time}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Hosted by {event.speaker}
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 flex items-center">
                  Register Now <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Meet our community members who successfully transitioned into tech
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-8"
                data-aos="fade-up"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {story.name}
                </h3>
                <p className="text-purple-600 text-center mb-4">{story.role}</p>
                <p className="text-gray-600 text-center">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up">
              <Users className="h-8 w-8 mx-auto mb-4" />
              <p className="text-3xl font-bold mb-2">5,000+</p>
              <p className="opacity-90">Active Members</p>
            </div>
            <div className="text-center" data-aos="fade-up">
              <Globe2 className="h-8 w-8 mx-auto mb-4" />
              <p className="text-3xl font-bold mb-2">15+</p>
              <p className="opacity-90">Countries</p>
            </div>
            <div className="text-center" data-aos="fade-up">
              <Target className="h-8 w-8 mx-auto mb-4" />
              <p className="text-3xl font-bold mb-2">85%</p>
              <p className="opacity-90">Success Rate</p>
            </div>
            <div className="text-center" data-aos="fade-up">
              <Award className="h-8 w-8 mx-auto mb-4" />
              <p className="text-3xl font-bold mb-2">1,000+</p>
              <p className="opacity-90">Career Transitions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className="bg-gray-50 py-20">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards your tech career. Join our community of
            ambitious professionals making the transition into tech.
          </p>
          <Link to="/register" className="flex justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Community;
