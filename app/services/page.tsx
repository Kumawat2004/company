import Link from 'next/link';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CloudIcon,
  BugAntIcon,
  CpuChipIcon,
  LinkIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Services - Future Global IT Solution',
  description: 'Comprehensive software development services including web development, mobile apps, UI/UX design, cloud solutions, and AI/ML integration.',
};

export default function Services() {
  const services = [
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-blue-600" />,
      title: 'Web & Mobile Development',
      description: 'Full-stack development with React, Next.js, Node.js, and React Native for cross-platform solutions.',
      technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'TypeScript'],
      href: '/services/web-mobile'
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8 text-blue-600" />,
      title: 'UI/UX Design',
      description: 'User-centered design systems, prototyping, and intuitive interfaces that drive engagement.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
      href: '/services/ui-ux'
    },
    {
      icon: <CloudIcon className="w-8 h-8 text-blue-600" />,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure on AWS, Azure with CI/CD pipelines and Kubernetes orchestration.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      href: '/services/cloud-devops'
    },
    {
      icon: <BugAntIcon className="w-8 h-8 text-blue-600" />,
      title: 'QA & Automation',
      description: 'Comprehensive testing strategies with automated testing using Cypress and Playwright.',
      technologies: ['Cypress', 'Playwright', 'Jest', 'Selenium', 'API Testing'],
      href: '/services/qa-automation'
    },
    {
      icon: <CpuChipIcon className="w-8 h-8 text-blue-600" />,
      title: 'AI/ML Solutions',
      description: 'Intelligent solutions with Natural Language Processing, Computer Vision, and RAG implementations.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Langchain'],
      href: '/services/ai-ml'
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-blue-600" />,
      title: 'API & Integrations',
      description: 'Seamless integrations with REST APIs, GraphQL, payment gateways, and CRM systems.',
      technologies: ['REST API', 'GraphQL', 'Stripe', 'Salesforce', 'Webhooks'],
      href: '/services/api-integrations'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto">
          <Breadcrumbs items={[{ name: 'Services' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions" className="btn-primary text-lg px-8 py-4">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}