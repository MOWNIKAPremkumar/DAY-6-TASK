//3. Write a “person” class to hold all the details.


class Person {
    constructor(Details,name, age, DOB, email, phoneno, address, pincode,qualification, percentage, experience){ 
    this.Details=Details;
    this.name=name;
    this.age= age;
    this.DOB = DOB;
    this.email= email;
    this.phoneno = phoneno;
    this.address= address;
    this.pincode=pincode;
    this.qualification=qualification;
    this.percentage=percentage;
    this.experience=experience
}

printd1(){
return `Details:${this.Details}
name:${this.name}, 
age:${this.age},
DOB:${this.DOB},
email:${this.email},
phoneno:${this.phoneno},
address:${this.address},
pincode:${this.pincode},
qualification:${this.qualification},
percentage:${this.percentage}, 
experience:${this.experience}`;
 }

printd2(){
return `Details:${this.Details}
name:${this.name}, 
age:${this.age},
DOB:${this.DOB},
email:${this.email},
phoneno:${this.phoneno},
address:${this.address},
pincode:${this.pincode},
qualification:${this.qualification},
percentage:${this.percentage}, 
experience:${this.experience}`;
}
}
var r = new Person ("person1", "M.MAHAT", 24, "2/6/1998", "abc@gmail.com", 8899776655, "M.Nagar,coimbatore","641 401", "BSC", "80%", "Two years");
console.log(r.printd1());
var f = new Person ("person2", "P.Dev",23,"29/8/1999","bcd@gmail.com",9977885566,"V.Nagar,Erode","638 001", "MBA","90%","Three Years");
console.log(f.printd2());
