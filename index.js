const data = require('./datas.json');



getCountry = function (country_code) {
  return data.countries[country_code];
};

getCountryOfficialsLanguages = function (country_code) {
  const country = data.countries[country_code];
  const countryLanguages = {
    'languages' : country.official_language,
    'languages_codes': country.official_language_codes
  }
  return countryLanguages;
};

getCountryAllSpeakingLanguages = function (country_code) {
  return data.countries[country_code].all_speaking_languages;
};

hasLanguageAsOfficial = function (language_code, country_code) {
  
  const country = data.countries[country_code];

  for(let lang of country.official_language_codes) {

    if(lang === language_code) {
      return true;
    }

  }

  return false;

};

hasLanguage = function (language_code, country_code) {

  const country = data.countries[country_code];

  for(let lang of country.all_speaking_languages) {

    if(lang.code === language_code) {
      return true;
    }

  }

  return false;

};

// Check if country speak a specific language as Official language
hasEnglishAsOfficialLanguage = function (country_code) {
  
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

hasMadarinAsOfficialLanguage = function (country_code) {
  
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

hasHindiAsOfficialLanguage = function (country_code) {
  
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

hasSpanishAsOfficialLanguage = function (country_code) {
  
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

hasFrenchAsOfficialLanguage = function (country_code) {
  
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

hasArabicAsOfficialLanguage = function (country_code) {
  
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

hasBengaliAsOfficialLanguage = function (country_code) {
  
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

hasRussianAsOfficialLanguage = function (country_code) {
  
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

hasPortugueseAsOfficialLanguage = function (country_code) {
  
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

hasIndonesianAsOfficialLanguage = function (country_code) {
  
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

hasUrduAsOfficiaAslLanguage = function (country_code) {
  
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

hasJapaneseAsOfficialLanguage = function (country_code) {
  
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

hasGermanAsOfficialLanguage = function (country_code) {
  
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

hasChineseAsOfficialLanguage = function (country_code) {
  
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

hasTurkishAsOfficialLanguage = function (country_code) {
  
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

hasKoreanAsOfficialLanguage = function (country_code) {
  
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

hasYorubaAsOfficialLanguage = function (country_code) {
  
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

hasFonAsOfficialLanguage = function (country_code) {
  
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
hasEnglishAsSpeakingLanguages = function (country_code) {

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

hasMadarinAsSpeakingLanguages = function (country_code) {

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

hasHindiAsSpeakingLanguages = function (country_code) {

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

hasSpanishAsSpeakingLanguages = function (country_code) {

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

hasFrenchAsSpeakingLanguages = function (country_code) {
  
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

hasArabicAsSpeakingLanguages = function (country_code) {

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

hasBengaliAsSpeakingLanguages = function (country_code) {

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

hasRussianAsSpeakingLanguages = function (country_code) {

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

hasPortugueseAsSpeakingLanguages = function (country_code) {

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

hasIndonesianAsSpeakingLanguages = function (country_code) {

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

hasUrduSpeakingLanguage = function (country_code) {

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

hasJapaneseAsSpeakingLanguages = function (country_code) {

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

hasGermanAsSpeakingLanguages = function (country_code) {

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

hasJavaneseAsSpeakingLanguages = function (country_code) {

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

hasChineseAsSpeakingLanguages = function (country_code) {

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

hasTurkishAsSpeakingLanguages = function (country_code) {

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

hasKoreanAsSpeakingLanguages = function (country_code) {

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

hasYorubaAsSpeakingLanguages = function (country_code) {

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

hasFonAsSpeakingLanguages = function (country_code) {

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



module.exports = {
  getCountry,
  getCountryOfficialsLanguages,
  getCountryAllSpeakingLanguages,
  hasLanguageAsOfficial,
  hasLanguage,

  hasEnglishAsOfficialLanguage,
  hasMadarinAsOfficialLanguage,
  hasHindiAsOfficialLanguage,
  hasSpanishAsOfficialLanguage,
  hasFrenchAsOfficialLanguage,
  hasArabicAsOfficialLanguage,
  hasBengaliAsOfficialLanguage,
  hasPersianAsOfficialLanguage,
  hasRussianAsOfficialLanguage,
  hasPortugueseAsOfficialLanguage,
  hasIndonesianAsOfficialLanguage,
  hasUrduAsOfficiaAslLanguage,
  hasJapaneseAsOfficialLanguage,
  hasGermanAsOfficialLanguage,
  hasChineseAsOfficialLanguage,
  hasTurkishAsOfficialLanguage,
  hasKoreanAsOfficialLanguage,
  hasYorubaAsOfficialLanguage,
  hasFonAsOfficialLanguage,

  hasEnglishAsSpeakingLanguages,
  hasMadarinAsSpeakingLanguages,
  hasHindiAsSpeakingLanguages,
  hasSpanishAsSpeakingLanguages,
  hasFrenchAsSpeakingLanguages,
  hasArabicAsSpeakingLanguages,
  hasBengaliAsSpeakingLanguages,
  hasRussianAsSpeakingLanguages,
  hasPortugueseAsSpeakingLanguages,
  hasIndonesianAsSpeakingLanguages,
  hasUrduSpeakingLanguage,
  hasJapaneseAsSpeakingLanguages,
  hasGermanAsSpeakingLanguages,
  hasJavaneseAsSpeakingLanguages,
  hasChineseAsSpeakingLanguages,
  hasTurkishAsSpeakingLanguages,
  hasKoreanAsSpeakingLanguages,
  hasYorubaAsSpeakingLanguages,
  hasFonAsSpeakingLanguages
};