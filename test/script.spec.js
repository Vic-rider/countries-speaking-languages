const countries_languages = require('countries-speaking-languages')
const { describe } = require('mocha');
// const countries_languages = require('../index.js');
const { assert } = require('chai');

console.log(countries_languages.getCountryOfficialsLanguages('BJ'))

// describe('Get Country Languages Datas', () => {

//     it('should return Country Official Languages', () => {
//         assert.equal(countries_languages.getCountryOfficialsLanguages('BJ').languages, 'French');
//         assert.equal(countries_languages.getCountryOfficialsLanguages('BJ').languages_codes[0], 'fr');
//     })

//     it('should return Country Speaking Languages', () => {
//         assert.equal(countries_languages.getCountryAllSpeakingLanguages('BJ')[1].language, 'Yoruba');
//         assert.equal(countries_languages.getCountryAllSpeakingLanguages('BJ')[1].code, 'yo');
//         assert.equal(countries_languages.getCountryAllSpeakingLanguages('BJ')[2].language, 'Fon');
//         assert.equal(countries_languages.getCountryAllSpeakingLanguages('BJ')[2].code, 'fon');
//     })

// })

// describe('Check if specific language is spoken in specific country as Official Language', () => {

//   it('should return false because Japan have not French as Official Language', () => {
//     assert.isFalse(countries_languages.hasLanguageAsOfficial('fr', 'JP'));
//   })

//   it('should return true because English is Official Language of Cameroun ', () => {
//     assert.isTrue(countries_languages.hasLanguageAsOfficial('en', 'CM'));
//   })

//   it('should return false because Belgium have not Russian as Official Language', () => {
//     assert.isFalse(countries_languages.hasLanguageAsOfficial('ru', 'BE'));
//   })

//   it('should return true because Spanish is Official Language of Bolivia ', () => {
//     assert.isTrue(countries_languages.hasLanguageAsOfficial('es', 'BO'));
//   })

// })

// describe('Check if specific language is spoken in specific country', () => {

//   it('should return false because Yoruba is not spoken in Russia', () => {
//       assert.isFalse(countries_languages.hasLanguage('yo' ,'RU'));
//   })

//   it('should return true because Hindi is spoken in Australia', () => {
//       assert.isTrue(countries_languages.hasLanguage('hi' ,'AU'));
//   })

//   it('should return false because Arabic is not spoken in Canada', () => {
//       assert.isFalse(countries_languages.hasLanguage('ar' ,'CA'));
//   })

//   it('should return true because Portuguese is spoken in Angola', () => {
//       assert.isTrue(countries_languages.hasLanguage('pt' ,'AO'));
//   })

// })

// describe('Check if language is spoken in specific country as Official Language', () => {

//     it('should return false because this country have not English as Official Language', () => {
//       assert.isFalse(countries_languages.hasEnglishAsOfficialLanguage('BJ'));
//     })
    
//     it('should return true because English is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasEnglishAsOfficialLanguage('CM'));
//     })
    
//     it('should return false because this country have not Mandarian as Official Language', () => {
//       assert.isFalse(countries_languages.hasMadarinAsOfficialLanguage('GH'));
//     })
    
//     it('should return true because Mandarian is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasMadarinAsOfficialLanguage('SG'));
//     })
    
//     it('should return false because this country have not Hindi as Official Language', () => {
//       assert.isFalse(countries_languages.hasHindiAsOfficialLanguage('TG'));
//     })
    
//     it('should return true because Hindi is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasHindiAsOfficialLanguage('IN'));
//     })
    
//     it('should return false because this country have not Spanish as Official Language', () => {
//       assert.isFalse(countries_languages.hasSpanishAsOfficialLanguage('BE'));
//     })
    
//     it('should return true because Spanish is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasSpanishAsOfficialLanguage('AR'));
//     })
    
//     it('should return false because this country have not French as Official Language', () => {
//       assert.isFalse(countries_languages.hasFrenchAsOfficialLanguage('BW'));
//     })
    
//     it('should return true because French is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasFrenchAsOfficialLanguage('CA'));
//     })
    
