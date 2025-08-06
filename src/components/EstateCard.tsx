"use client"

import "@/i18n";
import { Estate } from "@/shared/types/estate";
import { useTranslation } from "react-i18next";
import React from "react";

// Типизируй props правильно
interface EstateCardProps {
    estate: Estate;
}

const EstateCard = React.memo(function EstateCard({ estate }: EstateCardProps) {
    const { t } = useTranslation();

    // Ключ для типа объекта
    const typeKey = `type_${estate.type}`;

    return (
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col mx-auto my-2">
            <img
                src={estate.image_url || "https://placehold.co/400x250"}
                alt={estate.title}
                className="h-48 w-full object-contain"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">{estate.title}</h2>
                <div className="text-gray-600 mb-1">{estate.city}</div>
                <div className="text-gray-700 mb-2">{estate.address}</div>
                <div className="text-base font-bold mb-2">
                    {t('price')}: {estate.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    {t(typeKey)}&nbsp;|&nbsp;
                    {estate.rooms} {t('rooms')}&nbsp;|&nbsp;
                    {estate.area} {t('area')}
                </div>
            </div>
        </div>
    );
});

export default EstateCard;