const data = require('./datas.json');
const filtered_datas = require('./filtered_datas.json'); 

exports.getCountryOfficialsLanguages = function (country_code) {
  const country = data.countries[country_code];
  const countryLanguages = {
    'languages' : country.official_language,
    'languages_codes': country.official_language_codes
  }
  return countryLanguages;
};

exports.getCountryAllSpeakingLanguages = function (country_code) {
  return data.countries[country_code].all_speaking_languages;
};



// Check if country speak a specific language as Official language
exports.hasEnglishAsOfficialLanguage = function (country_code) {
  
  const english_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasMadarinAsOfficialLanguage = function (country_code) {
  
  const mandarin_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasHindiAsOfficialLanguage = function (country_code) {
  
  const hindi_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasSpanishAsOfficialLanguage = function (country_code) {
  
  const spanish_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasFrenchAsOfficialLanguage = function (country_code) {
  
  const french_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasArabicAsOfficialLanguage = function (country_code) {
  
  const arabic_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasBengaliAsOfficialLanguage = function (country_code) {
  
  const bengali_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasRussianAsOfficialLanguage = function (country_code) {
  
  const russian_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasPortugueseAsOfficialLanguage = function (country_code) {
  
  const portuguese_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasIndonesianAsOfficialLanguage = function (country_code) {
  
  const indonesian_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasUrduOfficiaAslLanguage = function (country_code) {
  
  const urdu_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasJapaneseAsOfficialLanguage = function (country_code) {
  
  const japanese_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasGermanAsOfficialLanguage = function (country_code) {
  
  const german_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasChineseAsOfficialLanguage = function (country_code) {
  
  const chinese_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasTurkishAsOfficialLanguage = function (country_code) {
  
  const turkish_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasKoreanAsOfficialLanguage = function (country_code) {
  
  const korean_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasYorubaAsOfficialLanguage = function (country_code) {
  
  const yoruba_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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

exports.hasFonAsOfficialLanguage = function (country_code) {
  
  const fon_countries_officials_languages = filtered_datas.countriesOfficialsLanguages.
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
exports.hasEnglishAsSpeakingLanguages = function (country_code) {

  const english_Countries_speaking_languages = filtered_datas.countriesSpeakingLanguages.
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

exports.hasMadarinAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasHindiAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasSpanishAsSpeakingLanguages = function (country_code) {

  const spanish_Countries_speaking_languages = filtered_datas.countriesSpeakingLanguages.
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

exports.hasFrenchAsSpeakingLanguages = function (country_code) {
  
  const french_Countries_speaking_languages = filtered_datas.countriesSpeakingLanguages.
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

exports.hasArabicAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasBengaliAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasRussianAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasPortugueseAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasIndonesianAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasUrduOfficialLanguage = function (country_code) {
  return data.countries;
};

exports.hasJapaneseAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasGermanAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasJavaneseAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasChineseAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasTeluguAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasTurkishAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasKoreanAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasMarathiAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasYorubaAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

exports.hasFonAsSpeakingLanguages = function (country_code) {
  return data.countries;
};