//     it('should return false because this country have not Arabic as Official Language', () => {
//       assert.isFalse(countries_languages.hasArabicAsOfficialLanguage('FR'));
//     })
    
//     it('should return true because Arabic is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasArabicAsOfficialLanguage('TD'));
//     })
    
//     it('should return false because this country have not Bengali as Official Language', () => {
//       assert.isFalse(countries_languages.hasBengaliAsOfficialLanguage('US'));
//     })
    
//     it('should return true because Bengali is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasBengaliAsOfficialLanguage('BD'));
//     })
    
//     it('should return false because this country have not Russian as Official Language', () => {
//       assert.isFalse(countries_languages.hasRussianAsOfficialLanguage('UZ'));
//     })
    
//     it('should return true because Russian is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasRussianAsOfficialLanguage('RU'));
//     })
    
//     it('should return false because this country have not Portuguese as Official Language', () => {
//       assert.isFalse(countries_languages.hasPortugueseAsOfficialLanguage('CM'));
//     })
    
//     it('should return true because Portuguese is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasPortugueseAsOfficialLanguage('MO'));
//     })
    
//     it('should return false because this country have not Indonesian as Official Language', () => {
//       assert.isFalse(countries_languages.hasIndonesianAsOfficialLanguage('AU'));
//     })
    
//     it('should return true because Indonesian is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasIndonesianAsOfficialLanguage('ID'));
//     })
    
//     it('should return false because this country have not Urdu as Official Language', () => {
//       assert.isFalse(countries_languages.hasUrduOfficiaAslLanguage('BJ'));
//     })
    
//     it('should return true because Urdu is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasUrduOfficiaAslLanguage('PK'));
//     })
    
//     it('should return false because this country have not Japanese as Official Language', () => {
//       assert.isFalse(countries_languages.hasJapaneseAsOfficialLanguage('FR'));
//     })
    
//     it('should return true because Japanese is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasJapaneseAsOfficialLanguage('JP'));
//     })
    
//     it('should return false because this country have not German as Official Language', () => {
//       assert.isFalse(countries_languages.hasFrenchAsOfficialLanguage('JP'));
//     })
    
//     it('should return true because German is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasFrenchAsOfficialLanguage('CH'));
//     })
    
//     it('should return false because this country have not Chinese as Official Language', () => {
//       assert.isFalse(countries_languages.hasChineseAsOfficialLanguage('AU'));
//     })
    
//     it('should return true because Chinese is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasChineseAsOfficialLanguage('HK'));
//     })
    
//     it('should return false because this country have not Turkish as Official Language', () => {
//       assert.isFalse(countries_languages.hasTurkishAsOfficialLanguage('FR'));
//     })
    
//     it('should return true because Turkish is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasTurkishAsOfficialLanguage('TR'));
//     })
    
//     it('should return false because this country have not Korean as Official Language', () => {
//       assert.isFalse(countries_languages.hasKoreanAsOfficialLanguage('KG'));
//     })
    
//     it('should return true because Korean is it\'s Official Language', () => {
//       assert.isTrue(countries_languages.hasKoreanAsOfficialLanguage('KP'));
//     })
    
//     it('should return false because this country have not Yoruba as Official Language', () => {
//       assert.isFalse(countries_languages.hasFrenchAsOfficialLanguage('BW'));
//     })
    
//     it('should return false because this country have not Fon as Official Language', () => {
//       assert.isFalse(countries_languages.hasFrenchAsOfficialLanguage('BW'));
//     })

// })

// describe('Check if language is spoken in specific country', () => {

//     it('should return false because this country have not speak English', () => {
//         assert.isFalse(countries_languages.hasEnglishAsSpeakingLanguages('BJ'));
//     })

//     it('should return true because English is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasEnglishAsSpeakingLanguages('CM'));
//     })

//     it('should return false because this country have not speak Mandarian', () => {
//         assert.isFalse(countries_languages.hasMadarinAsSpeakingLanguages('GH'));
//     })

//     it('should return true because Mandarian is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasMadarinAsSpeakingLanguages('AU'));
//     })

