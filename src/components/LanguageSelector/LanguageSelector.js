import React from "react";
import './LanguageSelector.css';

export default function LanguageSelector({ language }) {

  const englishPaths = (currentPath) => {
    if (currentPath === '/'){
      return  '/en'
    }
    if (currentPath === '/experiencia'){
      return '/en/experience'
    }
    if (currentPath === '/equipo'){
      return '/en/team'
    }
    if (currentPath === '/sobre-nosotros'){
      return '/en/about-us'
    }
    if (currentPath === '/contacto'){
      return '/en/contact'
    }
  }

  const spanishPaths = (currentPath) => {
    if (currentPath === '/en'){
      return  '/'
    }
    if (currentPath === '/en/experience'){
      return '/experiencia'
    }
    if (currentPath === '/en/about-us'){
      return '/sobre-nosotros'
    }
    if (currentPath === '/en/team'){
      return '/equipo'
    }
    if (currentPath === '/en/contact'){
      return '/contacto'
    }
  }

  const changeLanguage = (paths) => {
    const currentPath = window.location.pathname;
    const newPath = paths(currentPath);
    window.location.href = newPath;
  }

  return (
    <div className="language-selector">
      {language === 'es' ? (
        <span role="img" aria-label="English" onClick={()=>changeLanguage(englishPaths)}>🇬🇧</span>
      ) : (
        <span role="img" aria-label="Español" onClick={()=>changeLanguage(spanishPaths)}>🇺🇾</span>
      )}
    </div>
  );
}
