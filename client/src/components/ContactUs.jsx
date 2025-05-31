// src/components/ContactUsSection.jsx
// import { Mail, Phone, InstagramIcon } from "lucide-react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram }    from "react-icons/fa";


export default function ContactUs() {
  return (
    <section id="contact" className="bg-pink-50 py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-8">
          Contact Us
        </h2>

        <div className="grid gap-8 md:grid-cols-2 text-left">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FiPhone className="text-pink-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Priyadharshini (Owner)</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone className="text-pink-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Fathima (Trainer)</p>
                <p className="text-gray-600">+91 91234 56789</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone className="text-pink-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Sangeetha (Trainer)</p>
                <p className="text-gray-600">+91 99887 77665</p>
              </div>
            </div>
          </div>

          {/* Social + Email */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaInstagram className="text-pink-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Instagram</p>
                <p className="text-gray-600">@phoenixfitnesscenter</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiMail className="text-pink-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">phoenixfitness@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
