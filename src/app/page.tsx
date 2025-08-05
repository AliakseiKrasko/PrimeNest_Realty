"use client"


import {useTranslation} from "react-i18next";
import {ESTATES} from "@/mocks/estates";
import EstateCard from "@/components/EstateCard";
import i18n from "i18next";

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <main className="max-w-5xl mx-auto py-10">
            <h1 className="text-3xl font-bolt mb-6">{t("catalog")}</h1>
            <div>
                {ESTATES.map(estate => (
                    <EstateCard key={estate.id} estate={estate} />
                ))}
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
            </div>
        </main>
    );
}
