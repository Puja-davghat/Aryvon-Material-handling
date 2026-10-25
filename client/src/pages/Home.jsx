import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, Phone, Shield, Wrench, Zap, Settings,
  ChevronRight, CheckCircle2, Star, Award, Users, Truck,
  Factory, Warehouse, Package, ClipboardCheck, DraftingCompass,
  HardHat, ShieldCheck
} from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { categories } from '../data/products';

// Product category card used in the main products section
function ProductCategoryCard({ category, index }) {
  const navigate = useNavigate();
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-brand-orange/50 transition-all duration-500 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={category.image}
          alt={`${category.fullName} — ARYVON Material Handling`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          onError={(e) => {
            if (category.fallback && !e.target.dataset.triedFallback) {
              e.target.dataset.triedFallback = 'true';
              e.target.src = category.fallback;
            }
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-transparent" />

        {/* Category label pill */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-widest shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          {category.name}
        </div>

        {/* Bottom overlay text */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-brand-paleOrange text-xs font-semibold uppercase tracking-widest mb-1">
            {category.tagline}
          </p>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-brand-navy font-heading group-hover:text-brand-orange transition-colors duration-300">
            {category.fullName}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Subcategories if present */}
        {category.subcategories && (
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map(sub => (
              <span
                key={sub.id}
                className="text-xs font-semibold text-brand-navy bg-brand-lightBlue px-2.5 py-1 rounded-md border border-brand-iceBlue"
              >
                {sub.name}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={() => navigate(category.path || `/products/${category.slug}`)}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-orange transition-colors group/btn pt-2 border-t border-slate-100"
        >
          <span>Open Dedicated Page</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-brand-orange" />
        </button>
      </div>
    </div>
  );
}

// Why Choose section data
const whyChoose = [
  {
    icon: Shield,
    title: 'Safe & Reliable',
    desc: 'Every system is engineered to meet industrial safety standards with robust structural design and operator protection.'
  },
  {
    icon: Award,
    title: 'High Load Capacity',
    desc: 'Built to handle demanding industrial loads across continuous operational shifts without compromise.'
  },
  {
    icon: Settings,
    title: 'Customizable Solutions',
    desc: 'Tailored configurations to match your exact facility dimensions, load types, and process requirements.'
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    desc: 'Modern drive systems and smart controls reduce energy consumption and operational running costs.'
  }
];

const engineeringSteps = [
  {
    number: '01',
    title: 'Application & Requirement Analysis',
    icon: ClipboardCheck,
    color: 'blue'
  },
  {
    number: '02',
    title: 'Equipment Configuration & Load Assessment',
    icon: Settings,
    color: 'green'
  },
  {
    number: '03',
    title: 'Structural Design & Engineering Calculations',
    icon: DraftingCompass,
    color: 'orange'
  },
  {
    number: '04',
    title: 'Design Development & Component Selection',
    icon: Factory,
    color: 'blue'
  },
  {
    number: '05',
    title: 'Manufacturing Quality & Inspection',
    icon: ShieldCheck,
    color: 'teal'
  },
  {
    number: '06',
    title: 'Installation Planning & Operational Support',
    icon: HardHat,
    color: 'rose'
  }
];

// Industries data
const industries = [
  {
    icon: Warehouse,
    name: 'Warehousing',
    desc: 'Optimize vertical storage and material flow across high-bay warehousing and distribution operations.',
    img: '/assets/images/industries/warehousing.jpg'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    desc: 'Keep production lines moving with reliable lifting, conveying, and material handling systems.',
    img: '/assets/images/industries/manufacturing.jpg'
  },
  {
    icon: Package,
    name: 'E-Commerce',
    desc: 'High-speed fulfilment operations demand fast, efficient conveyor and lift systems — we deliver.',
    img: '/assets/images/industries/logistics.jpg'
  },
  {
    icon: Truck,
    name: 'Logistics',
    desc: 'Loading bays, freight handling, and dock operations need robust, dependable material handling.',
    img: '/assets/images/industries/logistics.jpg'
  },
  {
    icon: Wrench,
    name: 'Automotive',
    desc: 'Heavy component transfer, assembly line conveyors, and overhead cranes for automotive plants.',
    img: '/assets/images/industries/manufacturing.jpg'
  }
];

export default function Home() {
  return (
    <div className="space-y-0">

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center bg-brand-deep text-white overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/hero/hero-vrc-warehouse.jpg"
            alt="ARYVON industrial warehouse with VRC vertical reciprocating conveyor"
            className="w-full h-full object-cover object-center opacity-40"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent" />
        </div>

        {/* Industrial grid overlay */}
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />

        <p className="absolute top-12 left-1/2 z-10 -translate-x-1/2 px-4 text-center text-lg sm:text-xl text-slate-300 font-bold tracking-wide whitespace-nowrap">
          Smart Solutions That Move
        </p>

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blueAccent/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Decorative gear */}
        <div className="absolute top-10 right-12 opacity-5 pointer-events-none hidden xl:block">
          <svg className="w-64 h-64 animate-spin-slow text-white" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="12 12" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl space-y-8">
            {/* Badge featuring ARYVON Logo */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-brand-navy/90 border border-brand-orange/50 text-brand-paleOrange text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              <div className="bg-white/95 px-2 py-0.5 rounded shadow inline-flex items-center">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON"
                  className="h-4 sm:h-5 w-auto object-contain"
                />
              </div>
              <span className="hidden sm:inline">Material Handling Solutions</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] text-white">
              Advanced Material Handling{' '}
              <span className="text-brand-orange">for a Stronger</span>{' '}
              Tomorrow
            </h1>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-widest rounded-lg shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-300 hover:bg-white/10 group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
              </Link>
            </div>

            {/* Quick stats bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
              {[
                { label: 'Material Handling Focus', value: '100%' },
                { label: 'Custom Configurations', value: 'Yes' },
                { label: 'Direct Enquiry Line', value: '83293 58214' }
              ].map(stat => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-brand-orange text-xl sm:text-2xl font-black">{stat.value}</p>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hazard stripe bottom */}
        <div className="hazard-stripe absolute bottom-0 left-0 right-0 z-10" />
      </section>

      {/* =========================================================================
          PRODUCTS SECTION — 4 Categories
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Our Product Range
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-navy font-heading">
                Four Core Product Categories
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Every solution we offer is purpose-built for industrial material handling — nothing more, nothing less.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
              {categories.map((cat, i) => (
                <ProductCategoryCard key={cat.id} category={cat} index={i} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy hover:bg-brand-blueAccent text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-300 hover:shadow-lg group"
              >
                View All Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE ARYVON
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Our Strengths
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <h2 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">
                  Why Choose
                </h2>
                <div className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm inline-flex items-center">
                  <img
                    src="/assets/logo/aryvon-logo.png"
                    alt="ARYVON"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
                <span className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">?</span>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                We match your operation with practical, proven material handling equipment designed for demanding industrial environments.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, i) => (
                <div
                  key={item.title}
                  className="group text-center p-8 rounded-2xl border border-slate-200 bg-white hover:border-brand-orange/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-lightBlue text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy font-heading mb-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          ENGINEERING PROCESS
         ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute -bottom-20 -left-10 select-none text-[18rem] font-black leading-none text-slate-50" aria-hidden="true">
          A
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-md">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy">
                  Our Engineering Process
                </span>
                <span className="h-px w-10 bg-slate-400" />
              </div>
              <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-brand-navy font-heading sm:text-4xl">
                From Your Requirements to the{' '}
                <span className="text-[#3978d4]">Right Solution.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Our engineering process begins with understanding your application, evaluating site requirements, and identifying the right engineering approach. Through detailed design, structural analysis, quality-focused manufacturing, and expert installation, we deliver systems tailored to your operational needs. Our commitment to extended lifecycle reliability keeps your equipment performing.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {engineeringSteps.map(({ number, title, icon: Icon, color }) => {
                const colors = {
                  blue: {
                    number: 'bg-[#4b83d7]',
                    icon: 'bg-[#eef4ff] text-[#3978d4]'
                  },
                  green: {
                    number: 'bg-[#3a9d68]',
                    icon: 'bg-[#eef8f1] text-[#3a9d68]'
                  },
                  orange: {
                    number: 'bg-[#f58220]',
                    icon: 'bg-[#fff4e9] text-[#e87519]'
                  },
                  teal: {
                    number: 'bg-[#1db4b7]',
                    icon: 'bg-[#eafafa] text-[#159da0]'
                  },
                  rose: {
                    number: 'bg-[#ee5d7c]',
                    icon: 'bg-[#fff0f3] text-[#df4c6c]'
                  }
                }[color];

                return (
                  <div key={number} className="flex min-h-[72px] items-center gap-3 border-b border-slate-100 pb-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}>
                      <Icon className="h-9 w-9" strokeWidth={1.8} />
                    </div>
                    <div className="h-12 w-px shrink-0 bg-slate-200" />
                    <div>
                      <span className={`mb-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white ${colors.number}`}>
                        {number}
                      </span>
                      <h3 className="text-xs font-bold leading-snug text-brand-navy sm:text-[13px]">
                        {title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                    About
                  </span>
                  <div className="bg-white/95 px-2.5 py-1 rounded shadow inline-flex items-center">
                    <img
                      src="/assets/logo/aryvon-logo.png"
                      alt="ARYVON"
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                  Dedicated Material Handling Solutions for Every Industrial Need
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  ARYVON provides material handling solutions tailored to industrial operational requirements. From vertical goods lifts to overhead cranes and conveyor systems, every product we supply is selected and configured to match the actual demands of your facility.
                </p>
                <p className="text-slate-300 text-base leading-relaxed">
                  We work directly with operations teams, plant managers, and warehouse supervisors to recommend and deliver equipment that resolves real operational challenges — prioritizing safety, durability, and practical reliability.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Equipment configured to your exact facility requirements',
                    'Direct support from our technical team',
                    'Focus on safety, reliability, and operational efficiency'
                  ].map(point => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group"
                  >
                    <span>About Us</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:8329358214"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 hover:border-white text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    83293 58214
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border-2 border-brand-orange/30 shadow-2xl">
                  <img
                    src="/assets/images/hero/hero-vrc-warehouse.jpg"
                    alt="ARYVON industrial material handling facility"
                    className="w-full object-cover aspect-[4/3]"
                    onError={(e) => {
                      e.target.src = '/assets/images/industries/manufacturing.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent rounded-2xl" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-brand-orange text-white p-5 rounded-2xl shadow-xl shadow-brand-orange/30 font-bold text-center">
                  <p className="text-3xl font-black">4</p>
                  <p className="text-xs uppercase tracking-widest mt-1">Product<br />Categories</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES WE SERVE
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Sector Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">
                Industries We Serve
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our material handling solutions are deployed across a wide range of industrial sectors — wherever reliable movement, lifting, and positioning of goods is critical.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {industries.map((ind) => (
                <Link
                  to="/industries"
                  key={ind.name}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-72 bg-brand-navy border border-slate-200 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={ind.img}
                    alt={`ARYVON serving ${ind.name} industry`}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.opacity = '0';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-navy/60 to-transparent" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="p-2.5 bg-brand-orange/20 backdrop-blur-sm rounded-lg w-fit mb-3 border border-brand-orange/30">
                      <ind.icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h3 className="text-white font-bold text-base group-hover:text-brand-orange transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1 line-clamp-2">
                      {ind.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="text-center mt-10">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-orange font-bold text-sm uppercase tracking-widest transition-colors group"
              >
                Explore All Industries
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-orange" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden border-t-4 border-brand-orange">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white leading-tight">
              Let's Build Your Solution
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team for customized material handling solutions tailored to your needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-widest rounded-lg shadow-xl shadow-brand-orange/30 transition-all duration-300 hover:scale-[1.02] group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:8329358214"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/40 hover:border-white text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-300 hover:bg-white/10 group"
            >
              <Phone className="w-5 h-5 text-brand-orange" />
              Call 83293 58214
            </a>
          </div>
        </div>

        <div className="hazard-stripe absolute bottom-0 left-0 right-0" />
      </section>
    </div>
  );
}
