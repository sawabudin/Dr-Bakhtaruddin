import React from "react";
import { motion } from "framer-motion";

const BASE_URL = import.meta.env.BASE_URL;

const doctors = [
  {
    name: "Dr. Bakhtaruddin",
    specialty: "General Dentist",
    experience: "7+ Years Experience",
    study: "BDS & RDS (Khyber Medical University - Pakistan), C-End, C-Ortho",
    image: `${BASE_URL}images/Tasal-3.jpeg`,
  },
  {
    name: "Dr. Yalda Hanifi",
    specialty: "Cosmetic Dentist",
    experience: "6+ Years Experience",
    study: "MDS (Kabul Medical University)",
    image: `${BASE_URL}images/femaldoc.png`,
  },
  {
    name: "Dr. Sawabudin Zazai",
    specialty: "Orthodontist",
    experience: "10+ Years Experience",
    study: "Kabul Medical University",
    image: `${BASE_URL}images/d1.jpeg`,
  },
];

const DoctorsSection = () => {
  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Meet Our Team
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Experienced{" "}
            <span className="text-cyan-600">Dental Specialists</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our dedicated dental professionals are committed to providing
            comfortable, personalized, and high-quality dental care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Doctor Image */}
              <div className="relative h-80 overflow-hidden sm:h-96">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    console.error(`Image not found: ${doctor.image}`);
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              {/* Doctor Information */}
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold text-cyan-600">
                  {doctor.specialty}
                </p>

                <h3 className="text-xl font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {doctor.experience}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-5 text-slate-600">
                  <p className="text-sm leading-6">{doctor.study}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500">
            Professional care from experienced dental specialists.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;
