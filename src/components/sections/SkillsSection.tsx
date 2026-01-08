import { skillsData } from "@/data/portfolioData";

const skillCategories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "databases" as const, label: "Databases" },
  { key: "tools" as const, label: "Tools" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-medium text-foreground mb-12 text-center">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.key}>
              <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
                {category.label}
              </h3>
              <ul className="space-y-2">
                {skillsData[category.key].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
