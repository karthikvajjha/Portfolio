import { personalData } from "@/data/portfolioData";

const PersonalSection = () => {
  return (
    <section id="personal" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-medium text-foreground mb-12 text-center">
          Personal
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-8">
            {personalData.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {personalData.interests.map((interest) => (
              <span
                key={interest}
                className="text-sm px-4 py-2 bg-accent text-accent-foreground rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">
            {personalData.approach}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
