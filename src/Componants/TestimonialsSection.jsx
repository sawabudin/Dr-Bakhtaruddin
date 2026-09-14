import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";

// =====================================================
// GitHub Pages Base URL
// =====================================================
const BASE_URL = import.meta.env.BASE_URL;

// =====================================================
// Testimonials Data
// Images are inside: public/images/
// =====================================================
const testimonials = [
  {
    name: "Atal",
    role: "Patient",
    image: `${BASE_URL}images/d2.jpeg`,
    rating: 5,
    text: "I had a very good experience at Dr. Bakhtaruddin Dental Clinic. The doctor was professional, kind, and explained everything clearly.",
  },

  {
    name: "Nasrat",
    role: "Patient",
    image: `${BASE_URL}images/d1.jpeg`,
    rating: 5,
    text: "The clinic is clean and modern. I received excellent dental treatment and I am very satisfied with the result.",
  },

  {
    name: "Sana",
    role: "Patient",
    image: `${BASE_URL}images/doctors3.jpg`,
    rating: 5,
    text: "The staff were friendly and helpful. The treatment was comfortable and professional. I highly recommend this dental clinic.",
  },

  {
    name: "Lida",
    role: "Patient",
    image: `${BASE_URL}images/femaldoc.png`,
    rating: 5,
    text: "I am very happy with the service. The doctor took time to understand my problem and provided excellent treatment.",
  },

  {
    name: "Adil",
    role: "Patient",
    image: `${BASE_URL}images/photo2.jpg`,
    rating: 5,
    text: "Excellent dental service with professional doctors and a welcoming environment. I definitely recommend Dr. Bakhtaruddin Dental Clinic.",
  },

  {
    name: "Bakhtaruddin",
    role: "Patient",
    image: `${BASE_URL}images/Tasal-2.jpeg`,
    rating: 5,
    text: "A great dental clinic with professional treatment and excellent patient care. I had a wonderful experience.",
  },
];

// =====================================================
// Animation Variants
// =====================================================
const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// =====================================================
// Testimonials Section
// =====================================================
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ===================================================
  // Next Testimonial
  // ===================================================
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  // ===================================================
  // Previous Testimonial
  // ===================================================
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  // ===================================================
  // Auto Slider
  // ===================================================
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================================
            Section Header
        ================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
              <Quote size={17} />
              Patient Reviews
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            What Our <span className="text-blue-600">Patients Say</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-7 text-gray-600 sm:text-lg"
          >
            We are proud to provide professional dental care and create positive
            experiences for our patients.
          </motion.p>
        </motion.div>

        {/* =================================================
            Testimonial Card
        ================================================== */}
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Previous Button */}
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white md:flex"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white md:flex"
            >
              <ChevronRight size={24} />
            </button>

            {/* =================================================
                Animated Testimonial
            ================================================== */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -50,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl"
              >
                <div className="grid items-center md:grid-cols-2">
                  {/* =================================================
                      Image
                  ================================================== */}
                  <div className="relative h-[350px] overflow-hidden sm:h-[400px] md:h-[500px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        console.error("Image not found:", testimonial.image);

                        e.currentTarget.src = `${BASE_URL}images/d2.jpeg`;
                      }}
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Quote Icon */}
                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-lg backdrop-blur-sm">
                      <FaQuoteLeft size={22} />
                    </div>
                  </div>

                  {/* =================================================
                      Content
                  ================================================== */}
                  <div className="relative p-7 sm:p-10 lg:p-12">
                    {/* Large Quote */}
                    <div className="absolute right-7 top-6 text-blue-50">
                      <Quote size={80} strokeWidth={1} />
                    </div>

                    {/* Stars */}
                    <div className="relative mb-5 flex gap-1">
                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, index) => (
                        <Star
                          key={index}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="relative mb-8 text-lg leading-8 text-gray-600 sm:text-xl">
                      “{testimonial.text}”
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4">
                      {/* Small User Image */}
                      <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-blue-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = `${BASE_URL}images/d2.jpeg`;
                          }}
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {testimonial.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                Mobile Navigation Buttons
            ================================================== */}
            <div className="mt-6 flex justify-center gap-3 md:hidden">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>

          {/* =================================================
              Dots
          ================================================== */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-gray-300 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};;

export default TestimonialsSection;
