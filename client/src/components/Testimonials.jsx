// src/components/TestimonialSection.jsx
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    name: "Zaithoon Irfana",
    rating: 5,
    review:
      "Looking for a well equipped and favourable place to work out, recently joined phoenix fitness centre. It's so well equipped with many free weights, treadmills, cardio equipments and many resistance machines. Friendly and encouraging trainers. Overall it's a great place to spend some quality me time for your health.",
  },
  {
    name: "Karishma Manoj",
    rating: 4,
    review:
      "Well maintained and has a positive, energetic atmosphere. Trainer Sangeetha Akka is incredibly supportive and pushes you to do your best every session!!",
  },
  {
    name: "Rithikaa Bharani",
    rating: 5,
    review:
      "Gud place to workout with privacy. Best trainer ever experienced (Fathima Nihala Mam). They give workouts for everyone according to their body weight. The best gym for females with flexible timings. Just love this place 🫶🏼🫶🏼",
  },
  {
    name: "Suja S",
    rating: 5,
    review:
      "Journey with Phoenix from start till now has been very good. Good to work with MD Priya Ma'am and other trainers. Proud to be a part of a team that focuses on women's health and fitness.",
  },
  {
    name: "Malathy Baburajan",
    rating: 5,
    review:
      "This is a very good place for girls to workout. The trainers are very friendly and knowledgeable. Personal training is also available. Thanks to this gym ✌️",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-pink-50 py-16 px-4 md:px-8" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-phoenixPink mb-4">
          What Our Members Say
        </h2>
        <p className="text-md text-gray-600 mb-10">
          Hear it straight from the women who train with us!
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4">"{t.review}"</p>
              <p className="font-semibold text-phoenixOrange text-right">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
