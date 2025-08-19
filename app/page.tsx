import Link from 'next/link';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { 
  CodeBracketIcon, 
  CloudIcon, 
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function Home() {
  const valueProps = [
    {
      icon: <CodeBracketIcon className="w-8 h-8 text-blue-600" />,
      title: 'Custom Software & Web Apps',
      description: 'Scalable solutions built with modern tech stacks like React, Next.js, and Node.js'
    },
    {
      icon: <CloudIcon className="w-8 h-8 text-blue-600" />,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure deployment with CI/CD pipelines and Kubernetes orchestration'
    },
    {
      icon: <CpuChipIcon className="w-8 h-8 text-blue-600" />,
      title: 'AI/ML Integrations',
      description: 'Intelligent solutions with NLP, Computer Vision, and RAG implementations'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '20+', label: 'Expert Developers' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const clientLogos = [
    'TechCorp', 'InnovateLabs', 'DataFlow', 'CloudFirst', 'NextGen', 'SmartSys'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              हम बनाते हैं <span className="text-green-400">scalable</span>, <span className="text-green-400">secure</span> और <span className="text-green-400">future-ready</span> software solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Building Reliable Digital Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get a Quote
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Future Global IT</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions that drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-8">Trusted by Leading Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-lg p-6 h-20 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Need a team fast? Let's talk.
              </h2>
              <p className="text-gray-300">
                Get your project started with our expert development team
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Start Conversation
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}