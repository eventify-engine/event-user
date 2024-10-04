// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    extends : ["@nuxt/ui-pro"],
    modules : ["@nuxt/ui"],

    runtimeConfig: {
        public: {
            apiUrl     : process.env.NUXT_API_URL,
            storageUrl : process.env.NUXT_STORAGE_URL,
            frontendUrl: process.env.NUXT_FRONTEND_URL
        }
    },

    devServer: {
        host : '0.0.0.0',
        port : 3001,
        https: {
            key : './privkey.pem',
            cert: './fullchain.pem'
        }
    },

    compatibilityDate: '2024-10-03',

    app: {
        head: {
            meta: [
                {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'}
            ]
        }
    }
})