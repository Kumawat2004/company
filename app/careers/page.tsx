import Link from 'next/link';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  MapPinIcon, 
  ClockIcon, 
  CurrencyRupeeIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Careers - Future Global IT Solution',
  description: 'Join our team of talented developers, designers, and innovators. Explore career opportunities at Future Global IT Solution.',
};

export default function Careers() {
  const benefits = [
    'Competitive salary and performance bonuses',
    'Flexible working hours and remote work options',
    'Health insurance and medical benefits',
    'Professional development and training programs',
    'Modern office with latest technology',
    'Team outings and company events',
    'Learning budget for courses and conferences',
    'Career growth and promotion opportunities'
  ];

  const hiringProcess = [
    {
      step: '1',
      title: 'Apply',
      description: 'Submit your application with resume and portfolio'
    },
    {
      step: '2',
      title: 'Task',
      description: 'Complete a practical coding/design task'
    },
    {
      step: '3',
      title: 'Interview',
      description: 'Technical and cultural fit interview'
    },
    {
      step: '4',
      title: 'Offer',
      description: 'Receive offer and join our team'
    }
  ];

  const openPositions = [
    {
      id: 'senior-fullstack-developer',
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹12-18 LPA',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      description: 'We are looking for an experienced full-stack developer to join our core development team.'
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      description: 'Join our design team to create beautiful and intuitive user experiences for our clients.'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹10-15 LPA',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      description: 'Help us build and maintain scalable infrastructure for our growing client base.'
    },
    {
      id: 'react-native-developer',
      title: 'React Native Developer',
      department: 'Mobile',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹8-12 LPA',
      skills: ['React Native', 'JavaScript', 'iOS', 'Android', 'Redux'],
      description: 'Develop cross-platform mobile applications using React Native for various industries.'
    },
    {
      id: 'ai-ml-engineer',
      title: 'AI/ML Engineer',
      department: 'AI/ML',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹12-18 LPA',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      description: 'Work on cutting-edge AI/ML projects and help clients integrate intelligent solutions.'
    },
    {
      id: 'qa-automation-engineer',
      title: 'QA Automation Engineer',
      department: 'Quality Assurance',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-10 LPA',
      skills: ['Cypress', 'Playwright', 'Jest', 'API Testing', 'Selenium'],
      description: 'Ensure quality and reliability of our software products through comprehensive testing.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto">
          <Breadcrumbs items={[{ name: 'Careers' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a dynamic team that&apos;s shaping the future of technology. We&apos;re always looking for talented individuals who are passionate about innovation.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-gray-600">Work with cutting-edge technologies and contribute to innovative solutions</p>
              </Card>
              <Card className="text-center">
                <h3 className="text-xl font-semibold mb-3">Growth Focused</h3>
                <p className="text-gray-600">Continuous learning opportunities and clear career progression paths</p>
              </Card>
              <Card className="text-center">
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible hours, remote work options, and supportive team culture</p>
              </Card>
              <Card className="text-center">
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-gray-600">Your work directly impacts client success and business growth</p>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perks & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {hiringProcess.map((process, index) => (
                <Card key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge variant="primary">{job.department}</Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPinIcon className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <ClockIcon className="w-4 h-4 mr-2" />
                          {job.experience}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <CurrencyRupeeIcon className="w-4 h-4 mr-2" />
                          {job.salary}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" size="sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Link 
                        href={`/careers/${job.id}`}
                        className="btn-primary inline-flex items-center"
                      >
                        Apply Now
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Don&apos;t see a perfect match?</h2>
              <p className="text-gray-600 mb-6">
                We&apos;re always interested in meeting talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Link href="/contact" className="btn-primary">
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}