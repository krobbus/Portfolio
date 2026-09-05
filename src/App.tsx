import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Analytics } from '@vercel/analytics/react';

import './App.css';
import './styles/MediaSizing.css';
import './styles/Keyframes.css';
import './styles/Font.css';

import Header from './components/Header.tsx';
import About from './components/About.tsx';
import Projects from './components/Project.tsx';
import Certifications from './components/Certifications.tsx';
import { certSlides } from './references/CertRef.tsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const certificationsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      console.error(err);
      alert('Something went wrong — please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id='portfolioContainer'>
      <Analytics />

      <header ref={headerRef}>
        <Header 
          contactRef={contactRef}
          projectsRef={projectsRef}
        />
      </header>

      <main>
        <nav>
          <span onClick={() => scrollToSection(headerRef)}>Alef Justin Loresca</span>

          <div id='menuLinks'>
            <button onClick={() => scrollToSection(headerRef)}>Home</button>
            <button onClick={() => scrollToSection(aboutRef)}>About Me</button>
            <button onClick={() => scrollToSection(stackRef)}>Stacks</button>
            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
            <button onClick={() => scrollToSection(certificationsRef)}>Certifications</button>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </div>

          <img
            className={`menuToggle ${menuOpen ? 'hidden' : ''}`}
            src='./images/Icons/Menu.png'
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
            alt='Menu icon'
          />
        
          <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
            <img
              className='menuToggleInside'
              src='./images/Icons/Menu.png'
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
              alt='Menu icon'
            />

            <div id='mobileMenuLinks'>
              <button onClick={() => scrollToSection(headerRef)}>Home</button>
              <button onClick={() => scrollToSection(aboutRef)}>About Me</button>
              <button onClick={() => scrollToSection(stackRef)}>Stacks</button>
              <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
              <button onClick={() => scrollToSection(certificationsRef)}>Certifications</button>
              <button onClick={() => scrollToSection(contactRef)}>Contact</button>
            </div>
          </div>
        </nav>

        <section id='aboutSection' ref={aboutRef}>
          <About contactRef={contactRef} />
        </section>

        <section id='projectsSection' ref={projectsRef}>
          <h3>SELECTED WORKS</h3>

          <Projects />
        </section>

        <section id='certificationsSection' ref={certificationsRef}>
          <h3>CERTIFICATIONS</h3>

          <Certifications slides={certSlides} />
        </section>
      </main>

      <footer id='contactSection' ref={contactRef}>
        <div id='emailContainer'>
          <h3>KEEP IN TOUCH</h3>
          
          <form onSubmit={handleSubmit}>
            <input id='nameInput' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='(OPTIONAL) MY NAME IS' />
            <input id='emailInput' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='MY EMAIL IS' required />
            <input id='numberInput' type='tel' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='(OPTIONAL) MY PHONE NUMBER IS' />

            <select id='subjectSelect'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option id='default' value='' disabled hidden>SUBJECT LINE</option>
              <option value="I'D LIKE TO SET A MEETING">I'D LIKE TO SET A MEETING</option>
              <option value="I'D LIKE TO ASK A QUESTION">I'D LIKE TO ASK A QUESTION</option>
              <option value="I'D LIKE TO MAKE A PROPOSAL">I'D LIKE TO MAKE A PROPOSAL</option>
            </select>

            {subject === "I'D LIKE TO SET A MEETING" ? (
              <button
                type='button'
                onClick={() => window.open('https://calendly.com/lorescajustin/15-minutes-meeting', '_blank', 'noopener,noreferrer')}
              >
                Book a time on Calendly &rarr;
              </button>
            ) : (
              <>
                <textarea
                  id='messageInput'
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I'D LIKE TO TALK ABOUT"
                  required
                />

                <button type='submit' disabled={sending}>
                  {sending ? ' Sending...' : ' Send Message'}
                </button>
              </>
            )}
          </form>

          <div id='contactContainers'>
            <a href="https://github.com/krobbus" target="_blank" rel="noopener noreferrer">
              <img src="./images/Icons/Github.png" alt="Github Icon" />
            </a>

            <a href='https://www.linkedin.com/in/alefjustinloresca/' target='_blank' rel='noopener noreferrer'>
              <img src='./images/Icons/LinkedIn.png' alt='LinkedIn Icon' />
            </a>

            <a href='https://www.instagram.com/ajloresca/' target='_blank' rel='noopener noreferrer'>
              <img src='./images/Icons/Instagram.png' alt='Instagram Icon' />
            </a>

            <a href='https://m.me/lorescaalef/' target='_blank' rel='noopener noreferrer'>
              <img src='./images/Icons/Messenger.png' alt='Messenger Icon' />
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default App