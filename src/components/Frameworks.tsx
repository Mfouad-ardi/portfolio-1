import { object } from "motion/react-client";
import { OrbitingCircles } from "./OrbitingCircles";
import { Icon } from "@iconify/react";
// Import icons from React Icons
// import { 
//   SiPhp, 
//   SiNodedotjs, 
//   SiExpress, 
//   SiCplusplus, 
//   SiThreedotjs, 
//   SiSharp, 
//   SiCss3, 
//   SiMongodb, 
//   SiDotnet, 
//   SiPython, 
//   SiGit, 
//   SiHtml5, 
//   SiJavascript, 
//   SiReact, 
//   SiMysql, 
//   SiTailwindcss, 
//   SiVite, 
//   SiShadcnui, 
//   SiWordpress 
// } from 'react-icons/si';

export function Frameworks() {
  // Create a mapping of skill names to icon components
  const skillIcons = 
    {
      "php": "php",
      "python": "python" ,
      "threejs": "threejs" ,
      "expressjs": "express" ,
      "cplusplus": "cplusplus" ,
      "csharp": "csharp" ,
      "css3": "css3" ,
      "dotnet": "dotnetcore" ,
      "mongodb": "mongodb" , 
      "framermotion": "framermotion" , 
      "git": "git" ,
      "html5": "html5" ,
      "expo": "expo" ,
      "javascript": "javascript" ,
      "react": "react" ,
      "mysql": "mysql-wordmark" ,
      "reactNative": "reactnative-wordmark" ,
      "tailwindcss": "tailwindcss" ,
      "vitejs": "vitejs" ,
      "wordpress": "wordpress" 
  };

  const skills = Object.keys(skillIcons)
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon fontSize={40} key={index} icon={"devicon:" + skillIcons[skill]} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.slice().reverse().map((skill, index) => (
          <Icon fontSize={25} key={index} icon={"devicon:" + skillIcons[skill]} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const icons = ({ icon }) => (
  <div className="duration-200 rounded-sm hover:scale-110 flex items-center justify-center">
    {icon}
  </div>
);