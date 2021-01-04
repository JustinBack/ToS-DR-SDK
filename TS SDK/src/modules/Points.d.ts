import { Point, Points as PointsPagination } from '../models/Points';
export declare class Points {
    /**
     * Fetch details of a specific point
     * @param pointID The id of a point
     * @returns Promise<Point>
     */
    static fetch(pointID: number): Promise<Point>;
    /**
     * Fetch all points on the specified page
     * @param Page The Page number
     * @returns Promise<Points>
     */
    static fetchAll(Page?: number): Promise<PointsPagination>;
}
