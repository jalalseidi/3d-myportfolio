import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CodeChallengeGenerator() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          Code Challenge Generator
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            An intelligent AI-powered coding challenge generator built with FastAPI and machine learning. 
            This application creates personalized programming problems and solutions, helping developers 
            practice and improve their coding skills with tailored challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• AI-generated coding challenges</li>
              <li>• Multiple difficulty levels</li>
              <li>• Language-specific problems</li>
              <li>• Automated solution generation</li>
              <li>• Custom problem parameters</li>
              <li>• RESTful API endpoints</li>
              <li>• Real-time challenge creation</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'AI/ML', 'OpenAI API', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/jalalseidi/CodingGenerator-FastApi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="mr-2" size={20} />
            View Code
          </a>
          <a 
            href="#" 
            className="flex items-center bg-slate-600 px-6 py-3 rounded-lg cursor-not-allowed opacity-60"
            title="Demo coming soon - currently in deployment"
          >
            <ExternalLink className="mr-2" size={20} />
            Live Demo (Coming Soon)
          </a>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Project Overview</h3>
          <div className="space-y-4 text-slate-200">
            <p>
              The Code Challenge Generator leverages artificial intelligence to create unique, 
              personalized coding challenges for developers of all skill levels. Built with 
              FastAPI for high-performance API endpoints, the system integrates with OpenAI&apos;s 
              powerful language models to generate contextually relevant programming problems.
            </p>
            <p>
              The application features a sophisticated algorithm that analyzes user preferences, 
              skill level, and preferred programming languages to create tailored challenges. 
              Each generated problem includes detailed descriptions, input/output examples, 
              constraints, and automated solution verification. The FastAPI backend ensures 
              rapid response times and scalable architecture.
            </p>
            <p>
              PostgreSQL provides reliable data persistence for user profiles, challenge history, 
              and performance analytics. The system supports multiple programming languages 
              including Python, JavaScript, Java, and C++, with plans to expand to additional 
              languages. Advanced features include difficulty progression, topic-specific 
              challenges, and integration capabilities for coding bootcamps and educational platforms.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
