export function initAffiliate(router) {
    router.onReady(({ path, query: { a: affiliateCode } }) => {

        // no affiliateCode set
        if (typeof affiliateCode === "undefined")
            return;

        // generate expiration time three days from now
        let date = new Date(Date.now() + 25920e4);
        date = date.toUTCString();

        document.cookie = `a=${affiliateCode}; expires=${date};`

        router.push(path);

    })
}

export function getAffiliateCode() {
    let affiliateCookies = document.cookie.split(";").filter(cookie => cookie.match(/a=.*/));
    return affiliateCookies.length > 0 ? affiliateCookies[0].replace("a=", "") : null
}