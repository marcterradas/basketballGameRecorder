import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translations from './translations.json'

import { Language } from '../interfaces'

export const languages: Language[] = [
    { key: 'es', value: 'Castellà' },
    { key: 'ca', value: 'Català' },
    { key: 'en', value: 'English' }
]

i18n.use(initReactI18next).init(translations)
