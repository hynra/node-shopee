const request = require('request-promise-native');

const { endpoints } = require('./constant');


module.exports = class Shopee {

    constructor(partnerId, shopid, url) {
        this.partnerId = partnerId;
        this.shopid = shopid;
        this.baseUrl = url || endpoints.v1;
    }

    getCredentials() {
        return {
            partner_id: this.partnerId,
            shopid: this.shopid
        }
    }

    async call(params) {
        try {
            let _prms = {
                partner_id: this.partnerId,
                shopid: this.shopid,
                timestamp: new Date().getTime()
            }

            let url = baseUrl + params.path;
            let method = params.method;
            let qs = Object.assign(params, _prms);

            let options = {
                method: method,
                uri: url,
                qs: qs,
                json: true
            };

            return await request(options);

        } catch (error) {
            throw error;
        }
    }


}