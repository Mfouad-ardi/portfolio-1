import HeroText from "../components/HeroText";
import Astronaut from "../components/Astronaut";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../components/Loader";
const PI = Math.PI;
const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });
    return (
        <section id="home" className="flex items-start justify-center
        min-h-screen overflow-hidden
        md:items-start md:justify-start c-space">
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute right-0 "
                style={{ width: "100vw", height: "100vh"}}
            >
                 <Canvas camera={{ position: [0, 1, 3] }}>
                    <Suspense fallback={<Loader/>}>
                        <Float>
                            <Astronaut  
                                scale={isMobile ? 0.65 : 1.2} 
                                position={isMobile ? [0, -0.6, 1.25] : [1.25, -0.5, -0.05]}
                                rotation={isMobile ? [0.15, PI*0.65, -0.25] : [0.08*PI, 0.65*PI, -PI*0.05]}
                            />
                        </Float>
                        <Rig />
                    </Suspense>
                </Canvas>

            </figure>
        </ section>
    )
};

function Rig(){
    return useFrame( (state, delta) => {
        easing.damp3(state.camera.position, [state.mouse.x/10, 1 +
            state.mouse.y/10, 3,
        ], 0.5, delta);

    })
}
export default Hero