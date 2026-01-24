import { User, Code, Lightbulb, Target, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Code, label: 'Full Stack', description: 'MERN Stack & Python' },
    { icon: Lightbulb, label: 'ML/DS', description: 'Data Science expertise' },
    { icon: Target, label: 'Goal-Oriented', description: 'Delivering results' },
    { icon: User, label: 'NCC Cadet', description: 'Leadership & discipline' },
  ];

  const education = [
    { degree: 'B.Tech CSE (Data Science)', school: 'RCOEM, Nagpur', year: '2025', grade: 'CGPA: 8.3' },
    { degree: 'HSC', school: 'Hansraj Morarji Jr. College, Mumbai', year: '2021', grade: '88%' },
    { degree: 'SSC', school: "St. Xavier's High School, Mumbai", year: '2019', grade: '87%' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Bio + Education */}
          <div className="space-y-6">
            <div className="neo-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Prince Maurya</h3>
                  <p className="text-primary text-sm">Full Stack Developer & Data Science</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Full Stack Developer specializing in the MERN stack with strong foundations in 
                Machine Learning and Data Science. Currently completing my B.Tech in Computer Science 
                (Data Science) from RCOEM with a CGPA of 8.3.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My expertise spans from building scalable web applications to implementing ML solutions 
                for real-world problems. I enjoy transforming complex data into actionable insights 
                and creating seamless user experiences.
              </p>
            </div>

            {/* Education */}
            <div className="neo-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Education</h4>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="relative pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <h5 className="font-medium text-foreground text-sm">{edu.degree}</h5>
                    <p className="text-muted-foreground text-xs">{edu.school}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-primary">{edu.year}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-secondary">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlights + Extra */}
          <div className="space-y-6">
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="neo-card-hover p-5 rounded-2xl flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Extracurricular */}
            <div className="neo-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Leadership & Activities</h4>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                  <h5 className="font-medium text-foreground text-sm">National Cadet Corps (NCC)</h5>
                  <p className="text-muted-foreground text-xs mt-1">
                    Cadet at India's largest youth organization under Ministry of Defence. 
                    Experienced in rifle shooting and performed leadership roles at various camps.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/10">
                  <h5 className="font-medium text-foreground text-sm">E-Cell RCOEM - Executive Member</h5>
                  <p className="text-muted-foreground text-xs mt-1">
                    Organized successful events hosting business owners and industry mentors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
