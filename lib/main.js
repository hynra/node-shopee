const request = require('request-promise-native');

const { endpoints } = require('./constant');

module.exports = function (credentials = {}) {


    if (credentials.partner_id === undefined || credentials.shopid === undefined) {
        throw new Error("partner id or shop id is required");
    }

    let baseUrl = credentials.url || endpoints.v1;

    let call = async (params) => {
        try {
            let _prms = {
                partner_id: credentials.partner_id,
                shopid: credentials.shopid,
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