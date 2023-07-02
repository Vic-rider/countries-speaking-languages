#### Made by [@Vic-rider](https://twitter.com/tossouvincenta1)

**countries-speaking-languages**, query country information to know if a language is speaking in this country as **`official language`** or a **`native language`**.

## Install

Install using `npm install countries-speaking-languages`

## Usage

To include Countries-speaking-languages, require it:

You can get country information.

**Ex** :

```js
countriesSpeakingLanguages = require('countries-speaking-languages');
countriesSpeakingLanguages.getCountry('country_code');
// returns country_datas [object]
```

You can get country officials languages data.

**Ex** :

```js
countriesSpeakingLanguages = require('countries-speaking-languages');
countriesSpeakingLanguages.getCountryOfficialsLanguages('BJ'); // "BJ" as `country_code`
// returns { 'languages' : ['French'], 'languages_codes': ['fr'] }
```

You can get country spoken languages data.

**Ex** :

```js
countriesSpeakingLanguages = require('countries-speaking-languages');
countriesSpeakingLanguages.getCountryAllSpeakingLanguages('BJ'); // "BJ" as `country_code`
// returns [ { "language": "French", "code": "fr" }, { "language": "Yoruba", "code": "yo" }, { "language": "Fon", "code": "fon" } ]
```

Check if a specific language is spoken as official language in a specific country

**Ex** :

```js
countriesSpeakingLanguages = require('countries-speaking-languages');
countriesSpeakingLanguages.hasLanguageAsOfficial('fr', 'JP'); // "JP" as `country_code` and 'fr' as `language_code`
// returns false    : french is not an official language of Japan
```

Check if a specific language is spoken in a specific country

**Ex** :

```js
countriesSpeakingLanguages = require('countries-speaking-languages');
countriesSpeakingLanguages.hasLanguage('pt', 'AO'); // "AO" as `country_code` and 'pt' as `language_code`
// returns true  : portuguese is spoken in Angola
```

You also have others ways to check if some languages are spoken in a specific country as official languages.

**Ex** :

```js
countriesSpeakingLanguages = require('countries-speaking-languages');
countriesSpeakingLanguages.hasEnglishAsOfficialLanguage('AO'); // "AO" as `country_code` `
// returns false  : english is not spoken in Angola as official language
```

Here is other Official languages checker you can use:

- `hasMadarinAsOfficialLanguage(country_code)`
- `hasHindiAsOfficialLanguage(country_code)`
- `hasSpanishAsOfficialLanguage(country_code)`
- `hasFrenchAsOfficialLanguage(country_code)`
- `hasArabicAsOfficialLanguage(country_code)`
- `hasBengaliAsOfficialLanguage(country_code)`
- `hasRussianAsOfficialLanguage(country_code)`
- `hasPortugueseAsOfficialLanguage(country_code)`
- `hasIndonesianAsOfficialLanguage(country_code)`
- `hasUrduOfficiaAslLanguage(country_code)`
- `hasJapaneseAsOfficialLanguage(country_code)`
- `hasGermanAsOfficialLanguage(country_code)`
- `hasChineseAsOfficialLanguage(country_code)`
- `hasTurkishAsOfficialLanguage(country_code)`
- `hasKoreanAsOfficialLanguage(country_code)`
- `hasYorubaAsOfficialLanguage(country_code)`
- `hasFonAsOfficialLanguage(country_code)`

Here is the ways to check if some languages are spoken in a specific country.

**Ex** :

```js
countriesSpeakingLanguages = require('countries-speaking-languages');
countriesSpeakingLanguages.hasEnglishAsSpeakingLanguages('GH'); // "GH" as `country_code` `
// returns true  : english is spoken in Ghana
```

Here is other languages checker you can use:

- `hasMadarinAsSpeakingLanguages(country_code)`
- `hasHindiAsSpeakingLanguages(country_code)`
- `hasSpanishAsSpeakingLanguages(country_code)`
- `hasFrenchAsSpeakingLanguages(country_code)`
- `hasArabicAsSpeakingLanguages(country_code)`
- `hasBengaliAsSpeakingLanguages(country_code)`
- `hasRussianAsSpeakingLanguages(country_code)`
- `hasPortugueseAsSpeakingLanguages(country_code)`
- `hasIndonesianAsSpeakingLanguages(country_code)`
- `hasUrduSpeakingLanguage(country_code)`
- `hasJapaneseAsSpeakingLanguages(country_code)`
- `hasGermanAsSpeakingLanguages(country_code)`
- `hasJavaneseAsSpeakingLanguages(country_code)`
- `hasChineseAsSpeakingLanguages(country_code)`
- `hasTurkishAsSpeakingLanguages(country_code)`
- `hasKoreanAsSpeakingLanguages(country_code)`
- `hasYorubaAsSpeakingLanguages(country_code)`
- `hasFonAsSpeakingLanguages(country_code)`

## Test

To test countries-speaking-languages, run `npm test`
