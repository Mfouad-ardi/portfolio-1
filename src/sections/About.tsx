import CodingImg from '../assets/coding-pov.png';
import CSPink from '../assets/logos/csharp-pink.png';
import NetPink from '../assets/logos/dotnet-pink.png';
import BlazorPink from '../assets/logos/blazor-pink.png';
import Card from '../components/Card';
import { useRef } from 'react';
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';
const About = () => {
    const grid2Container = useRef<HTMLDivElement>(null);
    return (
        <section id='about' className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
            md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img src={CodingImg} alt="codin pov" className="absolute scale-[1.75] -right-20 
                    -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm FOUAD MARDI</p>
                        <p className="subtext">
                            A motivated and curious Full-Stack Developer, I create websites, applications, and solutions tailored to user needs. I love to learn, share my knowledge, and work in a team to drive projects forward.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/1 bg-linear-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            CODE IS CRAFT
                        </p>
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "75deg", top: "30%", left: "20%"}} text="GRASP" />
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "-30deg", top: "60%", left: "45%"}} text="SOLID" />
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "90deg", bottom: "30%", left: "70%"}} text="Design Patterns" />
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "-45deg", top: "55%", left: "0%"}} text="Design Principles" />
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "20deg", top: "10%", left: "38%"}} text="SRP" />
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "30deg", top: "70%", left: "70%"}} image={CSPink} />
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "-45deg", top: "70%", left: "25%"}} image={NetPink} />
                        <Card containerRef={grid2Container as React.RefObject<HTMLElement>} style={{ rotate: "-45deg", top: "5%", left: "10%"}} image={BlazorPink} />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Time Zone</p>
                        <p className='subtext'>
                            I'm based in Oujda(Morocco), and open to remote work worldwide
                        </p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    
                    <div className='flex flex-col items-center
                    justify-center gap-4 size-full'>
                        <p className='text-center headtext'>
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Teck Stack</p>
                        <p className='subtext'>
                            I specialize in variety of languages, frameworks, and tools that allow me to build robust and sccalable applications
                        </p>
                    </div>
                    <div className='absolute inset-y-0 
                    md:inset-y-9 w-full h-full start-[50%]
                    md:scale-125'>
                       <Frameworks /> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;