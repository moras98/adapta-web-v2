// import React from "react";
// import './LanguageSelector.css';

// export default function LanguageSelector({ language }) {

//   const englishPaths = (currentPath) => {
//     if (currentPath === '/'){
//       return  '/en'
//     }
//     if (currentPath === '/#services'){
//       return  '/en'
//     }
//     if (currentPath === '/experiencia'){
//       return '/en/experience'
//     }
//     if (currentPath === '/equipo'){
//       return '/en/team'
//     }
//     if (currentPath === '/sobre-nosotros'){
//       return '/en/about-us'
//     }
//     if (currentPath === '/contacto'){
//       return '/en/contact'
//     }
//   }

//   const spanishPaths = (currentPath) => {
//     if (currentPath === '/en'){
//       return  '/'
//     }
//     if (currentPath === '/en#services'){
//       return  '/'
//     }
//     if (currentPath === '/en/experience'){
//       return '/experiencia'
//     }
//     if (currentPath === '/en/about-us'){
//       return '/sobre-nosotros'
//     }
//     if (currentPath === '/en/team'){
//       return '/equipo'
//     }
//     if (currentPath === '/en/contact'){
//       return '/contacto'
//     }
//   }

//   const changeLanguage = (paths) => {
//     const currentPath = window.location.pathname;
//     const newPath = paths(currentPath);
//     window.location.href = newPath;
//   }

//   return (
//     <div className="language-selector">
//       {language === 'es' ? (
//         <span role="img" aria-label="English" onClick={()=>changeLanguage(englishPaths)}>🇬🇧</span>
//       ) : (
//         <span role="img" aria-label="Español" onClick={()=>changeLanguage(spanishPaths)}>🇺🇾</span>
//       )}
//     </div>
//   );
// }

import React from "react";
import './LanguageSelector.css';

export default function LanguageSelector({ language }) {

  const getEnglishPath = (currentPath) => {
    if (currentPath.startsWith('/en')) {
      return currentPath;
    }
  
    switch (currentPath) {
      case '/':
        return '/en';
      case '/#services':
        return '/en';
      case '/experiencia':
        return '/en/experience';
      case '/equipo':
        return '/en/team';
      case '/sobre-nosotros':
        return '/en/about-us';
      case '/contacto':
        return '/en/contact';
      default:
        // Check if the path includes "/experiencia" and return "/experiencia" in that case
        if (currentPath.includes('/experiencia')) {
          return '/en/experience';
        }
        // If not, assume other paths start with '/en', so remove it
        return currentPath.slice(3);
      }
    }
  
  const getSpanishPath = (currentPath) => {
    if (!currentPath.startsWith('/en')) {
      return currentPath;
    }
  
    switch (currentPath) {
      case '/en':
        return '/';
      case '/en#services':
        return '/';
      case '/en/experience':
        return '/experiencia';
      case '/en/about-us':
        return '/sobre-nosotros';
      case '/en/team':
        return '/equipo';
      case '/en/contact':
        return '/contacto';
      default:
        // Check if the path includes "/experiencia" and return "/experiencia" in that case
        if (currentPath.includes('/en/experience')) {
          return '/experiencia';
        }
        // If not, assume other paths start with '/en', so remove it
        return currentPath;
      }
    }
  

  const changeLanguage = (getPathFunction) => {
    const currentPath = window.location.pathname;
    const newPath = getPathFunction(currentPath);
    if (currentPath !== newPath) {
      window.location.href = newPath;
    }
  };

  return (
    // <div className="language-selector">
    //   {language === 'es' ? (
    //     <span role="img" aria-label="English" onClick={() => changeLanguage(getEnglishPath)}>🇬🇧</span>
    //   ) : (
    //     <span role="img" aria-label="Español" onClick={() => changeLanguage(getSpanishPath)}>🇺🇾</span>
    //   )}
    // </div>
    <div className="language-selector">
      {language === 'es' ? (
        <img src="/assets/images/flags/gb-flag.png" alt="English" style={{ width: '1.3em', height: '1.3em' }} onClick={() => changeLanguage(getEnglishPath)} />
      ) : (
        <img src="/assets/images/flags/uruguay-flag.png" alt="Español" style={{ width: '1.3em', height: '1.3em' }} onClick={() => changeLanguage(getSpanishPath)} />
      )}
    </div>
  );
}
