import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}