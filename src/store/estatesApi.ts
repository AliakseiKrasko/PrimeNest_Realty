import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Estate} from "@/shared/types/estate";

export const estatesApi = createApi({
    reducerPath: "estatesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Можешь заменить на реальный backend
    endpoints: (builder) => ({
        getEstates: builder.query<Estate[], void>({
            query: () => "estates",
        }),
    }),
});

export const { useGetEstatesQuery } = estatesApi;