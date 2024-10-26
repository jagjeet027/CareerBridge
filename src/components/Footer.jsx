import React from 'react';
import style from './Footer.module.css';

const FooterSection = ({ title, items }) => (
  <div className={style.footerSection}>
    <h4>{title}</h4>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: 'Product',
      items: ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'],
    },
    {
      title: 'Use Cases',
      items: ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'],
    },
    {
      title: 'Resources',
      items: ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'],
    },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerSection}>
          <h2>CareerBridge</h2>
          <p>High level experience in web design and development knowledge, producing quality work.</p>
          <button className={style.getStartedBtn}>Get started</button>
        </div>
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} items={section.items} />
        ))}
      </div>

      <div className={style.footerBottom}>
        <p>© 2024 oppertunity rights</p>
        <ul className={style.legalLinks}>
          {['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'].map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
