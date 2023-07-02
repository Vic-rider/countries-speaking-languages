
import { CountriesSpeakingLanguage } from "../lib";

const _countriesSpeakingLanguage = new CountriesSpeakingLanguage();

describe('Get Country Languages Datas', () => {

    test('should return Country Official Languages', () => {
        expect(_countriesSpeakingLanguage.getCountryOfficialsLanguages('BJ').languages).toBe('French')
        expect(_countriesSpeakingLanguage.getCountryOfficialsLanguages('BJ').languages_codes[0]).toBe('fr')
    })

    test('should return Country Speaking Languages', () => {
        expect(_countriesSpeakingLanguage.getCountryAllSpeakingLanguages('BJ')[1].language).toBe('Yoruba')
        expect(_countriesSpeakingLanguage.getCountryAllSpeakingLanguages('BJ')[1].code).toBe('yo')
        expect(_countriesSpeakingLanguage.getCountryAllSpeakingLanguages('BJ')[2].language).toBe('Fon')
        expect(_countriesSpeakingLanguage.getCountryAllSpeakingLanguages('BJ')[2].code).toBe('fon')
    })

})

describe('Check if specific language is spoken in specific country as Official Language', () => {

  test('should return false because Japan have not French as Official Language', () => {
    expect(_countriesSpeakingLanguage.hasLanguageAsOfficial('fr', 'JP')).toBeFalsy()
  })

  test('should return true because English is Official Language of Cameroun ', () => {
    expect(_countriesSpeakingLanguage.hasLanguageAsOfficial('en', 'CM')).toBeTruthy()
  })

  test('should return false because Belgium have not Russian as Official Language', () => {
    expect(_countriesSpeakingLanguage.hasLanguageAsOfficial('ru', 'BE')).toBeFalsy()
  })

  test('should return true because Spanish is Official Language of Bolivia ', () => {
    expect(_countriesSpeakingLanguage.hasLanguageAsOfficial('es', 'BO')).toBeTruthy()
  })

})

describe('Check if specific language is spoken in specific country', () => {

  test('should return false because Yoruba is not spoken in Russia', () => {
    expect(_countriesSpeakingLanguage.hasLanguage('yo' ,'RU')).toBeFalsy()
  })

  test('should return true because Hindi is spoken in Australia', () => {
    expect(_countriesSpeakingLanguage.hasLanguage('hi' ,'AU')).toBeTruthy()
  })

  test('should return false because Arabic is not spoken in Canada', () => {
    expect(_countriesSpeakingLanguage.hasLanguage('ar' ,'CA')).toBeFalsy()
  })

  test('should return true because Portuguese is spoken in Angola', () => {
    expect(_countriesSpeakingLanguage.hasLanguage('pt' ,'AO')).toBeTruthy()
  })

})

describe('Check if language is spoken in specific country as Official Language', () => {

    test('should return false because this country have not English as Official Language', () => {
        expect(_countriesSpeakingLanguage.hasEnglishAsOfficialLanguage('BJ')).toBeFalsy()
    })
    
    test('should return true because English is it\'s Official Language', () => {
        expect(_countriesSpeakingLanguage.hasEnglishAsOfficialLanguage('CM')).toBeTruthy()
    })
    
    test('should return false because this country have not Mandarian as Official Language', () => {
        expect(_countriesSpeakingLanguage.hasMadarinAsOfficialLanguage('GH')).toBeFalsy()
    })
    
    test('should return true because Mandarian is it\'s Official Language', () => {
        expect(_countriesSpeakingLanguage.hasMadarinAsOfficialLanguage('SG')).toBeTruthy()
    })
    
    test('should return false because this country have not Hindi as Official Language', () => {
        expect(_countriesSpeakingLanguage.hasHindiAsOfficialLanguage('TG')).toBeFalsy()
    })
    
    test('should return true because Hindi is it\'s Official Language', () => {
        expect(_countriesSpeakingLanguage.hasHindiAsOfficialLanguage('IN')).toBeTruthy()
    })
    
    test('should return false because this country have not Spanish as Official Language', () => {
        expect(_countriesSpeakingLanguage.hasSpanishAsOfficialLanguage('BE')).toBeFalsy()
    })
    
    test('should return true because Spanish is it\'s Official Language', () => {
        expect(_countriesSpeakingLanguage.hasSpanishAsOfficialLanguage('AR')).toBeTruthy()
    })
    
    test('should return false because this country have not French as Official Language', () => {
        expect(_countriesSpeakingLanguage.hasFrenchAsOfficialLanguage('BW')).toBeFalsy()
    })
    
    test('should return true because French is it\'s Official Language', () => {
        expect(_countriesSpeakingLanguage.hasFrenchAsOfficialLanguage('CA')).toBeTruthy()
    })
    
    test('should return false because this country have not Arabic as Official Language', () => {
        expect(_countriesSpeakingLanguage.hasArabicAsOfficialLanguage('FR')).toBeFalsy()
    })
    
    test('should return true because Arabic is it\'s Official Language', () => {
        expect(_countriesSpeakingLanguage.hasArabicAsOfficialLanguage('TD')).toBeTruthy()
    })
    

})

describe('Check if language is spoken in specific country', () => {

    test('should return false because this country have not speak English', () => {
        expect(_countriesSpeakingLanguage.hasEnglishAsSpeakingLanguages('BJ')).toBeFalsy()
    })

    test('should return true because English is speaking in this Country', () => {
        expect(_countriesSpeakingLanguage.hasEnglishAsSpeakingLanguages('CM')).toBeTruthy()
    })

    test('should return false because this country have not speak Mandarian', () => {
        expect(_countriesSpeakingLanguage.hasMadarinAsSpeakingLanguages('GH')).toBeFalsy()
    })

    test('should return true because Mandarian is speaking in this Country', () => {
        expect(_countriesSpeakingLanguage.hasMadarinAsSpeakingLanguages('AU')).toBeTruthy()
    })

    test('should return false because this country have not speak Hindi', () => {
        expect(_countriesSpeakingLanguage.hasHindiAsSpeakingLanguages('TG')).toBeFalsy()
    })

    test('should return true because Hindi is speaking in this Country', () => {
        expect(_countriesSpeakingLanguage.hasHindiAsSpeakingLanguages('AU')).toBeTruthy()
    })

    test('should return false because this country have not speak Spanish', () => {
        expect(_countriesSpeakingLanguage.hasSpanishAsSpeakingLanguages('BE')).toBeFalsy()
    })

    test('should return true because Spanish is speaking in this Country', () => {
        expect(_countriesSpeakingLanguage.hasSpanishAsSpeakingLanguages('GQ')).toBeTruthy()
    })

    test('should return false because this country have not speak French', () => {
        expect(_countriesSpeakingLanguage.hasFrenchAsSpeakingLanguages('BW')).toBeFalsy()
    })

    test('should return true because French is speaking in this Country', () => {
        expect(_countriesSpeakingLanguage.hasFrenchAsSpeakingLanguages('CA')).toBeTruthy()
    })

    test('should return false because this country have not speak Arabic', () => {
        expect(_countriesSpeakingLanguage.hasArabicAsSpeakingLanguages('FR')).toBeFalsy()
    })

})

