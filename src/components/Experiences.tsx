import * as SiIcons from "react-icons/si";
import { techStack } from "../../public/techStacks";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-[#040408] flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-16 font-geistSans text-white">
      <div className="flex flex-col justify-center items-center">
        <h3 className="animate-fadeInUp text-sm font-medium text-yellow-100 tracking-wider md:text-md lg:text-lg font-geistSans ">
          I CONSTANTLY TRY TO IMPROVE
        </h3>
        <h1 className="animate-fadeInUp text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          {" "}
          My Tech Stacks
        </h1>
        <div className="text-white py-12 px-6 max-w-5xl mx-auto">
          {techStack.map((category) => (
            <div key={category.category} className="mb-10">
              <div className="grid grid-cols-2  col-end-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">
                {category.skills.map((skill) => {
                  const IconComponent =
                    SiIcons[skill.iconImport as keyof typeof SiIcons];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center gap-3 p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg transition w-full max-w-[180px]"
                    >
                      {IconComponent && (
                        <IconComponent
                          style={{ color: skill.color }}
                          className="text-2xl"
                        />
                      )}
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
