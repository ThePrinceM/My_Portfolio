import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'JavaScript', level: 88, category: 'Languages' },
  { name: 'Java', level: 82, category: 'Languages' },
  { name: 'C/C++', level: 80, category: 'Languages' },
  { name: 'R', level: 70, category: 'Languages' },
  
  // Frameworks & Libraries
  { name: 'React', level: 88, category: 'Frameworks' },
  { name: 'Node.js', level: 85, category: 'Frameworks' },
  { name: 'Flask', level: 80, category: 'Frameworks' },
  { name: 'Bootstrap', level: 82, category: 'Frameworks' },
  { name: 'Pandas/NumPy', level: 88, category: 'Frameworks' },
  { name: 'Scikit-learn', level: 85, category: 'Frameworks' },
  { name: 'PyTorch', level: 75, category: 'Frameworks' },
  
  // Database & Tools
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'MySQL', level: 82, category: 'Database' },
  { name: 'Git/GitHub', level: 88, category: 'Tools' },
  { name: 'REST APIs', level: 85, category: 'Tools' },
];

const categories = ['All', 'Languages', 'Frameworks', 'Database', 'Tools'];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_20px_hsl(185_85%_55%/0.3)]'
                  : 'neo-card text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="neo-card-hover p-5 rounded-2xl group"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                <span className="text-primary text-xs font-bold px-2 py-1 rounded-lg bg-primary/10">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_hsl(185_85%_55%/0.5)]"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Courses */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-foreground mb-6">Relevant Coursework</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Machine Learning', 'DBMS', 'Computer Networks', 'Operating Systems', 'OOPs', 'Web Development'].map((course) => (
              <span 
                key={course}
                className="px-4 py-2 rounded-xl text-sm neo-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
