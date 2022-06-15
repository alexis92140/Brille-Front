export default interface IUser {
  id: number;
  admin: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  created: Date;
  phone: number;
  modified: Date;
}
