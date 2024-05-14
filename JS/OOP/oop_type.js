// ------------ INHERITANCE -----------------
// parent/main class
class Employee{
    constructor(name, email, jobProfile, joiningDate){
        this.ename = name
        this.eemail = email
        this.ejobPrf = jobProfile
        this.ejoinDate = joiningDate
    }

}

// child/sub class
class Designer extends Employee{
    constructor(name, email, jobProfile, joiningDate, tool){
        //super - used to inherit the data(properties) from parent
        super(name, email, jobProfile, joiningDate) 
        this.etool = tool
    }
    

}

// child/sub class
class Programmer extends Employee{
    constructor(name, email, jobProfile, joiningDate, stack){
        super(name, email, jobProfile, joiningDate)
        this.estack = stack
    }

}

var emp1 = new Designer('Suma', 'suma@gmail.com', 'UI/UX', '1/02/2023', 'Photoshop')
console.log(emp1)

var emp2 = new Programmer('Surya', 'surya@gmail.com', 'Developer', '2/08/2023', 'Django')
console.log(emp2)



// another way
// parent/main class
class Employee2{
    constructor(name, email, jobProfile, joiningDate){
        this.ename = name
        this.eemail = email
        this.ejobPrf = jobProfile
        this.ejoinDate = joiningDate
    }
    emp_name_email(){
        return "Emp name is: "+this.ename+" Emp Email is: "+this.eemail
    }
    emp_job_prf(){
        return " Emp Job Profile is: "+this.ejobPrf+" Emp Joining Date is: "+this.ejoinDate
    }

}

// child/sub class
class Designer2 extends Employee2{
    constructor(name, email, jobProfile, joiningDate, tool){
        //super - used to inherit the data(properties) from parent
        super(name, email, jobProfile, joiningDate) 
        this.etool = tool
    }
    final_read(){
        return super.emp_name_email()+ super.emp_job_prf()+ " Emp Tool is: "+this.etool
    }

}

// child/sub class
class Programmer2 extends Employee2{
    constructor(name, email, jobProfile, joiningDate, stack){
        super(name, email, jobProfile, joiningDate)
        this.estack = stack
    }
    final_read2(){
        return super.emp_name_email()+ super.emp_job_prf()+ " Emp Stack is: "+this.estack
    }

}

var emp1 = new Designer2('Suma', 'suma@gmail.com', 'UI/UX', '1/02/2023', 'Photoshop')
console.log(emp1.final_read())

var emp2 = new Programmer2('Surya', 'surya@gmail.com', 'Developer', '2/08/2023', 'Django')
console.log(emp2.final_read2())




// Practice with student details
class Student{
    constructor(id, name, email, age){
        this.std_id = id
        this.std_name = name
        this.std_email = email
        this.std_age = age
    }
    std_info(){
        return "Id : "+this.std_id+" Name : "+this.std_name+ " Email : "+this.std_email+ " Age : "+this.std_age
    }
}

class marks extends Student{
    constructor(id, name, email, age, sub1, sub2, sub3){
        super(id, name, email, age)
        this.std_sub1 = sub1
        this.std_sub2 = sub2
        this.std_sub3 = sub3
    }
    marks_info(){
        return super.std_info()+ " Maths marks : "+this.std_sub1+ " Physics marks : "+this.std_sub2+" Chemistry marks : "+this.std_sub3
    }

}

var student1 = new marks(1, 'Suma Teki', 'suma@gmail.com', 21, 89, 91, 85 )
var student2 = new marks(2, 'Surya Karanam', 'surya@gmail.com', 26, 93, 84, 91 )

console.log(student1.marks_info())
console.log(student2.marks_info())




//task
class Animal{
    constructor(name){
        this.name = name
    }

}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}

class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}

//calling dog
var dog_animal1 = new Dog('Puppy' ,' Husky')
var dog_animal2 = new Dog('Juic' , 'German')
console.log(dog_animal1)
console.log(dog_animal2)

//calling cat
var cat_animal1 = new Cat('Luna', 'Siamese')
var cat_animal2 = new Cat('Max', 'Maine Coon')
console.log(cat_animal1)
console.log(cat_animal2)



// ------------ ABSTRACTION --------------
//when we using abstract then we donot call parent in chils clss
class Person{
    constructor(){
        if(this.constructor == Person){
            throw new Error('You cannot use main class constructor')
        }
        
    }
    info(){
        throw new Error('Cannot read info from abstract class')
    }
}
class Teacher extends Person{
    info(){
        // super.info() //if we add this it'll throw an error from info() of parent cls
        console.log("She is maths teacher")
    }
}
var teacher1 = new Teacher()
teacher1.info()






