export class Course {
    id: number;
    name: string; // cName
    description: string; // cDescription

    constructor(id:number, name:string, description:string)
    {
        this.id = id;
        this.name = name;
        this.description = description
    }
  }