const multiplyValue = (value:number, multiplier?:number): number =>{
    if(multiplier && multiplier !== 0){
        return value * multiplier;
    }else if(multiplier === 0){
        return multiplier;
    }else{
        return value * 2;
    }
}




const processInput = (input: string | number | boolean):string | number =>{
    if(typeof input === "string"){
        const trimmed = input.trim();
        const lowerCased = trimmed.toLowerCase();
        return lowerCased;
    }else if(typeof input === "number"){
        return input * 10;
    }else{
      return input ? "Active" :  "Inactive";
    }   
}



const formatCoordinate = (value: readonly [number,number,string]): string =>{
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`
}



const concatenateArrays = <T>(...args: T[][]):T[] =>{
    let arr: T[] = [];
    for(let arg of args){
        arr.push(...arg)
    }
    return arr;
}



interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] =>{
    const filteredCourses = courses.filter(course => {
        if(course.isPublished === true && course.students >= minStudents){
            return course;
        }
    });
    
    return filteredCourses;
}



const pluckValues = <T, k extends keyof T>(items: T[], key: k): T[k][] =>{
    return items.map(item => item[key]);
}



class Employee{
    constructor(protected name:string, private baseSalary:number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor(name:string, baseSalary: number, private department: string){
        super(name,baseSalary);
    }

    getRoleInfo(): string{
        return`Manager of ${this.department}: ${this.name}`
    }
}



const validateAgeAsync = async(age:number): Promise<string> =>{
    if(age >= 18){
        await new Promise<void>(resolve =>{
            setTimeout(resolve,1000)
        });
        return "Access Granted";
    }else{
        throw new Error("Access Denied: Must be 18 or older")
    }

}
