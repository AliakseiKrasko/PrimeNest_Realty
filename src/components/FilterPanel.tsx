"use client";



import React from "react";
import {useTranslation} from "react-i18next";
import {FiltersState} from "@/store/filtersSlice";
import {ESTATES} from "@/mocks/estates"; // или API-данные, если уже с бэка

interface Props {
    filters: FiltersState;
    setFilters: (filters: Partial<FiltersState>) => void;
}

export default function FilterPanel({ filters, setFilters }: Props) {
    const { t } = useTranslation();

    // Для уникальных городов и типов
    const cities = Array.from(new Set(ESTATES.map(e => e.city)));
    const types = Array.from(new Set(ESTATES.map(e => e.type)));

    return (
        <div className="flex gap-3 mb-4">
            {/* Город */}
            <select
                className="border rounded p-2"
                value={filters.city}
                onChange={e => setFilters({ city: e.target.value })}
            >
                <option value="">{t("city")}</option>
                {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>

            {/* Тип недвижимости */}
            <select
                className="border rounded p-2"
                value={filters.type}
                onChange={e => setFilters({ type: e.target.value })}
            >
                <option value="">{t("type")}</option>
                {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>

            {/* Цена (мин/макс) */}
            <input
                type="number"
                className="border rounded p-2"
                placeholder={t("minPrice")}
                value={filters.minPrice}
                onChange={e => setFilters({ minPrice: e.target.value ? +e.target.value : "" })}
            />
            <input
                type="number"
                className="border rounded p-2"
                placeholder={t("maxPrice")}
                value={filters.maxPrice}
                onChange={e => setFilters({ maxPrice: e.target.value ? +e.target.value : "" })}
            />

            <button className="border rounded px-4 py-2" onClick={() => setFilters({ city: "", type: "", minPrice: "", maxPrice: "" })}>
                {t("reset")}
            </button>
        </div>
    );
}