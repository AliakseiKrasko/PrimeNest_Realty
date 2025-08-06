"use client"


import {useTranslation} from "react-i18next";
import {ESTATES} from "@/mocks/estates";
import EstateCard from "@/components/EstateCard";
import i18n from "i18next";
import {useMemo, useState} from "react";

// 1. Создаём интерфейс фильтров
interface Filters {
    city: string;
    type: string;
    maxPrice: string;
    minPrice: string;
}

export default function HomePage() {
    const {t} = useTranslation();

    // 2. Храним значения фильтров в состоянии
    const [filters, setFilters] = useState<Filters>({
        city: "",
        type: "",
        maxPrice: "",
        minPrice: "",
    })

    // 3. Фильтрация массива ESTATES
    const filteredEstates = useMemo(() =>
            ESTATES.filter(estate => {
                return (
                    (!filters.city || estate.city === filters.city) &&
                    (!filters.type || estate.type === filters.type) &&
                    (!filters.minPrice || estate.price === +filters.minPrice) &&
                    (!filters.maxPrice || estate.price === +filters.maxPrice)
                );
            }),
        [filters, ESTATES]
    )

    return (
        <main className="max-w-5xl mx-auto py-10">
            <h1 className="text-3xl font-bolt mb-6">{t("catalog")}</h1>
            <div>
                {/* 4. Панель фильтров */}
                <select
                    className="border rounded p-2"
                    value={filters.city}
                    onChange={(e) => setFilters(f => ({...f, city: e.target.value}))}
                >
                    <option value="">{t("city")}</option>
                    {/* Перебираем все уникальные города */}
                    {[...new Set(ESTATES.map(e => e.city))].map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
                {/* Фильтр по типу */}
                <select
                    className="border rounded p-2"
                    value={filters.type}
                    onChange={(e) => setFilters(f => ({...f, type: e.target.value}))}
                >
                    <option value="">{t("type")}</option>
                    {[...new Set(ESTATES.map(e => e.type))].map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                {/* Фильтр по цене */}
                <input
                    className="border rounded p-2"
                    type="number"
                    placeholder={t("maxPrice")}
                    value={filters.maxPrice}
                    onChange={(e) => setFilters(f => ({...f, maxPrice: e.target.value}))}
                />
                <input
                    className="border rounded p-2"
                    type="number"
                    placeholder={t("minPrice")}
                    value={filters.minPrice}
                    onChange={(e) => setFilters(f => ({...f, minPrice: e.target.value}))}
                />
            </div>
            {/* 5. Список карточек недвижимости */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEstates.map((estate) => (
                    <EstateCard key={estate.id} estate={estate}/>
                ))}
            </div>
            {/* 6. Кнопки смены языка */}
            <div className="mt-8 flex gap-2">
                <button className="border rounded p-2" onClick={() => i18n.changeLanguage("en")}>EN</button>
                <button className="border rounded p-2" onClick={() => i18n.changeLanguage("ru")}>RU</button>
            </div>
        </main>
    );
}
