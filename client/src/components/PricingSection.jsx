// src/components/PricingSection.jsx
const plans = [
  {
    duration: "1 Month",
    price: "₹1000",
    extras: ["Access to all equipment", "Group classes included"],
  },
  {
    duration: "3 Months",
    price: "₹2700",
    extras: ["Save ₹300 overall", "Flexible timings"],
  },
  {
    duration: "6 Months",
    price: "₹5000",
    extras: ["Free diet plan", "Priority trainer support"],
  },
  {
    duration: "12 Months",
    price: "₹9500",
    extras: ["1 free PT session", "Early-bird class booking"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-10">
          Membership Plans
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.duration}
              className="rounded-2xl border border-pink-200 p-8 shadow-md hover:shadow-lg transition "
            >
              <h3 className="text-xl font-bold text-pink-600">{p.duration}</h3>
              <p className="mt-2 text-4xl font-extrabold text-orange-500">
                {p.price}
              </p>

              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                {p.extras.map((e, i) => (
                  <li key={i}>• {e}</li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-full bg-pink-600 py-2 font-semibold text-white hover:bg-pink-700 transition">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
