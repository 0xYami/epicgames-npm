const axios = require("axios").default;

const get = async (url, headers) => {
    return await axios.get(url, {
        headers: headers
    });
}



class EpicGames {
    constructor() {
    }

    async getStore() {
        let res = await get("https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=US&allowCountries=US", {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
        });

        return res.data;
    }

    async getStoreByCountry(country) {
        let res = await get(`https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=${country}&allowCountries=${country}`, {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
        });

        return res.data;
    }

    async getNews() {
        let res = await get("https://store-content-ipv4.ak.epicgames.com/api/en-US/content/blog/sticky?locale=en-US", {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
        });

        return res.data;
    }

    async getNewsByLocale(locale) {
        let res = await get(`https://store-content-ipv4.ak.epicgames.com/api/${locale}/content/blog/sticky?locale=${locale}`, {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
        });

        return res.data;
    }

    async getFreeGames()
    {
        let res = await get("https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions", {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
        });

        return res.data;
    }


}


module.exports = EpicGames;