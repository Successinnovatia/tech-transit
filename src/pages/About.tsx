import { Users2, Target, Heart, Globe2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const team = [
    {
      name: "Ifeoluwa Falana",
      role: "Founder & CEO",
      image: "/images/about-img-1.jpg",
      bio: "product manager with a passion for diversity",
    },
    {
      name: "Samson Ojo",
      role: "Head of Mentorship",
      image: "/images/about-img-2.jpg",
      bio: "Community builder with experience in tech education.",
    },
    {
      name: "Damilola Bello",
      role: "Program Director",
      image:
        "https://img.freepik.com/free-photo/beautiful-african-american-woman-with-crossed-arms_74855-4949.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      bio: "Education specialist focused on creating inclusive learning paths and mentorship programs.",
    },
  ];

  const stats = [
    { number: "2,500+", label: "Community Members", icon: Users2 },
    { number: "85%", label: "Success Rate", icon: Trophy },
    { number: "15+", label: "Countries Reached", icon: Globe2 },
    { number: "50+", label: "Industry Partners", icon: Heart },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pt-10 md:pt-24 pb-6 md:pb-24">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Minorities in Tech
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TechTransit is on a mission to bridge the diversity gap in tech by
              providing accessible education, mentorship, and community support
              for underrepresented groups.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that diversity drives innovation. Our platform is
                designed to break down barriers and create opportunities for
                minorities to thrive in non-technical tech roles.
              </p>
              <ul className="space-y-4">
                {[
                  "Provide world-class education tailored for non-technical roles",
                  "Build a supportive community of like-minded professionals",
                  "Connect talent with inclusive tech companies",
                  "Offer mentorship from industry leaders",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-purple-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-8 rounded-lg">
                <p className="text-2xl font-bold">1000+</p>
                <p className="text-sm">Careers Launched</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center" data-aos="fade-up">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Led by industry veterans passionate about creating a more
              inclusive tech industry
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-8 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-20">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and take the first step towards your career in
            tech
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="flex items-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Join Us
              </button>
            </Link>

            <Link to="/community" className="flex items-center">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
