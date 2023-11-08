import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n
  .use(initReactI18next) // Conectar con React
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Idioma de respaldo si la traducción no está disponible
    interpolation: {
      escapeValue: false, // React manejará la interpolación
    },
  });

export default i18n;
