import { Fetch, getParams, GlobalEnvironment } from "../helpers";
import { User } from "../models";

export class UserService {
  static async GetAllUsers(): Promise<User[]> {
    return Fetch<User[]>(`${GlobalEnvironment.GetUrlApi()}/users`, getParams);
  }

  static async GetUserByID(userID: number): Promise<User[]> {
    return Fetch<User[]>(
      `${GlobalEnvironment.GetUrlApi()}/users/${userID}`,
      getParams
    );
  }
}
