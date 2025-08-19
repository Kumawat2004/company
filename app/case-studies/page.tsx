import Link from 'next/link';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Case Studies - Future Global IT Solution',
  description: 'Success stories and case studies showcasing our software development projects and client achievements.',
};

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'fintech-payment-platform',
      title: 'FinTech Payment Platform',
      client: 'PaySecure Inc.',
      industry: 'FinTech',
      description: 'Built a secure, scalable payment processing platform handling 10M+ transactions monthly.',
      metrics: [
        { label: 'Transaction Volume', value: '10M+/month' },
        { label: 'Processing Speed', value: '< 2 seconds' },
        { label: 'Uptime', value: '99.9%' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'healthcare-telemedicine',
      title: 'Telemedicine Platform',
      client: 'HealthConnect',
      industry: 'HealthTech',
      description: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers.',
      metrics: [
        { label: 'Active Users', value: '50K+' },
        { label: 'Consultations', value: '100K+' },
        { label: 'User Satisfaction', value: '4.8/5' }
      ],
      technologies: ['React Native', 'Express.js', 'MongoDB', 'WebRTC', 'Azure'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'ecommerce-marketplace',
      title: 'Multi-vendor Marketplace',
      client: 'ShopGlobal',
      industry: 'eCommerce',
      description: 'Comprehensive marketplace platform with vendor management and advanced analytics.',
      metrics: [
        { label: 'Vendors', value: '1000+' },
        { label: 'Products', value: '100K+' },
        { label: 'Revenue Growth', value: '+250%' }
      ],
      technologies: ['Next.js', 'Python', 'Redis', 'Docker', 'GCP'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'edtech-learning-platform',
      title: 'Online Learning Platform',
      client: 'EduTech Solutions',
      industry: 'EdTech',
      description: 'Interactive learning management system with AI-powered personalized learning paths.',
      metrics: [
        { label: 'Students', value: '25K+' },
        { label: 'Courses', value: '500+' },
        { label: 'Completion Rate', value: '85%' }
      ],
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'TensorFlow', 'AWS'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'logistics-tracking',
      title: 'Logistics Tracking System',
      client: 'LogiTrack Pro',
      industry: 'Logistics',
      description: 'Real-time package tracking and fleet management system with IoT integration.',
      metrics: [
        { label: 'Packages Tracked', value: '1M+' },
        { label: 'Fleet Size', value: '500+' },
        { label: 'Delivery Accuracy', value: '99.5%' }
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'IoT', 'Kubernetes'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'ai-chatbot-platform',
      title: 'AI Customer Support Platform',
      client: 'SupportAI',
      industry: 'AI/ML',
      description: 'Intelligent chatbot platform with natural language processing and sentiment analysis.',
      metrics: [
        { label: 'Queries Handled', value: '500K+/month' },
        { label: 'Resolution Rate', value: '90%' },
        { label: 'Response Time', value: '< 1 second' }
      ],
      technologies: ['React', 'Python', 'OpenAI', 'Langchain', 'Docker'],
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto">
          <Breadcrumbs items={[{ name: 'Case Studies' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with innovative software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="h-full flex flex-col">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="primary" size="sm">{study.industry}</Badge>
                  <span className="text-sm text-gray-500">{study.client}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {study.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Metrics:</h4>
                  <div className="space-y-1">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{metric.label}:</span>
                        <span className="font-medium text-blue-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {study.technologies.length > 3 && (
                      <Badge variant="secondary" size="sm">
                        +{study.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Link 
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Full Case Study
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help transform your business with innovative technology solutions
              </p>
              <Link href="/quote" className="btn-primary">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}