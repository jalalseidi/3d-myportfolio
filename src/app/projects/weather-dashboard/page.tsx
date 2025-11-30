import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WeatherDashboard() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          Weather Dashboard
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            An interactive weather dashboard that provides real-time weather information 
            with beautiful visualizations. Features location search, detailed weather 
            metrics, and a responsive design for optimal viewing on all devices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• Real-time weather data</li>
              <li>• City search functionality</li>
              <li>• Temperature & humidity display</li>
              <li>• Wind speed & pressure info</li>
              <li>• Visibility measurements</li>
              <li>• Beautiful gradient UI</li>
              <li>• Glassmorphism design</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3', 'Lucide Icons'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/jalalseidi/weather-dashboard" 
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
              The Weather Dashboard provides users with comprehensive weather information 
              in an intuitive and visually appealing interface. The application fetches 
              real-time data from the OpenWeather API and presents it in an easy-to-read format.
            </p>
            <p>
              Built with Vue.js, the application features a beautiful 
              gradient background with glassmorphism effects that create a modern, 
              professional appearance. Chart.js provides interactive data visualizations 
              for temperature and humidity trends. The responsive design ensures optimal 
              viewing across all device sizes.
            </p>
            <p>
              The search functionality allows users to quickly find weather information 
              for any city worldwide, making it a valuable tool for travelers, weather 
              enthusiasts, and anyone needing quick weather updates.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
