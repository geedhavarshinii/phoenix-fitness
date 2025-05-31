// src/components/TrainersSection.jsx
import FathimaImg   from "../assets/woman-work-out.webp";
import SangeethaImg from "../assets/woman-work-out.webp";

const trainers = [
  { name: "Fathima",   role: "Strength & Conditioning", img: FathimaImg },
  { name: "Sangeetha", role: "Yoga & Mobility",         img: SangeethaImg },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="bg-pink-50 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-phoenixPink mb-10">
          Our&nbsp;Expert&nbsp;Trainers
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="group rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="h-40 w-40 rounded-full object-cover mx-auto border-4 border-pink-300 group-hover:scale-105 transition"
              />
              <h3 className="mt-4 text-xl font-semibold text-pink-600 text-center">
                {t.name}
              </h3>
              <p className="text-center text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