//     it('should return false because this country have not speak Hindi', () => {
//         assert.isFalse(countries_languages.hasHindiAsSpeakingLanguages('TG'));
//     })

//     it('should return true because Hindi is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasHindiAsSpeakingLanguages('AU'));
//     })

//     it('should return false because this country have not speak Spanish', () => {
//         assert.isFalse(countries_languages.hasSpanishAsSpeakingLanguages('BE'));
//     })

//     it('should return true because Spanish is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasSpanishAsSpeakingLanguages('GQ'));
//     })

//     it('should return false because this country have not speak French', () => {
//         assert.isFalse(countries_languages.hasFrenchAsSpeakingLanguages('BW'));
//     })

//     it('should return true because French is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasFrenchAsSpeakingLanguages('CA'));
//     })

//     it('should return false because this country have not speak Arabic', () => {
//         assert.isFalse(countries_languages.hasArabicAsSpeakingLanguages('FR'));
//     })

//     it('should return true because Arabic is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasArabicAsSpeakingLanguages('TD'));
//     })

//     it('should return false because this country have not speak Bengali', () => {
//         assert.isFalse(countries_languages.hasBengaliAsSpeakingLanguages('US'));
//     })

//     it('should return true because Bengali is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasBengaliAsSpeakingLanguages('BD'));
//     })

//     it('should return false because this country have not speak Russian', () => {
//         assert.isFalse(countries_languages.hasRussianAsSpeakingLanguages('BJ'));
//     })

//     it('should return true because Russian is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasRussianAsSpeakingLanguages('TM'));
//     })

//     it('should return false because this country have not speak Portuguese', () => {
//         assert.isFalse(countries_languages.hasPortugueseAsSpeakingLanguages('TG'));
//     })

//     it('should return true because Portuguese is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasPortugueseAsSpeakingLanguages('UY'));
//     })

//     it('should return false because this country have not speak Indonesian', () => {
//         assert.isFalse(countries_languages.hasIndonesianAsSpeakingLanguages('TG'));
//     })

//     it('should return true because Indonesian is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasIndonesianAsSpeakingLanguages('ID'));
//     })

//     it('should return false because this country have not speak Japanese', () => {
//         assert.isFalse(countries_languages.hasJapaneseAsSpeakingLanguages('FR'));
//     })

//     it('should return true because Japanese is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasJapaneseAsSpeakingLanguages('JP'));
//     })

//     it('should return false because this country have not speak German', () => {
//         assert.isFalse(countries_languages.hasGermanAsSpeakingLanguages('FR'));
//     })

//     it('should return true because German is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasGermanAsSpeakingLanguages('AR'));
//     })

//     it('should return false because this country have not speak Chinese', () => {
//         assert.isFalse(countries_languages.hasChineseAsSpeakingLanguages('AU'));
//     })

//     it('should return true because Chinese is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasChineseAsSpeakingLanguages('HK'));
//     })

//     it('should return false because this country have not speak Turkish', () => {
//         assert.isFalse(countries_languages.hasTurkishAsSpeakingLanguages('FR'));
//     })

//     it('should return true because Turkish is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasTurkishAsSpeakingLanguages('TR'));
//     })

//     it('should return false because this country have not speak Korean', () => {
//         assert.isFalse(countries_languages.hasKoreanAsSpeakingLanguages('KG'));
//     })

//     it('should return true because Korean is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasKoreanAsSpeakingLanguages('KP'));
//     })

//     it('should return false because this country have not speak Yoruba', () => {
//         assert.isFalse(countries_languages.hasYorubaAsSpeakingLanguages('GH'));
//     })

//     it('should return true because Yoruba is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasYorubaAsSpeakingLanguages('NG'));
//     })

//     it('should return false because this country have not speak Fon', () => {
//         assert.isFalse(countries_languages.hasFonAsSpeakingLanguages('NG'));
//     })

//     it('should return true because Fon is speaking in this Country', () => {
//         assert.isTrue(countries_languages.hasFonAsSpeakingLanguages('BJ'));
//     })

// })

