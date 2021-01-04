import { Point } from "./Points";

interface Topic {
    /** The ID of the topic */
    id: number;
    /** The title of the topic */
    title: string;
    /** The subtitle of the topic */
    subtitle: string;
    /** The description of the topic */
    description: string;
    /** The date of creation of the topic */
    created_at: Date;
    /** The last update date of the topic */
    updated_at: Date;
    /** The old system ID */
    oldId: string;
}

export interface Case {
    /** The ID of the case */
    id: number;
    /** The title of the case */
    title: string;
    /** The weight of the case */
    score: number;
    /** The description of the case */
    description: string;
    /** The rating of the case: blocker,bad,neutral,good */
    classification: string;
    /** The topic of the Case */
    topic: Topic;
    /** The points assigned to the case */
    points: Point[];
}

