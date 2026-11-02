import React from 'react';
import AnimatedSection from './AnimatedSection';

// ── The 6 Steps Data with Exact Reference Logos ──

const stepsData = [
  {
    number: '01',
    title: 'Application & Requirement Analysis',
    badgeColor: 'bg-[#2563eb]',
    image: '/assets/images/process/step-01.png'
  },
  {
    number: '02',
    title: 'Equipment Configuration & Load Assessment',
    badgeColor: 'bg-[#16a34a]',
    image: '/assets/images/process/step-02.png'
  },
  {
    number: '03',
    title: 'Structural Design & Engineering Calculations',
    badgeColor: 'bg-[#ea580c]',
    image: '/assets/images/process/step-03.png'
  },
  {
    number: '04',
    title: 'Design Development & Component Selection',
    badgeColor: 'bg-[#4f46e5]',
    image: '/assets/images/process/step-04.png'
  },
  {
    number: '05',
    title: 'Manufacturing Quality & Inspection',
    badgeColor: 'bg-[#0d9488]',
    image: '/assets/images/process/step-05.png'
  },
  {
    number: '06',
    title: 'Installation Planning & Operational Support',
    badgeColor: 'bg-[#e11d48]',
    image: '/assets/images/process/step-06.png'
  }
];

export default function EngineeringProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* ARYVON Logo Watermark on bottom left matching the exact reference design */}
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 w-72 h-72 sm:w-96 sm:h-96 opacity-5 select-none"
        aria-hidden="true"
      >
        <img
          src="/assets/logo/aryvon-logo.png"
          alt=""
          className="w-full h-full object-contain grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Description & Purpose Slogan */}
          <AnimatedSection animation="fade-right" className="lg:col-span-5 max-w-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-navy">
                  OUR ENGINEERING PROCESS
                </span>
                <span className="h-[2px] w-12 bg-slate-400" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-navy font-heading leading-[1.12]">
                From Your Requirements to the{' '}
                <span className="text-[#2563eb]">Right Solution.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At ARYVON, every project begins with understanding your application, evaluating site requirements, and identifying the right engineering approach. Through thoughtful design, structural analysis, and quality-focused manufacturing, we develop material handling equipment tailored to your operational needs. Our commitment extends beyond design and manufacturing to installation support and long-term equipment performance.
              </p>

              {/* Slogan with blue accent bar matching the reference design */}
              <div className="border-l-4 border-[#2563eb] pl-4 py-1 space-y-0.5 pt-2">
                <p className="text-base sm:text-lg font-black text-brand-navy leading-snug font-heading">
                  Engineered with Purpose.
                </p>
                <p className="text-base sm:text-lg font-black text-[#2563eb] leading-snug font-heading">
                  Built Around Your Needs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: 2-Column Grid of 6 Steps with Exact Reference Logos */}
          <AnimatedSection animation="fade-left" stagger className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12">
              {stepsData.map((step) => {
                return (
                  <div
                    key={step.number}
                    className="flex items-center gap-4 sm:gap-5 group"
                  >
                    {/* Exact 3D Logo / Illustration */}
                    <div className="w-20 sm:w-24 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-105">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-md"
                        loading="lazy"
                      />
                    </div>

                    {/* Step Number Badge & Step Title */}
                    <div className="space-y-1.5 flex-1">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-extrabold text-xs shadow-md ${step.badgeColor}`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-sm sm:text-[15px] font-black text-brand-navy leading-snug group-hover:text-brand-orange transition-colors duration-200">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
