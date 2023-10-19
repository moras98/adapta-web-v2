import React from "react";
import './LanguageSelector.css';

export default function LanguageSelector({ language }) {
  return (
    <div className="language-selector">
      {language === 'es' ? (
        <span role="img" aria-label="English">🇬🇧</span>
      ) : (
        <span role="img" aria-label="Español">🇺🇾</span>
      )}
    </div>
  );
}
