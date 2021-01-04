import { Meta } from "./Meta";
declare type Service = {
    /** The ID of the service */
    id: number;
    /** The name of the service */
    name: string;
    /** The url(s) to the service, comma seperated */
    url: string;
    /** The creation date of the service */
    created_at: Date;
    /** The last update date of the service*/
    updated_at: Date;
    /** The wikipedia link to the service */
    wikipedia?: string;
    /** The keywords of the service */
    keywords?: string;
    /** Related service slugs, comma seperated */
    related?: string;
    /** The slug of the service, new services can be NULL */
    slug?: string;
    /** If the service is reviewed, show rating if true */
    is_comprehensively_reviewed: boolean;
    /** The user who created this point */
    user_id?: number;
    /** The rating of the service: A, B, C, D, E, N/A */
    rating: string;
    /** Can contain deleted if the service has been deleted */
    status?: string;
};
declare type Services = {
    /** The list of services */
    services: Service[];
    /** Metadata of the endpoint */
    meta: Meta;
};
export { Service, Services };
