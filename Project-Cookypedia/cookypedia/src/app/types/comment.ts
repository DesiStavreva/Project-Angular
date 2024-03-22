import { User } from "./user";

export interface Comment {
  _ownerId: User;
  content: string;
  recipeId: string;
  _createdOn: number;
  _id: string;
}
