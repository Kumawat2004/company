import Link from 'next/link';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Blog - Future Global IT Solution',
  description: 'Stay updated with the latest insights on software development, technology trends, and industry best practices.',
};

export default function Blog() {
  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Engineering', count: 12, active: false },
    { name: 'Product', count: 8, active: false },
    { name: 'Culture', count: 4, active: false }
  ];

  const featuredPost = {
    id: 'future-of-ai-development',
    title: 'The Future of AI in Software Development: Trends and Predictions for 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing software development processes, from code generation to automated testing and deployment.',
    author: 'Priya Sharma',
    date: '2024-01-15',
    category: 'Engineering',
    readTime: '8 min read',
    image: '/api/placeholder/600/300',
    featured: true
  };

  const blogPosts = [
    {
      id: 'react-performance-optimization',
      title: 'React Performance Optimization: Best Practices for 2024',
      excerpt: 'Learn advanced techniques to optimize React applications for better performance and user experience.',
      author: 'Amit Patel',
      date: '2024-01-12',
      category: 'Engineering',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 'microservices-architecture-guide',
      title: 'Building Scalable Microservices: A Complete Guide',
      excerpt: 'Comprehensive guide to designing and implementing microservices architecture for enterprise applications.',
      author: 'Rajesh Kumar',
      date: '2024-01-10',
      category: 'Engineering',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 'ux-design-principles',
      title: '10 Essential UX Design Principles Every Developer Should Know',
      excerpt: 'Bridge the gap between development and design with these fundamental UX principles.',
      author: 'Sneha Gupta',
      date: '2024-01-08',
      category: 'Product',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 'remote-team-culture',
      title: 'Building a Strong Remote Team Culture in Tech Companies',
      excerpt: 'How we maintain team cohesion and productivity while working remotely across different time zones.',
      author: 'HR Team',
      date: '2024-01-05',
      category: 'Culture',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices for Modern Applications',
      excerpt: 'Essential security measures to protect your cloud-based applications and data.',
      author: 'DevOps Team',
      date: '2024-01-03',
      category: 'Engineering',
      readTime: '9 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 'product-management-agile',
      title: 'Agile Product Management: From Concept to Launch',
      excerpt: 'A practical approach to managing product development in an agile environment.',
      author: 'Product Team',
      date: '2024-01-01',
      category: 'Product',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto">
          <Breadcrumbs items={[{ name: 'Blog' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights on software development, technology trends, and industry best practices
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-100 h-64 lg:h-full flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary">Featured</Badge>
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Full Article
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="h-full flex flex-col">
                <div className="bg-gray-100 h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Post Image</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" size="sm">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 flex-grow">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Posts
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="text-center bg-blue-50">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to get the latest tech insights and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="btn-primary">
                  Subscribe
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}