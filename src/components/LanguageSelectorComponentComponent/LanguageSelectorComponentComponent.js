import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelectorComponentComponent.css';

const LanguageSelectorComponentComponent = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Español');
  const selectorRef = useRef(null);

  const changeLanguage = (lng, languageName) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    setSelectedLanguage(languageName);
  };

  const handleClickOutside = (e) => {
    if (selectorRef.current && !selectorRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`language-selector ${isOpen ? 'open' : ''} top-left`} ref={selectorRef}>
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage}
        <i className={`arrow ${isOpen ? 'arrow-down' : ''}`} />
        {isOpen ? '' : ''} {/* Flecha Unicode */}
      </div>
      <ul className={`language-menu ${isOpen ? 'open' : ''}`}>
        <li onClick={() => changeLanguage('en', 'Inglés')}>Inglés</li>
        <li onClick={() => changeLanguage('es', 'Español')}>Español</li>
        <li onClick={() => changeLanguage('pt', 'Portugués')}>Portugués</li>
        {/* Agrega más idiomas aquí según tus necesidades */}
      </ul>
    </div>
  );
};

export default LanguageSelectorComponentComponent;
