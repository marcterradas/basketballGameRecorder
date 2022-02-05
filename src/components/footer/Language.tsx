import { languages } from '../../languages/i18n'
import { Language as LanguageInterface } from '../../interfaces'

function Language(): JSX.Element {
    const languageList: Array<JSX.Element> = []

    for (let languageKey in languages) {
        const language: LanguageInterface = languages[languageKey]
        const languageElement: JSX.Element = (
            <option key={language.key} value={language.value}>
                {language.value}
            </option>
        )
        languageList.push(languageElement)
    }

    return <select className="h-14 w-24 rounded-md text-l text-center cursor-pointer bg-blue-200">{languageList}</select>
}

export default Language