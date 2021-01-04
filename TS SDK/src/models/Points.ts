export interface Point {
    id: number;
    user_id: number;
    rank: number;
    title: string;
    source: string;
    status: string;
    analysis: string;
    created_at: Date;
    updated_at: Date;
    service_id: number;
    quoteText: string;
    case_id: number;
    oldId: string;
    point_change: string;
    quoteStart?: number;
    quoteEnd?: number;
    service_needs_rating_update: boolean;
    document_id?: number;
}


export interface Points {
    points: Point[];
    meta: Meta;
}

