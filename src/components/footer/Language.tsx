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

    return <select>{languageList}</select>
}

export default Language
