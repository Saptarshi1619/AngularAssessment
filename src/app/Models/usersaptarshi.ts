import { AddressSaptarshi } from "./addresssaptarshi";
import { Assessment } from "./assessment";
import { Role } from "./roles.enum";

export class UserSaptarshi {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: AddressSaptarshi;
    mobile: string
    role: Role; // Enum for User roles (Admin, Faculty, Trainee)
    assessments: Assessment[]

    constructor(id:number, firstname:string, lastname:string, email:string, password:string, address:AddressSaptarshi,mobile:string, role:Role, assessments:Assessment[])
    {
        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email
        this.password = password
        this.address = address
        this.mobile = mobile
        this.role = role
        this.assessments = assessments
    }
  }