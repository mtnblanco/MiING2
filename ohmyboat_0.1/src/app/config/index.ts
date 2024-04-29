import { Bluetooth, Cat } from "lucide-react";

export const PRODUCT_CATEGORIES = [
    {
        label: 'UI kits',
        value: 'ui_kits' as const,
        AsImage: Bluetooth,
        featured: [
            {
                name: 'Editor picks',
            },
            {
                name: 'New Arrivals',
            },
            {
                name: 'Best picks',
            },
        ],
    },

    {
        label: 'Icons',
        value: 'icons' as const,
        AsImage: Cat,
        featured: [
            {
                name: 'Editor picks',
            },
            {
                name: 'New Arrivals',
            },
            {
                name: 'Best picks',
            },
        ],
    },


]