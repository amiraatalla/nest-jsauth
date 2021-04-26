import { Document } from 'mongoose';
export declare class Todo extends Document {
    readonly title: String;
    readonly description: String;
}
