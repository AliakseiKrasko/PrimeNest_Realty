import {ESTATES} from "@/mocks/estates";
import EstateCard from "@/components/EstateCard";

export default function HomePage() {
    return (
        <main className="max-w-5xl mx-auto py-10">
            <h1 className="text-3xl font-bolt mb-6">Каталог недвижимости</h1>
            <div>
                {ESTATES.map(estate => (
                    <EstateCard key={estate.id} estate={estate} />
                ))}
            </div>
        </main>
    );
}
