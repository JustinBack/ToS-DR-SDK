export interface Point {
    /** The ID of the point */
    id: number;
    /** The user id of the author */
    user_id: number;
    /** Unused? */
    rank: number;
    /** The title of the point */
    title: string;
    /** The source url of the document */
    source: string;
    /** The current status of the point: disputed, approved, *-not-found, declined, pending, draft */
    status: string;
    /** The analysis of the point */
    analysis: string;
    /** The date of creation of the point */
    created_at: Date;
    /** The last updated date of the point */
    updated_at: Date;
    /** The assigned service id of the point */
    service_id: number;
    /** The quote of the point */
    quoteText: string;
    /** The assigned case id of the point */
    case_id: number;
    /** The old id */
    oldId?: string;
    /** The latest comment from a curator or staff regarding the approval/rejection of the point */
    point_change?: string;
    /** The index of the document text where the quote was initially found */
    quoteStart?: number;
    /** The index of the document text where the quote ends */
    quoteEnd?: number;
    /** Used by rake to see if the rating is going to be updated */
    service_needs_rating_update: boolean;
    /** The ID of the document */
    document_id?: number;
}


export interface Points {
    /** A list of points */
    points: Point[];
    /** Metadata of the endpoint */
    meta: Meta;
}

