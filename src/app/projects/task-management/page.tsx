import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TaskManagementApp() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          Task Management App
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            A comprehensive task management application that helps teams organize, track, 
            and complete their projects efficiently. Built with modern web technologies 
            for optimal performance and user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• Create, edit, and delete tasks</li>
              <li>• Drag & drop task organization</li>
              <li>• Priority levels and due dates</li>
              <li>• Real-time updates</li>
              <li>• User authentication</li>
              <li>• Progress tracking</li>
              <li>• Responsive design</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'Lucide Icons'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/yourusername/task-management" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="mr-2" size={20} />
            View Code
          </a>
          <a 
            href="/projects/task-management/demo" 
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
              This task management application was built to solve the common problem of 
              project organization in small to medium teams. The application features 
              a clean, intuitive interface that makes task management effortless.
            </p>
            <p>
              The application uses React hooks for state management and localStorage for 
              data persistence, ensuring that user data is maintained across browser sessions. 
              The responsive design ensures optimal viewing on all devices.
            </p>
            <p>
              Future enhancements planned include team collaboration features, 
              cloud synchronization, and advanced reporting capabilities.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
