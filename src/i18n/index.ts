import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config"; // путь зависит от твоей структуры
import ru from "@/locales/ru/translation.json";
import en from "@/locales/en/translation.json";

i18n
    .use(initReactI18next)
    .init({
        ...nextI18NextConfig.i18n,
        resources: {
            ru: { translation: ru },
            en: { translation: en },
        },
        fallbackLng: nextI18NextConfig.i18n.defaultLocale,
        interpolation: { escapeValue: false },
    });

export default i18n;