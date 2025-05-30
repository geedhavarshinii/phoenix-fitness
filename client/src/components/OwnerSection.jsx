// src/components/OwnerSection.jsx
import OwnerImg from "../assets/woman-work-out.webp"; // drop your real file here

export default function OwnerSection() {
  return (
    <section id="owner" className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Photo */}
        <img
          src={OwnerImg}
          alt="Priyadharshini – Owner"
          className="h-56 w-56 rounded-full object-cover border-4 border-pink-400 shadow-md"
        />

        {/* Bio */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            Meet&nbsp;Priyadharshini
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            A certified fitness professional with 10+ years of experience,
            Priyadharshini founded Phoenix Fitness Centre to create a
            supportive, women-only space where every member can rise above
            limitations and embrace a healthier, happier lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}
