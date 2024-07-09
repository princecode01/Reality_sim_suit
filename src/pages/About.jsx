import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function About() {
  const cards = [
    {
      img: "/members/Amir.webp",
      name: "Amir Nassar",
      description: "Computer & Control systems Engineer-Frontend Developer",
      social: { linkedIn: "https://www.linkedin.com/in/amir-nassar-607486190/", github: "https://github.com/princecode01", gmail: "amirabdelgafar456@gmail.com" },
    },
    {
      img: "/members/Ahmed.webp",
      name: "Ahmed Abuzeid",
      description: "DevOps Engineer",
      social: { linkedIn: "https://www.linkedin.com/in/ahmed-abozid-80883121a/", github: "https://github.com/A7medAbozid", gmail: "engahmedabozid7@gmail.com" },
    },
    {
      img: "/members/Logo.webp",
      name: "Asmaa Amer",
      description: "Computer & Control systems Engineer",
      social: { linkedIn: "", github: "", gmail: "asmaaramadan9780@gmail.com" },
    },
    {
      img: "/members/Andrew.webp",
      name: "Andrew Samir",
      description: "Computer & Control systems Engineer-Frontend Developer",
      social: { linkedIn: "https://www.linkedin.com/in/andrewsamir2001", github: "https://github.com/andrew0samir", gmail: "andrewsamir317@gmail.com" },
    },
    {
      img: "/members/Logo.webp",
      name: "Mennatallah Alkholie",
      description: "Computer & Control systems Engineer",
      social: { linkedIn: "", github: "", gmail: "mennatallah.eng_5714@eng.kfs.edu.eg" },
    },
    {
      img: "/members/Magdy.webp",
      name: "Magdy Sayed",
      description: "Computer & control system Engineer Programming Instructor",
      social: { linkedIn: "https://www.linkedin.com/in/magdy-sayed-90ab60247", github: "https://github.com/magdysayed", gmail: "ms6774847@gmail.com" },
    },
    {
      img: "/members/Gallo.webp",
      name: "Omar Gallo",
      description: "Computer & control system Engineer-.Net Developer",
      social: { linkedIn: "https://www.linkedin.com/in/omar-mohamed-gallo-023187229/", github: "https://www.linkedin.com/in/omar-mohamed-gallo-023187229/", gmail: "omargallow33@gmail.com" },
    },
    {
      img: "/members/Ors.webp",
      name: "Omar Rashad",
      description: "I'm Omar Rashad , Passionate computer engineer and software developer with experience in multiple programming languages and platforms",
      social: { linkedIn: "https://www.linkedin.com/in/omar-rs/", github: "https://github.com/orsnaro", gmail: "omar1xd@gmail.com" },
    },
    {
      img: "/members/Logo.webp",
      name: "Hagar Tamer",
      description: "Computer & Control systems Engineer",
      social: { linkedIn: "", github: "", gmail: "hagartamer82@gmail.com" },
    },
    {
      img: "/members/Logo.webp",
      name: "Worof Ahmed",
      description: "Computer & Control systems Engineer",
      social: { linkedIn: "", github: "", gmail: "worof.eng_5760@eng.kfs.edu.eg" },
    },
  ];

  return (
    <div className="bg-light mx-auto py-9">
      <h1 className="text-2xl font-bold mb-6 text-center">Team Members</h1>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {cards.map((card) => (
          <div
            key={card.name}
            className="about-card relative basis-3/4 md:basis-1/3 lg:basis-1/4 overflow-hidden shadow transition-all ease-in-out duration-300"
          >
            <img
              src={card.img}
              alt={card.name}
              className="about-card-img aspect-square w-full overflow-hidden transition-all ease-in-out text-center"
            />
            <div className="about-card-details px-4 w-full h-0 flex justify-center items-center overflow-hidden absolute left-0 bottom-0 z-20 transition-all ease-in-out duration-400 bg-[rgba(255,125,41,0.7)] text-black">
              <div>
                <h2 className="text-2xl text-black font-bold mb-3 text-center">
                  {card.name}
                </h2>
                <p className="font-medium mb-4 text-center">{card.description}</p>
                <div className="flex justify-center space-x-5">
                  <a
                    href={card.social.linkedIn}
                    target="_blank"
                    className="text-2xl hover:text-white transition-all ease-in-out duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={card.social.github}
                    target="_blank"
                    className="text-2xl hover:text-white transition-all ease-in-out duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={`mailto:${card.social.gmail}`}
                    target="_blank"
                    className="text-2xl hover:text-white transition-all ease-in-out duration-300"
                  >
                    <SiGmail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
