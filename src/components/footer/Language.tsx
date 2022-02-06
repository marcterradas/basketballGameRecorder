import { useState } from 'react'

import { languages, changeLanguage, defaultLanguage } from '../../languages/i18n'
import { Language as LanguageInterface } from '../../interfaces'

function Language(): JSX.Element {
    const languageList: Array<JSX.Element> = []
    const [selectedOption, setSelectedOption] = useState(defaultLanguage ? defaultLanguage : 'en')

    for (let languageKey in languages) {
        const language: LanguageInterface = languages[languageKey]
        const languageElement: JSX.Element = (
            <option key={language.key} value={language.key}>
                {language.value}
            </option>
        )
        languageList.push(languageElement)
    }

    const handleChangeLanguage = (event: any): void => {
        const language: string = event.target.value
        setSelectedOption(language)
        changeLanguage(language)
    }

    return (
        <select value={selectedOption} onChange={(event) => handleChangeLanguage(event)} className="h-14 w-32 rounded-md text-l text-center cursor-pointer border-2 border-stone-500 bg-white font-bold">
            {languageList}
        </select>
    )
}

export default Language
