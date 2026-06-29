"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

function FormInput({ label, name, type = "text", required = false }: { label: string, name: string, type?: string, required?: boolean }) {
  return (
    <div className="flex flex-col gap-1 group">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">{label}</label>
      <input type={type} name={name} required={required} className="w-full border-b border-gray-200 py-3 focus:border-blue-600 outline-none transition-all text-sm bg-transparent" />
    </div>
  );
}

export default function ContactPanel({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: "76f16762-6375-47b2-b9e7-3d1d75d79029",
      subject: "New Invite Request - Dash Media",
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      title: formData.get("title"),
      availability: formData.get("availability"),
    };

    try {
      const res1 = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: "76f16762-6375-47b2-b9e7-3d1d75d79029", to: "aniket@thedashmedia.com" }),
      });

      const json = await res1.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm" />
      <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed top-0 right-0 h-full w-full md:w-[40vw] bg-white z-[70] shadow-2xl p-8 md:p-16 overflow-y-auto text-black">
        <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20} /></button>
        <div className="mt-8 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Request an Invite</h2>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-6 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-gray-500 text-sm">We've received your request and will get back to you soon.</p>
              <button onClick={onClose} className="mt-4 bg-black text-white font-bold py-3 px-8 rounded-lg hover:opacity-80 transition-all">Close</button>
            </div>
          ) : (
            <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
               <FormInput label="Your Name" name="name" required />
               <FormInput label="Work Email" name="email" type="email" required />
               <FormInput label="Company" name="company" />
               <FormInput label="Title" name="title" />
               <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Which days are you available?</label>
                  <textarea name="availability" required className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors resize-none h-24 text-sm" />
               </div>
               <div className="flex items-center gap-3 mt-4">
                  <input type="checkbox" id="privacy" name="privacy_agreed" required className="w-4 h-4 rounded border-gray-300 focus:ring-black" />
                  <label htmlFor="privacy" className="text-xs font-medium text-gray-500">I agree to the <span className="underline cursor-pointer">privacy policy</span>.</label>
               </div>
               {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
               <button type="submit" disabled={status === 'loading'} className="mt-6 bg-black text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-80 transition-all self-end md:self-auto disabled:opacity-50">
                 {status === 'loading' ? 'Sending...' : 'Submit'}
               </button>
            </form>
          )}
        </div>
      </motion.div>
    </>
  );
}
