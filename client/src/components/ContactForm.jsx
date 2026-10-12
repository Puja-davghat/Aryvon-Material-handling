import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, PhoneCall, ChevronDown } from 'lucide-react';
import { submitEnquiry, fetchProducts } from '../services/api';
import Button from './Button';

/* ─── Fade-in on scroll hook ─── */
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export default function ContactForm({ prefilledProductId = null, prefilledProductName = '' }) {
  const [searchParams] = useSearchParams();

  const queryProductId = searchParams.get('productId') || prefilledProductId || '';
  const queryProductName = searchParams.get('productName') || prefilledProductName || '';

  const getAutoSubject = (productName) =>
    productName ? `Quotation Request: ${productName}` : 'General Equipment Enquiry';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    productId: queryProductId,
    message: queryProductName
      ? `Dear ARYVON Team,\n\nWe would like to request an official quotation and technical datasheet for: ${queryProductName}.\n\nPlease find our operating requirements below:`
      : '',
    website_hp: '' // Honeypot field
  });

  const [headerRef, headerVisible] = useFadeIn();
  const [formRef, formVisible] = useFadeIn();

  const [availableProducts, setAvailableProducts] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [submissionError, setSubmissionError] = useState(null);

  // Fetch product list for dropdown
  useEffect(() => {
    fetchProducts()
      .then(items => setAvailableProducts(items))
      .catch(err => console.warn('Could not load products for enquiry dropdown:', err));
  }, []);

  // Update form if URL params change
  useEffect(() => {
    if (queryProductId) {
      setFormData(prev => ({
        ...prev,
        productId: queryProductId,
      }));
    }
  }, [queryProductId, queryProductName]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Full Name is required (min 2 characters).';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Company / Organization Name is required.';
    }
    const phoneRegex = /^[\d\s+\-().]{7,25}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = 'A valid contact phone number is required.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please specify your requirements or equipment questions.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleProductSelect = (e) => {
    const val = e.target.value;
    const selected = availableProducts.find(p => String(p.id) === String(val));
    setFormData(prev => ({
      ...prev,
      productId: val,
      message: selected && !prev.message.trim()
        ? `Dear ARYVON Team,\n\nWe would like to request an official quotation and technical datasheet for: ${selected.name}.\n\nPlease find our operating requirements below:`
        : prev.message
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    // Auto-generate subject from selected product
    const selectedProduct = availableProducts.find(p => String(p.id) === String(formData.productId));
    const autoSubject = getAutoSubject(selectedProduct?.name || queryProductName);

    try {
      const payload = {
        ...formData,
        subject: autoSubject,
        email: `enquiry+${Date.now()}@aryvon.in`, // auto-placeholder so server passes email validation
      };
      const response = await submitEnquiry(payload);
      setSubmissionSuccess(response);
      setFormData({
        fullName: '',
        companyName: '',
        phone: '',
        productId: '',
        message: '',
        website_hp: ''
      });
    } catch (err) {
      setSubmissionError(err.message || 'Submission failed. Please check details or call 83293 58214 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
      {/* Top Form Header with ARYVON Industrial Branding */}
      <div className="bg-brand-navy p-6 sm:p-8 text-white border-b-4 border-brand-orange">
        <span className="text-brand-paleOrange font-bold text-xs uppercase tracking-widest block mb-1">
          Direct Client Communication
        </span>
        <h3 className="text-2xl font-black font-heading text-white tracking-wide">
          Request a Quotation & Equipment Consultation
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
          Submit your material handling specifications below. Our technical engineering team will review your application and respond with technical recommendations and pricing.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {/* Success Confirmation Alert */}
        {submissionSuccess && (
          <div className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-500/40 rounded-xl space-y-3 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-emerald-900">
                  Enquiry Successfully Received!
                </h4>
                {submissionSuccess.referenceId && (
                  <p className="text-xs font-semibold text-emerald-700">
                    Reference ID: #{submissionSuccess.referenceId}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm text-emerald-800 leading-relaxed">
              {submissionSuccess.message}
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-emerald-700 border-t border-emerald-200">
              <span>Urgent equipment requirement? Call us directly:</span>
              <a href="tel:8329358214" className="font-bold underline text-emerald-900">
                83293 58214
              </a>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {submissionError && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-red-800">Submission Notice</p>
              <p className="text-xs text-red-700">{submissionError}</p>
            </div>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className={`space-y-6 transition-all duration-700 delay-150 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Honeypot field for anti-spam (invisible to humans) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_hp"
              tabIndex="-1"
              autoComplete="off"
              value={formData.website_hp}
              onChange={handleChange}
            />
          </div>

          {/* Row 1: Full Name & Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-brand-orange">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-red-400 bg-red-50/50 focus:ring-red-400'
                    : 'border-slate-300 bg-slate-50/50 focus:ring-brand-orange focus:bg-white'
                }`}
                required
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Company / Organization Name <span className="text-brand-orange">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Acme Logistics Pvt Ltd"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.companyName
                    ? 'border-red-400 bg-red-50/50 focus:ring-red-400'
                    : 'border-slate-300 bg-slate-50/50 focus:ring-brand-orange focus:bg-white'
                }`}
                required
              />
              {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
            </div>
          </div>

          {/* Row 2: Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Contact Phone Number <span className="text-brand-orange">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-red-400 bg-red-50/50 focus:ring-red-400'
                  : 'border-slate-300 bg-slate-50/50 focus:ring-brand-orange focus:bg-white'
              }`}
              required
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          {/* Row 3: Product of Interest (Optional / Prepopulated) */}
          <div>
            <label htmlFor="productId" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Product of Interest <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <select
                id="productId"
                name="productId"
                value={formData.productId}
                onChange={handleProductSelect}
                className="w-full appearance-none px-4 py-2.5 pr-10 rounded-lg border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-colors cursor-pointer"
              >
                <option value="">-- General Equipment Enquiry --</option>
                {availableProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
            {/* Auto-subject preview pill */}
            <div className={`mt-2 transition-all duration-300 ${
              formData.productId ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-navy bg-brand-lightBlue border border-brand-iceBlue px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                Subject: {getAutoSubject(availableProducts.find(p => String(p.id) === String(formData.productId))?.name)}
              </span>
            </div>
          </div>

          {/* Message / Requirements */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Material Handling Requirements & Specifications <span className="text-brand-orange">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your operating environment, required lifting capacity, warehouse layout, or quantities needed..."
              className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-red-400 bg-red-50/50 focus:ring-red-400'
                  : 'border-slate-300 bg-slate-50/50 focus:ring-brand-orange focus:bg-white'
              }`}
              required
            />
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          {/* Privacy & Anti-spam declaration */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Your contact details are securely stored and strictly used for technical quotation purposes.</span>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              icon={Send}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Submitting Enquiry...' : 'Submit Quotation Request'}
            </Button>

            <a
              href="tel:8329358214"
              className="text-xs font-bold text-slate-600 hover:text-brand-orange transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-orange" />
              Prefer calling? <span className="underline">83293 58214</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
