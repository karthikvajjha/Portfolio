import { achievementsData } from "@/data/portfolioData";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-medium text-foreground mb-12 text-center">
          Achievements
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {achievementsData.map((achievement) => (
              <div
                key={achievement.id}
                className="flex gap-6 items-start"
              >
                <span className="text-sm font-medium text-primary min-w-[4rem]">
                  {achievement.year}
                </span>
                <div>
                  <h3 className="text-base font-medium text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
