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
          Blog CMS
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            A modern, minimalistic Blog Content Management System built with Django REST Framework 
            and React + TypeScript. Features a clean black & white design, user authentication, 
            account management, and comprehensive blog management capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• Minimalistic black & white design</li>
              <li>• User authentication & registration</li>
              <li>• Account management (profile, password, delete)</li>
              <li>• Markdown support for blog posts</li>
              <li>• Categories & tags system</li>
              <li>• Search functionality</li>
              <li>• Admin dashboard</li>
              <li>• SEO optimization</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Django', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'JWT'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/jalalseidi/blog-cms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="mr-2" size={20} />
            View Code on GitHub
          </a>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Project Overview</h3>
          <div className="space-y-4 text-slate-200">
            <p>
              This Blog CMS features a modern, minimalistic black and white design that puts 
              content first. Built with Django REST Framework for the backend and React + TypeScript 
              for the frontend, it provides a robust and type-safe blogging platform.
            </p>
            <p>
              The system includes complete user management with authentication, registration, profile 
              editing, password changes, and account deletion. The admin dashboard allows for easy 
              post creation and management with markdown support, category and tag organization, and 
              SEO optimization through meta tags and slugs.
            </p>
            <p>
              The frontend is built with Vite for fast development and features a clean, responsive 
              interface styled with Tailwind CSS. Users can search through posts, browse by categories 
              and tags, and enjoy smooth navigation throughout the application. The project demonstrates 
              full-stack development skills with JWT authentication, RESTful API design, and modern 
              React patterns.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
