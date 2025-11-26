import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const ProjectDetails = ({ 
    title, 
    description, 
    subDescription, 
    href, 
    image, 
    tags, 
    onClose 
}) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative flex flex-col w-full max-w-2xl border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10 max-h-[90vh]" // <-- KEY CHANGES HERE
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute z-10 p-2 rounded-sm top-5 right-5 bg-midnight/80 hover:bg-gray-700 transition-colors"
                    aria-label="Close project details"
                >
                    <X />
                </button>

                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                    <img src={image} alt={title} className="object-cover w-full h-full" />
                </div>
                
                {/* Scrollable Content Area */}
                <div className="flex-1 p-5 overflow-y-auto"> {/* <-- KEY CHANGE HERE */}
                    <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                    <p className="mb-3 font-normal text-neutral-400">{description}</p>
                    
                    {subDescription && (
                        <div className="space-y-2 mb-4">
                            {subDescription.map((subDesc, index) => (
                                <p key={index} className="text-neutral-300">{subDesc}</p>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sticky Footer */}
                <div className="flex items-center justify-between p-5 border-t border-white/10">
                    <div className="flex gap-3">
                        {tags.map((tag) => (
                            <Icon key={tag.id} fontSize={40} icon={`devicon:${tag.name}`} />
                        ))}
                    </div>
                    {href && (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            View Project
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;