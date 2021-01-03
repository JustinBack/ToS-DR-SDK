export interface Document {
    id: number;
    name: string;
    url: string;
    xpath: string;
    text: string;
    created_at: string;
    updated_at: string;
    service_id: number;
    reviewed?: boolean;
    user_id?: any;
    status?: any;
}

export interface Case {
    id: number;
    classification: string;
    score: number;
    title: string;
    description: string;
    topic_id: number;
    created_at: string;
    updated_at: string;
    privacy_related?: any;
}

export interface Point {
    discussion: string;
    id: number;
    needsModeration: boolean;
    document: Document;
    quote: string;
    services: string[];
    set: string;
    slug?: any;
    title: string;
    topics: any[];
    case: Case;
}

export interface Service {
    id: number;
    name: string;
    slug: string;
    image: string;
    class: string;
    documents: Document[];
    points: Point[];
    urls: string[];
}