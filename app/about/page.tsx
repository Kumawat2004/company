import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'About Us - Future Global IT Solution',
  description: 'Learn about Future Global IT Solution - our mission, vision, team, and commitment to building reliable digital solutions.',
};

export default function About() {
  const leadership = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      experience: '15+ years',
      expertise: 'Enterprise Architecture, Strategy',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO',
      experience: '12+ years',
      expertise: 'Full-Stack Development, DevOps',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Design',
      experience: '10+ years',
      expertise: 'UI/UX Design, Product Strategy',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Sneha Gupta',
      position: 'Head of AI/ML',
      experience: '8+ years',
      expertise: 'Machine Learning, Data Science',
      image: '/api/placeholder/150/150'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Company Founded in Mumbai' },
    { year: '2020', event: 'First 10 Clients Onboarded' },
    { year: '2021', event: 'Expanded to 20+ Team Members' },
    { year: '2022', event: 'Launched AI/ML Division' },
    { year: '2023', event: '50+ Projects Delivered' },
    { year: '2024', event: 'International Client Base' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions'
    },
    {
      title: 'Quality',
      description: 'Every line of code is crafted with precision and tested thoroughly'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest reporting throughout the project lifecycle'
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, not just a vendor'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Microsoft Azure Certified',
    'Google Cloud Professional',
    'Certified Scrum Master',
    'ISO 27001 Compliant',
    'GDPR Compliant'
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto">
          <Breadcrumbs items={[{ name: 'About Us' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Future Global IT</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building reliable digital solutions that empower businesses to thrive in the digital age
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative, scalable, and secure software solutions that drive growth and digital transformation. We believe in creating technology that makes a meaningful impact on our clients&apos; success.
              </p>
            </Card>
            
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading technology partner for businesses worldwide, known for our expertise, innovation, and commitment to delivering exceptional digital experiences that shape the future of industries.
              </p>
            </Card>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{leader.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{leader.experience}</p>
                  <p className="text-sm text-gray-500">{leader.expertise}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mx-6"></div>
                    <div className="flex-grow">
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications & Partnerships</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Culture Highlights */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-600">20+ skilled developers, designers, and consultants with deep industry expertise</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Agile Approach</h3>
                <p className="text-gray-600">Flexible, iterative development process with regular client feedback and updates</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and maintenance for all our solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}