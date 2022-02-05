import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translations from './translations.json'

import { Language } from '../interfaces'

export const languages: Language[] = [
    { key: 'es', value: 'Castellà' },
    { key: 'cat', value: 'Català' },
    { key: 'en', value: 'English' }
]

export const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
}

export const defaultLanguage: string | null = localStorage.getItem('language')

i18n.use(initReactI18next).init(translations)
