import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS dispatch mapping using secure token placeholders
    emailjs
      .send(
        'service_id_placeholder', // replace with real service ID
        'template_id_placeholder', // replace with real template ID
        {
          from_name: form.name,
          to_name: 'Mohamad Bouzi',
          from_email: form.email,
          to_email: 'biwaro2011@gmail.com',
          message: form.message,
        },
        'public_key_placeholder' // replace with real public key
      )
      .then(
        () => {
          setLoading(false);
          alert('Message sent successfully! Thank you for reaching out.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Failed to send message. Please check your configuration or try again.');
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col bg-black-100 rounded-3xl overflow-hidden border border-black-300 p-6 sm:p-10">
        {/* Terminal Background Backdrop */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/assets/terminal.png" alt="terminal bg" className="w-full h-full object-cover" />
        </div>

        {/* Console Wrapper Card */}
        <div className="relative z-10 w-full max-w-xl bg-black-200 border border-black-300 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 flex flex-col gap-6">
          {/* Mock Console Header Window Buttons */}
          <div className="flex justify-between items-center border-b border-black-300 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 inline-block" />
            </div>
            <p className="text-white-600 font-mono text-xs">mbouzi@ai-workstation:~</p>
            <div className="w-12" /> {/* alignment spacer */}
          </div>

          {/* Console Text Lines */}
          <div className="space-y-2 mt-2 font-mono">
            <p className="text-green-500 text-sm">mohamad@bouzi:~$ <span className="text-white">contact --init</span></p>
            <p className="text-white-700 text-xs">Initializing communication link...</p>
            <p className="text-white-700 text-xs">Link established. Ready for transmission.</p>
          </div>

          {/* Contact Input Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white font-mono text-sm font-semibold">
                FullName
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-black-300 border border-black-200 rounded-xl px-4 py-3 text-white font-mono text-sm focus:border-white-600 focus:outline-none transition-colors"
                placeholder="e.g. John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-mono text-sm font-semibold">
                EmailAddress
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-black-300 border border-black-200 rounded-xl px-4 py-3 text-white font-mono text-sm focus:border-white-600 focus:outline-none transition-colors"
                placeholder="e.g. johndoe@company.com"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white font-mono text-sm font-semibold">
                SecureMessage
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-black-300 border border-black-200 rounded-xl px-4 py-3 text-white font-mono text-sm focus:border-white-600 focus:outline-none transition-colors resize-none"
                placeholder="Write your request or strategic proposal here..."
              />
            </div>

            {/* Submit transmission button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex justify-center items-center gap-3 bg-black-300 border border-black-200 hover:border-white-600 disabled:opacity-50 transition-all py-4 rounded-xl text-white font-mono font-medium text-sm cursor-pointer shadow-lg active:scale-95"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                  Transmitting...
                </>
              ) : (
                'Transmit Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
