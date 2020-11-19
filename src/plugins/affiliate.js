export function initAffiliate(router) {
    router.onReady(({ path, query: { a: affiliateCode } }) => {

        // no affiliateCode set
        if (typeof affiliateCode === "undefined")
            return;

        // generate expiration time one day from now
        let date = new Date(Date.now() + 86400e3);
        date = date.toUTCString();

        document.cookie = `a=${affiliateCode}; expires=${date};`

        router.push(path);

    })
}