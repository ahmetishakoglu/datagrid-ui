import {BaseModel} from "./base.model";

export interface SocialMediaModel extends BaseModel {
  url: string;
  name: string;
  description: string;
}
