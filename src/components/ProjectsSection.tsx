import { ExternalLink, Github, FileText, Utensils, Youtube, Sun, Plane, Users } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  gradient: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PDF Analyser',
    description: 'Automated extraction and consolidation of editorial content from multiple newspaper PDFs, reducing 90% manual intervention using programmatic PDF processing.',
    icon: FileText,
    technologies: ['Python', 'PDF Processing', 'Automation'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    githubUrl: 'https://github.com/ThePrinceM',
  },
  {
    id: 2,
    title: 'Food Delivery Website',
    description: 'Full-stack food ordering platform with search, cart, checkout features and order tracking. Built with React, MongoDB, and Node.js.',
    icon: Utensils,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'from-orange-500/20 to-red-500/20',
    githubUrl: 'https://github.com/ThePrinceM',
  },
  {
    id: 3,
    title: 'YouTube Comment Analyzer',
    description: 'Sentiment analysis tool using YouTube API to analyze video comments with 92% accuracy. Visualizes sentiment distribution for clear insights.',
    icon: Youtube,
    technologies: ['Python', 'YouTube API', 'NLP', 'Matplotlib'],
    gradient: 'from-red-500/20 to-pink-500/20',
    githubUrl: 'https://github.com/ThePrinceM',
  },
  {
    id: 4,
    title: 'Solar Potential Calculator',
    description: 'End-to-end Solar PV tool with geospatial inputs, vendor price comparison, and financial modeling to accelerate customer decision-making.',
    icon: Sun,
    technologies: ['Flask', 'REST API', 'JavaScript', 'GeoData'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
    githubUrl: 'https://github.com/ThePrinceM',
  },
  {
    id: 5,
    title: 'AI Itinerary Planner',
    description: 'AI agent for hassle-free travel planning using Google Gemini API, LangChain, and generative AI for personalized trip recommendations.',
    icon: Plane,
    technologies: ['Python', 'LangChain', 'Gemini API', 'AI'],
    gradient: 'from-purple-500/20 to-indigo-500/20',
    githubUrl: 'https://github.com/ThePrinceM',
  },
  {
    id: 6,
    title: 'Customer Segmentation ML',
    description: 'ML-powered customer segmentation using K-Means clustering and RFM analysis on 500K+ retail transactions for targeted marketing strategies.',
    icon: Users,
    technologies: ['Python', 'Scikit-learn', 'K-Means', 'Pandas'],
    gradient: 'from-green-500/20 to-teal-500/20',
    githubUrl: 'https://github.com/ThePrinceM',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing my development & ML expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group neo-card-hover rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                <project.icon className="w-12 h-12 text-foreground/80 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Floating dots decoration */}
                <div className="absolute top-3 right-3 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <div className="w-2 h-2 rounded-full bg-foreground/30" />
                  <div className="w-2 h-2 rounded-full bg-foreground/40" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg bg-primary/5 text-primary/80 border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 neo-card border-primary/20 hover:bg-primary/10 hover:border-primary/40 text-foreground text-xs"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5 mr-1.5" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
