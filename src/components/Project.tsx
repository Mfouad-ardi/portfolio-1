import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags, setPreview }) => {
    // State to control the modal's visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div 
                className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0" 
                onMouseEnter={() => setPreview(image)} 
                // FIX 1: Corrected the onMouseLeave handler
                onMouseLeave={() => setPreview(null)}
            >
                <div>
                    <p className="text-2xl">{title}</p>
                    <div className="flex gap-5 mt-2 text-sand">
                        {tags.map((tag) => (
                            <span key={tag.id}>{tag.name}</span>
                        ))}
                    </div>
                </div>
                {/* This button now opens the modal */}
                <button onClick={openModal} className="flex items-center gap-1 cursor-pointer hover-animation">
                    Read More
                    <ArrowRight />
                </button>
            </div>
            
            {/* FIX 2: Corrected the invalid Tailwind class name */}
            <div className="bg-gradient-to-r from-transparent via-neutral-700 h-px w-full" />
            
            {/* Conditionally render the modal */}
            {isModalOpen && (
                <ProjectDetails
                    title={title}
                    description={description}
                    subDescription={subDescription}
                    href={href}
                    image={image}
                    tags={tags}
                    onClose={closeModal} // Pass the close function to the modal
                />
            )}
        </>
    );
};

export default Project;