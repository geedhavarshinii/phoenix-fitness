// src/components/FeaturesSection.jsx
import { Dumbbell, HeartPulse, UserRound, Scale, Salad, Venus } from 'lucide-react';
 // icons

const features = [
  { title: 'Fitness Programs',    desc: 'Tailored routines for all levels', Icon: Dumbbell },
  { title: 'Cardio Exercises',    desc: 'Boost stamina & heart health',     Icon: HeartPulse },
  { title: 'Personal Training',   desc: '1-on-1 coaching with experts',     Icon: UserRound },
  { title: 'Weight Loss / Gain',  desc: 'Structured plans to hit goals',    Icon: Scale },
  { title: 'Healthy Diet Plans',  desc: 'Nutrition guidance & tracking',    Icon: Salad },
  { title: 'Exclusive for Women', desc: 'Supportive women-only space',      Icon: Venus },
];


export default function FeaturesSection() {
  return (
    <section id="features" className="bg-pink-50 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-pink-600 mb-4">
          Why&nbsp;Choose&nbsp;Us
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Everything you need to kick-start and sustain a healthy lifestyle.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-pink-100 mb-4 group-hover:scale-105 transition">
                <Icon className="h-7 w-7 text-pink-600" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-semibold text-pink-600">{title}</h3>
              <p className="mt-2 text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
