import Link from 'next/link';
import Card from '@/components/Card';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  CreditCardIcon,
  HeartIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Solutions - Future Global IT Solution',
  description: 'Industry-specific software solutions for FinTech, HealthTech, EdTech, and eCommerce sectors.',
};

export default function Solutions() {
  const industries = [
    {
      icon: <CreditCardIcon className="w-12 h-12 text-blue-600" />,
      title: 'FinTech Solutions',
      description: 'Secure payment systems, digital wallets, and financial management platforms with regulatory compliance.',
      features: ['Payment Processing', 'KYC/AML Compliance', 'Digital Banking', 'Blockchain Integration'],
      href: '/solutions/fintech'
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-blue-600" />,
      title: 'HealthTech Solutions',
      description: 'HIPAA-compliant healthcare platforms, telemedicine apps, and patient management systems.',
      features: ['Telemedicine', 'EHR Systems', 'Patient Portals', 'Medical IoT'],
      href: '/solutions/healthtech'
    },
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-blue-600" />,
      title: 'EdTech Solutions',
      description: 'Learning management systems, online course platforms, and educational mobile applications.',
      features: ['LMS Platforms', 'Virtual Classrooms', 'Assessment Tools', 'Student Analytics'],
      href: '/solutions/edtech'
    },
    {
      icon: <ShoppingCartIcon className="w-12 h-12 text-blue-600" />,
      title: 'eCommerce Solutions',
      description: 'Scalable online stores, marketplace platforms, and inventory management systems.',
      features: ['Multi-vendor Platforms', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard'],
      href: '/solutions/ecommerce'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto">
          <Breadcrumbs items={[{ name: 'Solutions' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored software solutions designed for specific industry needs and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full flex flex-col">
                <div className="flex items-center mb-6">
                  {industry.icon}
                  <h3 className="text-2xl font-semibold ml-4">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {industry.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={industry.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-600 mb-6">
                We create bespoke software solutions tailored to your unique business requirements
              </p>
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}