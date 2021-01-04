import { Topic } from '../models/Topics';
export declare class Topics {
    /**
     * Fetch details of a specific topic
     * @param topicID The topic id
     * @returns Promise<Topic>
     */
    static fetch(topicID: number): Promise<Topic>;
    /**
     * Fetches all topics
     * @returns Promise<Topic[]>
     */
    static fetchAll(): Promise<Topic[]>;
}
