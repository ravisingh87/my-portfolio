import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Get In Touch</h2>
          <p className="text-slate-600 mt-4">Have a project in mind? Let's build something great together.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}