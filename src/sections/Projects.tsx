import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { useState } from "react";

const Projects = () => {
    // --- Motion Values for the Custom Cursor ---
    // These track the raw mouse position.
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    // These apply a spring physics animation to the raw values for a smooth, "elastic" follow effect.
    const springX = useSpring(x, { damping: 15, stiffness: 300 });
    const springY = useSpring(y, { damping: 15, stiffness: 300 });

    // --- State Management ---
    // Stores the URL of the image to preview. `null` means the preview is hidden.
    const [preview, setPreview] = useState(null);

    // --- Event Handlers ---
    const handleMouseMove = (e) => {
        // We add a small offset to prevent the preview from appearing directly under the cursor.
        x.set(e.clientX + 15);
        y.set(e.clientY + 15);
    };
    
    // When the mouse leaves the section, hide the preview.
    const handleMouseLeave = () => {
        setPreview(null);
    };

    return (
        <section 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative c-space section-spacing"
        >
            <h2 className="text-heading">My Selected Projects</h2>
            
            {/* FIX: Corrected the invalid Tailwind class name */}
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
            
            <div className="mt-12">
                {myProjects.map((project) => (
                    <Project 
                        key={project.id} 
                        {...project} 
                        setPreview={setPreview} 
                    />
                ))}
            </div>

            {/* 
              ENHANCEMENT: Use AnimatePresence for smooth enter/exit animations.
              The preview image will only be rendered when `preview` is not null.
            */}
            <AnimatePresence>
                {preview && (
                    <motion.img
                        // The key is crucial for AnimatePresence to detect when the component mounts/unmounts
                        key={preview}
                        src={preview}
                        alt="Project preview"
                        className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 border border-neutral-700"
                        style={{ x: springX, y: springY }}
                        
                        // Fade-in animation
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;