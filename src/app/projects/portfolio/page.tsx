import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function InteractivePortfolio() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          Interactive Portfolio
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            A modern, responsive portfolio website with 3D animations, smooth transitions, 
            and interactive elements. Built with Next.js and Three.js to showcase web 
            development skills in an engaging and visually stunning way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• 3D interactive animations</li>
              <li>• Smooth scroll effects</li>
              <li>• Technology logo displays</li>
              <li>• Project showcases</li>
              <li>• Contact forms</li>
              <li>• Mobile responsive</li>
              <li>• SEO optimized</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Three.js', 'GSAP', 'Tailwind CSS', 'Prismic CMS'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/yourusername/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="mr-2" size={20} />
            View Code
          </a>
          <a 
            href="/" 
            className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            <ExternalLink className="mr-2" size={20} />
            You're Here!
          </a>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Project Overview</h3>
          <div className="space-y-4 text-slate-200">
            <p>
              This interactive portfolio represents the culmination of modern web development 
              techniques and creative design. The site features immersive 3D animations 
              powered by Three.js and React Three Fiber, creating an engaging user experience 
              that sets it apart from traditional portfolios.
            </p>
            <p>
              Built with Next.js for optimal performance and SEO, the portfolio integrates 
              with Prismic CMS for easy content management. GSAP animations provide smooth 
              transitions and scroll effects, while Tailwind CSS ensures a consistent and 
              responsive design across all devices.
            </p>
            <p>
              The 3D elements include interactive technology logos that users can click and 
              manipulate, creating a playful yet professional presentation of technical skills. 
              The site serves as both a showcase of projects and a demonstration of advanced 
              frontend development capabilities.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
