import {Estate} from "@/shared/types/estate";

interface EstateCard {
    estate: Estate;
}

export default function EstateCard({estate}: EstateCard) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
            <img
                src={estate.image_url || "https://placehold.co/400x250"}
                alt={estate.title}
                className="h-48 w-full object-contain"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">{estate.title}</h2>
                <div className="text-gray-600 mb-1">{estate.city}</div>
                <div className="text-gray-700 mb-2">{estate.address}</div>
                <div className="text-base font-bolt mb-2">{estate.price.toLocaleString()}</div>
                <div className="text-sm text-gray-500">
                    {estate.type === "apartment" ? "Квартира" : estate.type === "house" ? "Дом" : "Комерческая"}
                    &nbsp;|&nbsp;{estate.rooms} комн. | {estate.area} м²
                </div>
            </div>
        </div>
    )
};