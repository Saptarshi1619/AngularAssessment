import { AddressSaptarshi } from "./addresssaptarshi";
import { Role } from "./roles.enum";

export class UserSaptarshi {
    id: number;
    firstName: string;
    lastName: string;
    address: AddressSaptarshi;
    role: Role; // Enum for User roles (Admin, Faculty, Trainee)

    constructor(id:number, firstname:string, lastname:string, address:AddressSaptarshi, role:Role)
    {
        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
        this.address = address
        this.role = role
    }
  }