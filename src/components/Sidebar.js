import React from 'react';
import { Link } from 'react-router-dom';  // Link bileşenini kullanıyoruz
import './Sidebar.css';

const Sidebar = ({ language, changeLanguage }) => {
  return (
    <div className="sidebar">
      <div className="language-switcher">
        <button
          onClick={() => changeLanguage('en')}
          className={`en ${language === 'en' ? 'active' : ''}`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('de')}
          className={`de ${language === 'de' ? 'active' : ''}`}
        >
          Deutsch
        </button>
      </div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </nav> */}
      {/* <div className="image"></div> */}

      <div className="aboutme" style={{ fontSize: 18 }}>
        {
          language === 'en' ? (
            <div dangerouslySetInnerHTML={{
              __html: `
      <p>Welcome to my personal journey. I've created this site because I felt that a traditional CV couldn't fully capture my story. Here, I aim to share my experiences, milestones, and the path I'm taking to better track developments in my life and share them with you.</p>
      <p>So far, I've developed myself in both management and technical fields and have a keen interest in entrepreneurship. I'm a self-learner, constantly seeking new knowledge. Looking ahead, I'm excited to work on future-defining topics like AI agents, Intelligent Automation, and Artificial Intelligence.</p>
    ` }} />
          ) : language === 'de' ? (
            <div dangerouslySetInnerHTML={{
              __html: `
      <p>Willkommen auf meiner persönlichen Reise. Ich habe diese Seite erstellt, weil ich das Gefühl hatte, dass ein traditioneller Lebenslauf meine Geschichte nicht vollständig erfassen kann. Hier möchte ich meine Erfahrungen, Meilensteine und den Weg, den ich einschlage, teilen, um die Entwicklungen in meinem Leben besser verfolgen und mit Ihnen teilen zu können.</p>
      <p>Bisher habe ich mich sowohl im Management als auch im technischen Bereich weiterentwickelt und habe ein großes Interesse am Unternehmertum. Ich bin Autodidakt und stets bestrebt, Neues zu lernen. In Zukunft freue ich mich darauf, an zukunftsweisenden Themen wie KI-Agenten, Intelligente Automatisierung und Künstliche Intelligenz zu arbeiten.</p>
    ` }} />
          ) : (
            "About"
          )
        }


      </div>
      <div class="social-menu">
        <ul>
          <li><a href="https://github.com/t-gursu" target="blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://www.instagram.com/hiagaga/" target="blank"><i class="fab fa-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com/in/gursutoparlak/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div >
  );
};

export default Sidebar;
