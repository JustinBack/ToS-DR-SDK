import { Service, Services as ServicePagination } from '../models/Services';
export declare class Services {
    /**
     * Fetch details of a service using its id
     * @param serviceID The service id
     * @returns Promise<Service>
     */
    static fetch(serviceID: number): Promise<Service>;
    /**
     * Fetch all services on the specified page
     * @param Page The Page Number
     * @returns Promise<Service[]>
     */
    static fetchAll(Page?: number): Promise<ServicePagination>;
}
