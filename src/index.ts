const data = require('../datas.json');

export class CountriesSpeakingLanguage {

  constructor() { }

  getCountry (country_code:string) {
    return data.countries[country_code];
  };

  getCountryOfficialsLanguages (country_code:string) {
    const country = data.countries[country_code];
    const countryLanguages = {
      'languages' : country.official_language,
      'languages_codes': country.official_language_codes
    }
    return countryLanguages;
  };
  
  getCountryAllSpeakingLanguages (country_code:string) {
    return data.countries[country_code].all_speaking_languages;
  };
  
  hasLanguageAsOfficial (language_code:string, country_code:string) {
    
    const country = data.countries[country_code];
  
    for(let lang of country.official_language_codes) {
  
      if(lang === language_code) {
        return true;
      }
  
    }
  
    return false;
  
  };
  
  hasLanguage (language_code:string, country_code:string) {
  
    const country = data.countries[country_code];
  
    for(let lang of country.all_speaking_languages) {
  
      if(lang.code === language_code) {
        return true;
      }
  
    }
  
    return false;
  
  };
  
  // Check if country speak a s pecific language as Official language
  hasEnglishAsOfficialLanguage (country_code:string) {
    
    const english_countries_officials_languages = data.countriesOfficialsLanguages.
    english_countries_officials_languages;
    
    for(let country of english_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'en') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasMadarinAsOfficialLanguage (country_code:string) {
    
    const mandarin_countries_officials_languages = data.countriesOfficialsLanguages.
    mandarin_countries_officials_languages;
    
    for(let country of mandarin_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'zh') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasHindiAsOfficialLanguage (country_code:string) {
    
    const hindi_countries_officials_languages = data.countriesOfficialsLanguages.
    hindi_countries_officials_languages;
    
    for(let country of hindi_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'hi') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasSpanishAsOfficialLanguage (country_code:string) {
    
    const spanish_countries_officials_languages = data.countriesOfficialsLanguages.
    spanish_countries_officials_languages;
    
    for(let country of spanish_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'es') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasFrenchAsOfficialLanguage (country_code:string) {
    
    const french_countries_officials_languages = data.countriesOfficialsLanguages.
    french_countries_officials_languages;
    
    for(let country of french_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'fr') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasArabicAsOfficialLanguage (country_code:string) {
    
    const arabic_countries_officials_languages = data.countriesOfficialsLanguages.
    arabic_countries_officials_languages;
    
    for(let country of arabic_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'ar') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasBengaliAsOfficialLanguage (country_code:string) {
    
    const bengali_countries_officials_languages = data.countriesOfficialsLanguages.
    bengali_countries_officials_languages;
    
    for(let country of bengali_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'bn') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasRussianAsOfficialLanguage (country_code:string) {
    
    const russian_countries_officials_languages = data.countriesOfficialsLanguages.
    russian_countries_officials_languages;
    
    for(let country of russian_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'ru') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasPortugueseAsOfficialLanguage (country_code:string) {
    
    const portuguese_countries_officials_languages = data.countriesOfficialsLanguages.
    portuguese_countries_officials_languages;
    
    for(let country of portuguese_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'pt') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasIndonesianAsOfficialLanguage (country_code:string) {
    
    const indonesian_countries_officials_languages = data.countriesOfficialsLanguages.
    indonesian_countries_officials_languages;
    
    for(let country of indonesian_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'id') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasUrduAsOfficiaAslLanguage (country_code:string) {
    
    const urdu_countries_officials_languages = data.countriesOfficialsLanguages.
    urdu_countries_officials_languages;
    
    for(let country of urdu_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'ur') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasJapaneseAsOfficialLanguage (country_code:string) {
    
    const japanese_countries_officials_languages = data.countriesOfficialsLanguages.
    japanese_countries_officials_languages;
    
    for(let country of japanese_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'ja') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasGermanAsOfficialLanguage (country_code:string) {
    
    const german_countries_officials_languages = data.countriesOfficialsLanguages.
    german_countries_officials_languages;
    
    for(let country of german_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'en') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasChineseAsOfficialLanguage (country_code:string) {
    
    const chinese_countries_officials_languages = data.countriesOfficialsLanguages.
    chinese_countries_officials_languages;
    
    for(let country of chinese_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'zh') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasTurkishAsOfficialLanguage (country_code:string) {
    
    const turkish_countries_officials_languages = data.countriesOfficialsLanguages.
    turkish_countries_officials_languages;
    
    for(let country of turkish_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'tr') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasKoreanAsOfficialLanguage (country_code:string) {
    
    const korean_countries_officials_languages = data.countriesOfficialsLanguages.
    korean_countries_officials_languages;
    
    for(let country of korean_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'ko') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasYorubaAsOfficialLanguage (country_code:string) {
    
    const yoruba_countries_officials_languages = data.countriesOfficialsLanguages.
    yoruba_countries_officials_languages;
    
    for(let country of yoruba_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'yo') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasFonAsOfficialLanguage (country_code:string) {
    
    const fon_countries_officials_languages = data.countriesOfficialsLanguages.
    fon_countries_officials_languages;
    
    for(let country of fon_countries_officials_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.official_language_codes) {
    
          if(lang === 'fon') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  
  
  // Check if country speak a specific language as local language
  hasEnglishAsSpeakingLanguages (country_code:string) {
  
    const english_Countries_speaking_languages = data.countriesSpeakingLanguages.
    english_Countries_speaking_languages;
    
    for(let country of english_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'en') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasMadarinAsSpeakingLanguages (country_code:string) {
  
    const mandarin_Countries_speaking_languages = data.countriesSpeakingLanguages.
    mandarin_Countries_speaking_languages;
    
    for(let country of mandarin_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
          
          if(lang.code === 'zh') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasHindiAsSpeakingLanguages (country_code:string) {
  
    const hindi_Countries_speaking_languages = data.countriesSpeakingLanguages.
    hindi_Countries_speaking_languages;
    
    for(let country of hindi_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'hi') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasSpanishAsSpeakingLanguages (country_code:string) {
  
    const spanish_Countries_speaking_languages = data.countriesSpeakingLanguages.
    spanish_Countries_speaking_languages;
    
    for(let country of spanish_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'es') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;  
  
  };
  
  hasFrenchAsSpeakingLanguages (country_code:string) {
    
    const french_Countries_speaking_languages = data.countriesSpeakingLanguages.
    french_Countries_speaking_languages;
    
    for(let country of french_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'fr') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;  
  
  };
  
  hasArabicAsSpeakingLanguages (country_code:string) {
  
    const arabic_Countries_speaking_languages = data.countriesSpeakingLanguages.
    arabic_Countries_speaking_languages;
    
    for(let country of arabic_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'ar') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasBengaliAsSpeakingLanguages (country_code:string) {
  
    const bengali_Countries_speaking_languages = data.countriesSpeakingLanguages.
    bengali_Countries_speaking_languages;
    
    for(let country of bengali_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'bn') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasRussianAsSpeakingLanguages (country_code:string) {
  
    const russian_Countries_speaking_languages = data.countriesSpeakingLanguages.
    russian_Countries_speaking_languages;
    
    for(let country of russian_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'ru') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasPortugueseAsSpeakingLanguages (country_code:string) {
  
    const portuguese_Countries_speaking_languages = data.countriesSpeakingLanguages.
    portuguese_Countries_speaking_languages;
    
    for(let country of portuguese_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'pt') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasIndonesianAsSpeakingLanguages (country_code:string) {
  
    const indonesian_Countries_speaking_languages = data.countriesSpeakingLanguages.
    indonesian_Countries_speaking_languages;
    
    for(let country of indonesian_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'id') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasUrduSpeakingLanguage (country_code:string) {
  
    const urdu_Countries_speaking_languages = data.countriesSpeakingLanguages.
    urdu_Countries_speaking_languages;
    
    for(let country of urdu_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'ur') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasJapaneseAsSpeakingLanguages (country_code:string) {
  
    const japanese_Countries_speaking_languages = data.countriesSpeakingLanguages.
    japanese_Countries_speaking_languages;
    
    for(let country of japanese_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'ja') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasGermanAsSpeakingLanguages (country_code:string) {
  
    const german_Countries_speaking_languages = data.countriesSpeakingLanguages.
    german_Countries_speaking_languages;
    
    for(let country of german_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'de') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasJavaneseAsSpeakingLanguages (country_code:string) {
  
    const english_Countries_speaking_languages = data.countriesSpeakingLanguages.
    javanese_Countries_speaking_languages;
    
    for(let country of english_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'jv') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasChineseAsSpeakingLanguages (country_code:string) {
  
    const chinese_Countries_speaking_languages = data.countriesSpeakingLanguages.
    chinese_Countries_speaking_languages;
    
    for(let country of chinese_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'zh') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasTurkishAsSpeakingLanguages (country_code:string) {
  
    const turkish_Countries_speaking_languages = data.countriesSpeakingLanguages.
    turkish_Countries_speaking_languages;
    
    for(let country of turkish_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'tr') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasKoreanAsSpeakingLanguages (country_code:string) {
  
    const korean_Countries_speaking_languages = data.countriesSpeakingLanguages.
    korean_Countries_speaking_languages;
    
    for(let country of korean_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'ko') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasYorubaAsSpeakingLanguages (country_code:string) {
  
    const yoruba_Countries_speaking_languages = data.countriesSpeakingLanguages.
    yoruba_Countries_speaking_languages;
    
    for(let country of yoruba_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'yo') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };
  
  hasFonAsSpeakingLanguages (country_code:string) {
  
    const fon_Countries_speaking_languages = data.countriesSpeakingLanguages.
    fon_Countries_speaking_languages;
    
    for(let country of fon_Countries_speaking_languages) {
  
      if(country.country_code === country_code) {
  
        for(let lang of country.all_speaking_languages) {
    
          if(lang.code === 'fon') {
            return true;
          }
    
        }
  
      }
  
    }
  
    return false;
  
  };

}

//   getCountry,
//   getCountryOfficialsLanguages,
//   getCountryAllSpeakingLanguages,
//   hasLanguageAsOfficial,
//   hasLanguage,

//   hasEnglishAsOfficialLanguage,
//   hasMadarinAsOfficialLanguage,
//   hasHindiAsOfficialLanguage,
//   hasSpanishAsOfficialLanguage,
//   hasFrenchAsOfficialLanguage,
//   hasArabicAsOfficialLanguage,
//   hasBengaliAsOfficialLanguage,
//   hasRussianAsOfficialLanguage,
//   hasPortugueseAsOfficialLanguage,
//   hasIndonesianAsOfficialLanguage,
//   hasUrduAsOfficiaAslLanguage,
//   hasJapaneseAsOfficialLanguage,
//   hasGermanAsOfficialLanguage,
//   hasChineseAsOfficialLanguage,
//   hasTurkishAsOfficialLanguage,
//   hasKoreanAsOfficialLanguage,
//   hasYorubaAsOfficialLanguage,
//   hasFonAsOfficialLanguage,

//   hasEnglishAsSpeakingLanguages,
//   hasMadarinAsSpeakingLanguages,
//   hasHindiAsSpeakingLanguages,
//   hasSpanishAsSpeakingLanguages,
//   hasFrenchAsSpeakingLanguages,
//   hasArabicAsSpeakingLanguages,
//   hasBengaliAsSpeakingLanguages,
//   hasRussianAsSpeakingLanguages,
//   hasPortugueseAsSpeakingLanguages,
//   hasIndonesianAsSpeakingLanguages,
//   hasUrduSpeakingLanguage,
//   hasJapaneseAsSpeakingLanguages,
//   hasGermanAsSpeakingLanguages,
//   hasJavaneseAsSpeakingLanguages,
//   hasChineseAsSpeakingLanguages,
//   hasTurkishAsSpeakingLanguages,
//   hasKoreanAsSpeakingLanguages,
//   hasYorubaAsSpeakingLanguages,
//   hasFonAsSpeakingLanguages
// };