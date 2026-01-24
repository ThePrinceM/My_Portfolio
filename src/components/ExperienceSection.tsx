import { Briefcase, Calendar, Award } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'activity';
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Executive Member',
    company: 'E-Cell RCOEM',
    period: 'Jul 2024 - Present',
    description: 'Organizing successful entrepreneurship events that hosted business owners and industry mentors. Coordinating workshops and networking sessions to foster startup culture among students.',
    technologies: ['Event Management', 'Leadership', 'Networking'],
    type: 'activity',
  },
  {
    id: 2,
    role: 'NCC Cadet',
    company: 'National Cadet Corps',
    period: 'Aug 2024 - Present',
    description: "Serving in India's largest governmental youth organization under Ministry of Defence. Attended various camps, performed leadership roles, and excelled in DBBL rifle firing.",
    technologies: ['Leadership', 'Discipline', 'Rifle Shooting'],
    type: 'activity',
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'Personal Projects',
    period: '2022 - Present',
    description: 'Building production-ready applications including food delivery platforms, ML-powered analytics tools, and AI-driven solutions. Working with MERN stack and Python ecosystem.',
    technologies: ['React', 'Node.js', 'Python', 'MongoDB'],
    type: 'work',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey and positions of responsibility
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative mb-8 last:mb-0"
            >
              {/* Connecting line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/50 to-primary/10" />
              )}

              {/* Content Card */}
              <div className="neo-card-hover p-6 rounded-2xl ml-0 relative">
                {/* Icon badge */}
                <div className="absolute -left-0 top-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/20">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-5 h-5 text-primary" />
                  ) : (
                    <Award className="w-5 h-5 text-secondary" />
                  )}
                </div>

                <div className="ml-16">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${
                      exp.type === 'work' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      {exp.company}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{exp.role}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-lg bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
