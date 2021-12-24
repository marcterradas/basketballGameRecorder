import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

import translations from './translations.json'

i18n.use(initReactI18next).init(translations)