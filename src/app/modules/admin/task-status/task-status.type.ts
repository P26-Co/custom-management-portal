import { PageableModel } from '../../shared/types/pagination.types';

export enum TASK_STATUS {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    FAILED = 'failed',
    CANCELLED = 'cancelled',
    UNKNOWN = 'unknown',
}

export class TaskStatusModel extends PageableModel {
    items?: TaskModel[];
}

export class TaskModel {
    id?: string;
    status: TASK_STATUS;
    task_type: string;
    message?: string;
    created_at?: Date;
}
