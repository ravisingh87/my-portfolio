'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '@/lib/constants';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // Inside your sendEmail function
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Use the ! mark at the end to tell TypeScript these variables WILL exist
        emailjs.sendForm(
            CONTACT_CONFIG.serviceId,
            CONTACT_CONFIG.templateId,
            form.current!,
            CONTACT_CONFIG.publicKey
        )
            .then(() => {
                setStatus('success');
                form.current?.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus('error');
            });
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input
                        type="text" name="user_name" required
                        className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                        type="email" name="user_email" required
                        className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                        name="message" required rows={4}
                        className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="How can I help you?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === 'sending' ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200'
                        }`}
                >
                    {status === 'idle' && <><Send size={18} /> Send Message</>}
                    {status === 'sending' && 'Sending...'}
                    {status === 'success' && <><CheckCircle size={18} /> Message Sent!</>}
                    {status === 'error' && <><AlertCircle size={18} /> Error! Try again</>}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;