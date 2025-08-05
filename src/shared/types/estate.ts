export interface Estate {
    id: string;
    title: string;
    description: string;
    price: number;
    image_url: string;
    address: string;
    city: string;
    type: "apartment" | "house" | "commercial";
    rooms: number;
    area: number;
    createdAt: string;
    ownerId?: string;
}