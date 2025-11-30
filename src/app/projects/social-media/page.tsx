import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SocialMediaApp() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          Social Media App
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            A full-stack social media application with real-time messaging, post sharing, 
            and user authentication. Features mobile-responsive design with PWA capabilities 
            for a native app-like experience across all devices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• Real-time messaging</li>
              <li>• Post creation & sharing</li>
              <li>• User authentication</li>
              <li>• Like & comment system</li>
              <li>• Follow/unfollow users</li>
              <li>• PWA capabilities</li>
              <li>• Push notifications</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'Firebase', 'Node.js', 'Express', 'Socket.io'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="#" 
            className="flex items-center bg-slate-600 px-6 py-3 rounded-lg cursor-not-allowed opacity-60"
            title="Project in development - code coming soon"
          >
            <Github className="mr-2" size={20} />
            Code Coming Soon
          </a>
          <a 
            href="#" 
            className="flex items-center bg-slate-600 px-6 py-3 rounded-lg cursor-not-allowed opacity-60"
            title="Demo coming soon - currently in development"
          >
            <ExternalLink className="mr-2" size={20} />
            Live Demo (Coming Soon)
          </a>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Project Overview</h3>
          <div className="space-y-4 text-slate-200">
            <p>
              This social media application demonstrates full-stack development capabilities 
              with real-time features and modern mobile-first design. Built with React Native 
              for cross-platform compatibility, the app provides a seamless experience on 
              both iOS and Android devices.
            </p>
            <p>
              The backend leverages Node.js and Express for robust API endpoints, while 
              Firebase provides authentication, real-time database functionality, and cloud 
              storage. Socket.io enables instant messaging and live updates, creating an 
              engaging social experience.
            </p>
            <p>
              Progressive Web App features ensure the application can be installed on devices 
              and work offline. Push notifications keep users engaged with real-time updates 
              about interactions, messages, and social activities. The responsive design 
              adapts perfectly to all screen sizes and orientations.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
