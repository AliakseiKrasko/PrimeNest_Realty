"use client";

import { useGetEstatesQuery } from "@/store/estatesApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setFilters } from "@/store/filtersSlice";
import EstateCard from "@/components/EstateCard";
import FilterPanel from "@/components/FilterPanel";
import {useMemo} from "react";

export default function ClientCatalogPage() {
    const { data: estates = [], isLoading } = useGetEstatesQuery();
    const filters = useSelector((state: RootState) => state.filters);
    const dispatch = useDispatch();

    const filteredEstates = useMemo(() =>
        estates.filter((estate) => {
            return (
                (!filters.city || estate.city === filters.city) &&
                (!filters.type || estate.type === filters.type) &&
                (filters.minPrice === "" || estate.price >= +filters.minPrice) &&
                (filters.maxPrice === "" || estate.price <= +filters.maxPrice)
            );
        }), [estates, filters]
    );

    return (
        <div className="flex flex-col p-5">
            <FilterPanel
                filters={filters}
                setFilters={(f) => dispatch(setFilters(f))}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredEstates.map((estate) => (
                    <EstateCard key={estate.id} estate={estate} />
                ))}
            </div>
        </div>
    );
}