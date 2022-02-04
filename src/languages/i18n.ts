import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translations from './translations.json'

export const languages = {
    es: 'Castellà',
    ca: 'Català',
    en: 'English'
}

i18n.use(initReactI18next).init(translations)
