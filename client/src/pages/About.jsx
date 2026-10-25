import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, Shield, Wrench,
  Settings, Award, Users, Zap, Package
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import IndustrialShapes from '../components/IndustrialShapes';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Every product we provide is selected and configured with operator safety as the primary design criteria. Structural integrity, fail-safe controls, and compliant safety features are non-negotiable.'
  },
  {
    icon: Wrench,
    title: 'Engineering Quality',
    desc: 'We work with proven, industrial-grade equipment designed to perform under continuous heavy-duty operational demands. No compromises on materials, drives, or structural design.'
  },
  {
    icon: Settings,
    title: 'Practical Configuration',
    desc: 'Every system is reviewed and configured to the actual dimensions, load characteristics, and workflow requirements of the client facility — not generic catalogue specifications.'
  },
  {
    icon: Zap,
    title: 'Operational Efficiency',
    desc: 'Our solutions are evaluated for their contribution to reducing manual handling, increasing throughput, and lowering operational running costs across the facility.'
  }
];

const products = [
  {
    name: 'VRC',
    full: 'Vertical Reciprocating Conveyor',
    tagline: 'Powering vertical movement. Built for industrial demands.',
    href: '/products/vrc'
  },
  {
    name: 'Scissor Lift',
    full: 'Self-Propelled & Floor-Mounted',
    tagline: 'Lift Your Materials To The Perfect Height.',
    href: '/products/scissor-lift'
  },
  {
    name: 'EOT Crane',
    full: 'Single Girder & Double Girder',
    tagline: 'Reliable Lifting. Precise Movement.',
    href: '/products/eot-crane'
  },
  {
    name: 'Conveyor',
    full: 'Roller & Chain Conveyor',
    tagline: 'Keep Your Operations Moving.',
    href: '/products/conveyor'
  }
];

export default function About() {
  return (
    <div className="space-y-0 py-10 sm:py-16">

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
              Our Company
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight text-white">
                About
              </h1>
              <div className="bg-white/95 px-3 py-1 rounded-lg shadow inline-flex items-center">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dedicated material handling solutions for industrial operations — focused on safety, reliability, and practical engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange border-b border-brand-orange pb-1 inline-block">
                  Who We Are
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy font-heading leading-tight">
                  Material Handling Solutions Engineered for Industry
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    ARYVON provides material handling equipment and solutions tailored to industrial operational requirements. We focus exclusively on four core product categories — Vertical Reciprocating Conveyors, Scissor Lifts, EOT Cranes, and Conveyor Systems.
                  </p>
                  <p>
                    Our approach is direct and practical: we work with your operations team to understand the exact requirements of your facility, and then we recommend, configure, and supply equipment that resolves the actual handling challenges you face.
                  </p>
                  <p>
                    We prioritize reliable, proven technology over speculative solutions — backing every system with transparent specifications and accessible technical support.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    'Four focused product categories — no distractions, no irrelevant offerings',
                    'Equipment selected and configured to your facility dimensions and load needs',
                    'Operator safety embedded in every product recommendation',
                    'Direct contact with our technical team throughout the enquiry process'
                  ].map(point => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group"
                  >
                    View Our Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group"
                  >
                    Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden aspect-square border border-slate-200 shadow-lg group hover:shadow-2xl transition-all duration-300">
                    <img
                      src="/assets/images/products/Self propelled Scissor lift.jpeg"
                      alt="Self-propelled scissor lift — ARYVON Material Handling"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-square border border-slate-200 shadow-lg group hover:shadow-2xl transition-all duration-300">
                    <img
                      src="/assets/images/products/vrc-goods-lift.jpg"
                      alt="Vertical Reciprocating Conveyor (VRC) Goods Lift — ARYVON"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="bg-brand-deep text-white rounded-xl p-5 flex items-center gap-4 border border-brand-orange/30 shadow-lg">
                  <div className="p-3 bg-brand-orange rounded-lg flex-shrink-0">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-2xl text-brand-orange">4 Categories</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">VRC · Scissor Lifts · EOT Cranes · Conveyors</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Our Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">
                How We Work
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                These operational principles guide every equipment recommendation and client engagement.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-orange/40 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-lightBlue text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <val.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy font-heading mb-3 group-hover:text-brand-orange transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Focus */}
      <section className="py-16 sm:py-24 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        <IndustrialShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
                Our Product Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading">
                Four Core Categories. Focused Expertise.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                By concentrating on four key product categories, ARYVON delivers deeper expertise, better specifications, and more appropriate solutions than broader-scope competitors.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(prod => (
                <Link
                  to={prod.href}
                  key={prod.name}
                  className="group p-6 rounded-2xl border border-white/10 bg-brand-navy/40 hover:border-brand-orange hover:bg-brand-navy transition-all duration-300"
                >
                  <div className="w-10 h-1 bg-brand-orange rounded-full mb-4" />
                  <h3 className="text-xl font-black text-white font-heading mb-1 group-hover:text-brand-orange transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-brand-paleOrange text-xs font-semibold mb-2">{prod.full}</p>
                  <p className="text-slate-400 text-xs italic">"{prod.tagline}"</p>
                  <div className="mt-4 flex items-center gap-1 text-brand-orange text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="fade-up" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-brand-navy">
              Ready to Work With
            </h3>
            <div className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm inline-flex items-center">
              <img
                src="/assets/logo/aryvon-logo.png"
                alt="ARYVON"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            <span className="text-2xl sm:text-4xl font-black text-brand-navy font-heading">?</span>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Submit your facility and operational requirements — our team will respond with a tailored material handling recommendation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-widest rounded-lg shadow-lg shadow-brand-orange/30 transition-all group"
            >
              Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
