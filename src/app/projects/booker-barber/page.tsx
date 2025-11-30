import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BookerBarber() {
  return (
    <Bounded>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        
        <Heading as="h1" size="xl" className="mb-8">
          BookerBarber
        </Heading>
        
        <div className="prose prose-xl prose-invert mb-8">
          <p>
            A comprehensive booking system designed specifically for barbershops, built with 
            the MERN stack. This application streamlines appointment scheduling for both 
            customers and barbers, providing an efficient solution for barbershop management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
            <ul className="space-y-2 text-slate-200">
              <li>• Customer appointment booking</li>
              <li>• Barber schedule management</li>
              <li>• User authentication & authorization</li>
              <li>• Real-time availability checking</li>
              <li>• Appointment notifications</li>
              <li>• Admin dashboard</li>
              <li>• Mobile-responsive design</li>
            </ul>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express', 'MongoDB', 'JWT'].map((tech) => (
                <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/jalalseidi/BarberBooker1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="mr-2" size={20} />
            View Code
          </a>
          <a 
            href="https://barber-booker1.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
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
              BookerBarber was developed to address the specific needs of barbershop 
              appointment management. The application provides a dual interface - one for 
              customers to easily book appointments and another for barbers to manage their 
              schedules and view upcoming bookings.
            </p>
            <p>
              Built with the MERN stack, the application features a React frontend with 
              a clean, intuitive interface, a Node.js/Express backend handling API requests 
              and business logic, and MongoDB for reliable data storage. JWT authentication 
              ensures secure user sessions and role-based access control.
            </p>
            <p>
              The system is currently deployed and operational, serving a real barbershop 
              with features including real-time availability checking, automated appointment 
              confirmations, and a comprehensive admin dashboard for business management. 
              The responsive design ensures seamless operation across all devices.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}

