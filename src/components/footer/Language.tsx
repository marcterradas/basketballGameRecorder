import { useState } from 'react'

import { languages, changeLanguage } from '../../languages/i18n'
import { Language as LanguageInterface } from '../../interfaces'

function Language(): JSX.Element {
    const languageList: Array<JSX.Element> = []
    const [selectedOption, setSelectedOption] = useState('Català')

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
        <select value={selectedOption} onChange={(event) => handleChangeLanguage(event)} className="h-14 w-24 rounded-md text-l text-center cursor-pointer bg-blue-200">
            {languageList}
        </select>
    )
}

export default Language
