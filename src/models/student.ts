export class Student{
    constructor(
        public Id:number,
        public Name:string,
        public Courses:string[],
        public isActive:boolean
    ){}
}