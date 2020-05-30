import React from 'react'
import Language from './Language'

const Languages = ({languages}) => languages.map(language => <Language key = {language.iso639_2} lang = {language.name} />)

export default Languages