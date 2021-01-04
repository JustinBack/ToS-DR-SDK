export interface Service {
    id: number;
    name: string;
    url: string;
    created_at: Date;
    updated_at: Date;
    wikipedia: string;
    keywords: string;
    related: string;
    slug: string;
    is_comprehensively_reviewed: boolean;
    user_id?: number;
    rating: string;
    status: string;
}

export interface Services {
    services: Service[];
    meta: Meta;
}

