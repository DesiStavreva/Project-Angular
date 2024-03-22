import { User } from "./user";


export interface Post {
  _ownerId: User;
  recipe_name: string;
  ingredients: string[];
  steps: string[];
  _createdOn: number;
  _id: User[];
}
