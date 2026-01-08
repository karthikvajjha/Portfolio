import { experienceData } from "@/data/portfolioData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-medium text-foreground mb-12 text-center">
          Experience
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-12">
            {experienceData.map((experience) => (
              <div key={experience.id} className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <div className="mb-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-primary">
                    {experience.company}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {experience.duration}
                  </p>
                </div>
                <ul className="space-y-2 mt-4">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
