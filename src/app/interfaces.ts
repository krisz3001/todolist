export interface TodoEditor{
    text: string;
    description: string;
    done: boolean;
}

export interface TodoItem{
    todoId: number;
    text: string;
    description: string;
    done: boolean;
}