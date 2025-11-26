import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert"; // Import the Alert component
import Particles from "../components/Particle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  //service_kbl8g5u
  //template_vyzmvuf
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_kbl8g5u",
        "template_vyzmvuf",
        {
          form_name: formData.name,
          to_name: "FOUAD",
          form_email: formData.email,
          to_email: "mardifouad001@gmail.com",
          message: formData.message,
        },
        "Hhfa5N8tcynpqvbv3"
      );
      
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("Failed to send message. Please try again later.");
      
      // Reset error message after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };
  
  return (
    <>
      <section id="contact" className="relative flex items-center c-space section-spacing">
        <Particles
                    className="absolute inset-0 -z-50"
                    quantity={120}
                    color="#8b5cf6"
                    staticity={30}
                    ease={40}
                    size={0.5}
                  />
        <div className="flex flex-col items-center justify-center
          max-w-md p-5 mx-auto border border-white/10 rounded-2xl
          bg-primary">
  
          
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">
              Whether you're looking to build a new website, improve
              your existing platform, or bring a 
              unique project to life, I'm here to help.
            </p>
          </div>
          
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="field-label">
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="field-input field-input-focus" 
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="field-input field-input-focus" 
                placeholder="JohnDoe@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea 
                id="message" 
                name="message"
                className="field-input field-input-focus"
                rows={4}
                placeholder="Share your thoughts..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full px-1 py-3 text-lg text-center 
              rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation
              disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sending...
                </span>
              ) : "Send"}
            </button>
          </form>
        </div>
      </section>
      
      {/* Alert Notifications */}
      <Alert 
        type="success" 
        text="Message sent successfully!."
        isVisible={isSubmitted}
      />
      
      <Alert 
        type="danger" 
        text={error || "Failed to send message. Please try again later."}
        isVisible={!!error}
      />
    </>
  );
};

export default Contact;