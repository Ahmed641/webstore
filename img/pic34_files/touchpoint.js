function getTouchpoint(){ return 'DESKTOP';} function getTealiumURL(countryCode){ var url = '//tags.tiqcdn.com/utag/hm/ca/prod/utag.js'; if (countryCode) { url = url.replace('${country}', countryCode.toLowerCase())}; return url;}