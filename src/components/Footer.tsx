import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Footer({ footerRef }: { footerRef: React.RefObject<HTMLElement | null> }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                { name, email, number, subject, message },
                import.meta.env.VITE_PUBLIC_KEY
            );
            alert("Message sent! I'll get back to you soon.");
            setName('');
            setEmail('');
            setNumber('');
            setSubject('');
            setMessage('');
        } catch (err) {
            alert(`Something went wrong — please try again. ${err}`);
        } finally {
            setSending(false);
        }
    };

    return(
        <footer id="contactSection" ref={footerRef} className="pt-12 pb-20 border-t border-white/10">
            <div id="emailContainer" className="flex flex-col items-end backdrop-blur-2xl bg-slate-900/40 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.6)] space-y-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-2 text-center lg:text-right">
                    <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                        KEEP IN TOUCH
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base">Have a project in mind or want to collaborate? Drop me a message below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            id="nameInput"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="(OPTIONAL) MY NAME IS"
                            className="w-full bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 outline-none backdrop-blur-md transition-all text-sm"
                        />

                        <input
                            id="emailInput"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="MY EMAIL IS *"
                            required
                            className="w-full bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 outline-none backdrop-blur-md transition-all text-sm"
                        />
                    </div>

                    <input
                        id="numberInput"
                        type="tel"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="(OPTIONAL) MY PHONE NUMBER IS"
                        className="w-full bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 outline-none backdrop-blur-md transition-all text-sm"
                    />

                    <select
                        id="subjectSelect"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full bg-[#0d121f] border border-white/10 focus:border-blue-400 rounded-xl px-4 py-3.5 text-white outline-none transition-all text-sm cursor-pointer"
                    >
                        <option id="default" value="" disabled hidden>SUBJECT LINE *</option>
                        <option value="I'D LIKE TO SET A MEETING" className="bg-slate-900 text-white">I'D LIKE TO SET A MEETING</option>
                        <option value="I'D LIKE TO ASK A QUESTION" className="bg-slate-900 text-white">I'D LIKE TO ASK A QUESTION</option>
                        <option value="I'D LIKE TO MAKE A PROPOSAL" className="bg-slate-900 text-white">I'D LIKE TO MAKE A PROPOSAL</option>
                    </select>

                    {subject === "I'D LIKE TO SET A MEETING" ? (
                        <button
                            type="button"
                            onClick={() => window.open('https://calendly.com/lorescajustin/15-minutes-meeting', '_blank', 'noopener,noreferrer')}
                            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            Book a time on Calendly
                        </button>
                    ) : (
                        <div className="space-y-6">
                            <textarea
                                id="messageInput"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="I'D LIKE TO TALK ABOUT *"
                                required
                                className="w-full bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 outline-none backdrop-blur-md transition-all text-sm resize-none"
                            />

                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    )}
                </form>

                <div className="w-full border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <span className="text-slate-400 text-sm">&copy; 2026 Alef Justin Loresca. All rights reserved.</span>

                    <div id="contactContainers" className="flex items-center space-x-4">
                        {[
                            { href: 'https://github.com/krobbus', alt: 'Github', icon: './images/Icons/Github.png' },
                            { href: 'https://www.linkedin.com/in/alefjustinloresca/', alt: 'LinkedIn', icon: './images/Icons/LinkedIn.png' },
                            { href: 'https://www.instagram.com/ajloresca/', alt: 'Instagram', icon: './images/Icons/Instagram.png' },
                            { href: 'https://m.me/lorescaalef/', alt: 'Messenger', icon: './images/Icons/Messenger.png' },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-md group"
                            >
                                <img src={social.icon} alt={social.alt} className="w-5 h-5 invert brightness-200 group-hover:brightness-100 transition-all" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}