chrome.webRequest.onBeforeRequest.addListener(function requestListener(details) {
        return {
            redirectUrl: details.url.replace(/(www\.)?musewiki\.org/, 'newmusewiki.org')
        };
    },
    {
        urls: ['*://musewiki.org/*', '*://www.musewiki.org/*'],
        types: ['main_frame']
    },
    ['blocking']
);