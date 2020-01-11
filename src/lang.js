export const utteranceLangApp = {
    "en-US": "Voice changed to Google US English",
    "de-DE": "Die Stimme wurde verändert zu Google Deutsch",
    "en-GB": "Voice changed to Google UK English Male",
    "es-ES": "La voz cambió a Google español",
    "es-US": "La voz cambió a Google español de Estados Unidos",
    "fr-FR": "La voix a été changée en Google français",
    "hi-IN": "Voice changed to Google हिन्दी",
    "id-ID": "Voice changed to Google Bahasa Indonesia",
    "it-IT": "La voce è cambiata in Google italiano",
    "ja-JP": "声が変わった Google 日本語",
    "ko-KR": "음성이 Google 한국의",
    "nl-NL": "Stem gewijzigd op Google Nederlands",
    "pl-PL": "Głos zmieniono na Google polski",
    "pt-BR": "Voz alterada para Google português do Brasil",
    "ru-RU": "Голос изменился на Google русский",
    "zh-CN": "语音已更改为 Google 普通话（中国大陆）",
    "zh-HK": "語音已更改為 Google 粤語（香港）",
    "zh-TW": "語音已更改為 Google 國語（臺灣）"
};

export const utteranceLangCounter = (data) => ({
    simple: {
        "en-US": `${data.name} ${data.value}`,
        "de-DE": `${data.name} ${data.value}`,
        "en-GB": `${data.name} ${data.value}`,
        "es-ES": `${data.name} ${data.value}`,
        "es-US": `${data.name} ${data.value}`,
        "fr-FR": `${data.name} ${data.value}`,
        "hi-IN": `${data.name} ${data.value}`,
        "id-ID": `${data.name} ${data.value}`,
        "it-IT": `${data.name} ${data.value}`,
        "ja-JP": `${data.name} ${data.value}`,
        "ko-KR": `${data.name} ${data.value}`,
        "nl-NL": `${data.name} ${data.value}`,
        "pl-PL": `${data.name} ${data.value}`,
        "pt-BR": `${data.name} ${data.value}`,
        "ru-RU": `${data.name} ${data.value}`,
        "zh-CN": `${data.name} ${data.value}`,
        "zh-HK": `${data.name} ${data.value}`,
        "zh-TW": `${data.name} ${data.value}`,
    },
    up: {
        "en-US": `The counter ${data.name} increases to ${data.value}`,
        "de-DE": `Der Zähler ${data.name} erhöht sich auf ${data.value}.`,
        "en-GB": `The counter ${data.name} increases to ${data.value}`,
        "es-ES": `El contador ${data.name} aumenta a ${data.value}`,
        "es-US": `El contador ${data.name} aumenta a ${data.value}`,
        "fr-FR": `Le compteur ${data.name} passe à ${data.value}`,
        "hi-IN": `काउंटर ${data.name} बढ़कर ${data.value} हो जाता है।`,
        "id-ID": `penghitung ${data.name} bertambah menjadi ${data.value}`,
        "it-IT": `il contatore ${data.name} aumenta a ${data.value}`,
        "ja-JP": `カウンタ ${data.name} は ${data.value} に増加します。`,
        "ko-KR": `카운터 ${data.name} 은 ${data.value} 으로 증가합니다.`,
        "nl-NL": `de teller ${data.name} neemt toe tot ${data.value}`,
        "pl-PL": `licznik ${data.name} wzrasta do ${data.value}`,
        "pt-BR": `o contador ${data.name} aumenta para ${data.value}`,
        "ru-RU": `счетчик ${data.name} увеличивается до ${data.value}`,
        "zh-CN": `计数器 ${data.name} 增加到 ${data.value}`,
        "zh-HK": `计数器 ${data.name} 增加到 ${data.value}`,
        "zh-TW": `计数器 ${data.name} 增加到 ${data.value}`,
    },
    down: {
        "en-US": `The counter ${data.name} decreases to ${data.value}`,
        "de-DE": `Der Zähler ${data.name} verringert sich auf ${data.value} zurück.`,
        "en-GB": `The counter ${data.name} decreases to ${data.value}`,
        "es-ES": `El contador ${data.name} disminuye a ${data.value}`,
        "es-US": `El contador ${data.name} disminuye a ${data.value}`,
        "fr-FR": `Le compteur ${data.name} diminue à ${data.value}`,
        "hi-IN": `काउंटर ${data.name} घटकर ${data.value} हो जाता है।`,
        "id-ID": `penghitung ${data.name} berkurang menjadi ${data.value}`,
        "it-IT": `il contatore ${data.name} diminuisce a ${data.value}`,
        "ja-JP": `カウンタ ${data.name} は ${data.value} に減少します。`,
        "ko-KR": `카운터 ${data.name} 은 ${data.value} 으로 증가합니다.`,
        "nl-NL": `de teller ${data.name} neemt af tot ${data.value}`,
        "pl-PL": `licznik ${data.name} spada do ${data.value}`,
        "pt-BR": `o contador ${data.name} diminui para ${data.value}`,
        "ru-RU": `счетчик ${data.name} уменьшается до ${data.value}`,
        "zh-CN": `计数器 ${data.name}减少到${data.value}`,
        "zh-HK": `计数器 ${data.name}减少到${data.value}`,
        "zh-TW": `计数器 ${data.name}减少到${data.value}`,
    },
    finish: {
        "en-US": `The counter ${data.name} finished.`,
        "de-DE": `Der Zähler ${data.name} ist geendet.`,
        "en-GB": `The counter ${data.name} finished.`,
        "es-ES": `El contador ${data.name} finished.`,
        "es-US": `El contador ${data.name} finished.`,
        "fr-FR": `Le compteur ${data.name} a fini.`,
        "hi-IN": `काउंटर ${data.name} finished.`,
        "id-ID": `penghitung ${data.name} finished.`,
        "it-IT": `il contatore ${data.name} finished.`,
        "ja-JP": `カウンタ ${data.name} finished.`,
        "ko-KR": `카운터 ${data.name} finished.`,
        "nl-NL": `de teller ${data.name} is op.`,
        "pl-PL": `licznik ${data.name} finished.`,
        "pt-BR": `o contador ${data.name} finished.`,
        "ru-RU": `счетчик ${data.name} finished.`,
        "zh-CN": `计数器 ${data.name} finished.`,
        "zh-HK": `计数器 ${data.name} finished.`,
        "zh-TW": `计数器 ${data.name} finished.`,
    },
});