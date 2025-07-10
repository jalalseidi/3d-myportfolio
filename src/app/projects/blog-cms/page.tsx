import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogCMS() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          Personal Blog CMS
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            A content management system for personal blogging with markdown support, 
            SEO optimization, and admin panel. Built with Python Django and React 
            for a powerful and flexible blogging experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• Markdown content creation</li>
              <li>• SEO optimization</li>
              <li>• Admin dashboard</li>
              <li>• Post scheduling</li>
              <li>• Comment system</li>
              <li>• Tag management</li>
              <li>• Responsive design</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'React', 'PostgreSQL', 'Markdown'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/yourusername/blog-cms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="mr-2" size={20} />
            View Code
          </a>
          <a 
            href="/projects/blog-cms/demo" 
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
              This personal blog CMS combines the power of Django's backend capabilities 
              with React's dynamic frontend to create a comprehensive blogging platform. 
              The system supports markdown for easy content creation and includes advanced 
              SEO features.
            </p>
            <p>
              The admin panel provides intuitive content management tools, allowing for 
              easy post creation, editing, and scheduling. The system includes a comment 
              system, tag management, and analytics integration for comprehensive blog 
              management.
            </p>
            <p>
              Built with performance and scalability in mind, the CMS can handle high 
              traffic loads while maintaining fast page load times and excellent SEO 
              performance.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
