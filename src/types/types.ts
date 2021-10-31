export interface Product {
    price: number;
    title: string;
    catalog_product_id: string;
    permalink: string;
    thumbnail: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Site {
    id: string,
    name: string
}

export interface Image {
    url: string;
}

export interface Data {
    site: Site,
    category: Category
}