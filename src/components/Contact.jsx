import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Terminal, MapPin } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { email, github, linkedin, location } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: `${formData.name} (DevOps Portfolio)`
          })
        });

        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error(result.message || "Failed to submit form");
        }
      } else {
        // Direct browser compose launch if API key is not configured yet
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Shahab,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.open(gmailUrl, '_blank');
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error("Web3Forms Submission Error:", error);
      // Fallback to web compose if API request fails
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Shahab,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(gmailUrl, '_blank');
      setSubmitted(true);
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#060911] border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>07. GET_IN_TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Connect & <span className="text-cyan-400">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Open to Junior DevOps Engineer opportunities, cloud infrastructure roles, and collaborative technical projects.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Direct Links Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-100 font-sans">
                Contact Channels
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out directly via email or connect with me on GitHub and LinkedIn.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-[#080c14] border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">Email Address</div>
                      <a 
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-slate-200 hover:text-cyan-400 font-semibold"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Box */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#080c14] border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 group-hover:text-cyan-400">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">GitHub Repository</div>
                      <div className="text-sm font-mono text-slate-200 font-semibold">
                        github.com/shahab1729
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit →
                  </span>
                </a>

                {/* LinkedIn Box */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#080c14] border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">LinkedIn Profile</div>
                      <div className="text-sm font-mono text-slate-200 font-semibold">
                        linkedin.com/in/shahab-shaikh
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Connect →
                  </span>
                </a>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-[#080c14] border border-slate-800/80 flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">Current Location</div>
                    <div className="text-sm font-mono text-slate-200 font-semibold">
                      {location}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl text-left">
              <h3 className="text-xl font-bold text-slate-100 font-sans mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Have a question, job opportunity, or project inquiry? Send a message below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-center space-y-2 animate-fadeIn">
                  <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-100 font-mono">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-300 text-xs font-mono">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#080c14] border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#080c14] border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Junior DevOps Role / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#080c14] border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Shahab, I reviewed your DevOps portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#080c14] border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm font-mono"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded-lg font-mono text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-950 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
