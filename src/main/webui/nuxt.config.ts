// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    ssr: false,
    app: {
        baseURL: '/webui/',
    },
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: false,
                }
            }
        }
    },
})
