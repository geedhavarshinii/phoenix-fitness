// src/components/AboutSection.jsx
const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          At <span className="font-semibold text-pink-600">Phoenix Fitness Centre</span>, we believe in transformation. 
          Our mission is to empower individuals to become the strongest version of themselves — physically and mentally. 
          Whether you're just starting your journey or are a seasoned athlete, we're here to help you rise.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
