const datetimeFormats = {
  'en': {
    short: {
      year: '2-digit', month: 'short', day: '2-digit',
      weekday: 'narrow',
    },
    long: {
      year: 'numeric', month: 'long', day: 'numeric',
      weekday: 'long', hour: 'numeric', minute: 'numeric',
      second: 'numeric', dayPeriod: 'narrow', timeZoneName: 'short',
    }
  },
  'ja': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      era: 'long', year: 'numeric', month: 'narrow', day: 'numeric',
      weekday: 'long', hour: '2-digit', hour12: true, minute: 'numeric', 
      second: 'numeric', dayPeriod: 'narrow', timeZoneName: 'short',
    }
  }
};

const numberFormats = {
  'en': {
    currency: {
      style: 'currency', currency: 'USD', currencyDisplay: 'code'
    },
    number:{
      minimumFractionDigits: 1, maximumFractionDigits: 3,
      signDisplay: 'exceptZero'
    }
  },
  'ja': {
    currency: {
      style: 'currency', currency: 'JPY', currencyDisplay: 'symbol'
    },
    number:{
      minimumFractionDigits: 1, maximumFractionDigits: 3,
      signDisplay: 'exceptZero'
    }
  }
};

Vue.createApp({})
  .use(
    VueI18n.createI18n({
      // locale: 'en',
      locale: 'ja',
      fallbackLocale: 'en',
      datetimeFormats,
      numberFormats
    })
  )
  .mount('#app');