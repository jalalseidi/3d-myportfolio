import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EcommercePlatform() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          E-Commerce Platform
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            A complete e-commerce solution featuring product management, shopping cart, 
            secure payment processing, and admin dashboard. Built with Next.js and 
            integrated with Stripe for seamless transactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• Product catalog & search</li>
              <li>• Shopping cart functionality</li>
              <li>• Secure payment processing</li>
              <li>• User authentication</li>
              <li>• Admin dashboard</li>
              <li>• Order management</li>
              <li>• Responsive design</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/yourusername/ecommerce-platform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="mr-2" size={20} />
            View Code
          </a>
          <a 
            href="/projects/ecommerce/demo" 
            className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            <ExternalLink className="mr-2" size={20} />
            Live Demo
          </a>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Project Overview</h3>
          <div className="space-y-4 text-slate-200">
            <p>
              This full-featured e-commerce platform demonstrates modern web development 
              practices and secure payment integration. The application provides both 
              customer-facing features and admin management capabilities.
            </p>
            <p>
              Built with Next.js for optimal performance and SEO, the platform integrates 
              with Stripe for secure payment processing and includes a comprehensive admin 
              dashboard for managing products, orders, and customer data.
            </p>
            <p>
              The responsive design ensures a seamless shopping experience across all 
              devices, while the admin interface provides powerful tools for business 
              management and analytics.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
