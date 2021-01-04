import { Case } from '../models/Cases';
export declare class Cases {
    /**
     * Fetch details of a specific case
     * @param caseID The ID of a case
     * @returns Promise<Case>
     */
    static fetch(caseID: number): Promise<Case>;
    /**
     * Fetch all cases (SLOW)
     * @returns Promise<Case[]>
     */
    static fetchAll(): Promise<Case[]>;
}
