import { useTranslation } from "react-i18next";
import i18n from "i18next";

function LanguageSwitcher() {
    const { i18n: i18next } = useTranslation();
    const currentLang = i18next.language;

    return (
        <div className="flex gap-2 mb-4">
            {["ru", "en"].map((lng) => (
                <button
                    key={lng}
                    className={`px-3 py-1 rounded cursor-pointer ${
                        currentLang === lng ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => i18n.changeLanguage(lng)}
                >
                    {lng === "ru" ? "RU" : "EN"}
                </button>
            ))}
        </div>
    );
}
export default LanguageSwitcher;