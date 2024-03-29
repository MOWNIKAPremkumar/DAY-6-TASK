// 1.Class - Movie

class Movie {
    constructor(title= '', studio = '', rating = 'PG') {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
 
    getPG(movies = [], rating = '') {
       return movies.filter((m) => m.rating === rating);
    }
 }
 
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
const leo = new Movie('Leo', 'LCU');
const vikram = new Movie('Vikram', 'Raj KamalFilms' );
const avatar = new Movie('Avatar: The water way', 'Light Strom Entertainment', 'PG13');
const avengers = new Movie('The avengers: End Game', 'Marvel Studios', 'PG13');
 
const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers];
 
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG13'));
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG'));

//2. Circle - Class
// Convert the UML diagram to Typescript class

class Circle {
    constructor(radius,color){ 
    this.radius = radius;
    this.color= color;    
    }
     get radiusCircle(){
       return this.radius;
     }
    set radiusCircle(radius){
        this.radius = radius;
    }
    get colorCircle(){
        return this.color;
  }
  set colorCircle(color){
    return this.color= color;
  }
    get toString(){
        return`"Circle[radius=${this.radius}, color=${this.color}]"`
    }
    get areaCircle (){
        return Math.PI*this.radius*this.radius
    }
    get circumferenceCircle(){
        return 2*Math.PI*this.radius;
        }}
var a1= new Circle(1.0,"Red",)
    
console.log(a1.radiusCircle);
    a1.radiusCircle=2.2;
    console.log(a1.radiusCircle)

    console.log(a1.colorCircle)
    a1.colorCircle="blue";
    console.log(a1.colorCircle);

    console.log(a1.toString);
    
    console.log(a1.circumferenceCircle);

    console.log(a1.areaCircle);



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

// 4.write a class to calculate the uber price.
class uber {
    constructor(initialfare,fareperkilometer,kilometer,servicecost,pickupcity,destination,car){ 
    this.initialfare = initialfare;
    this.fareperkilometer= fareperkilometer;
    this.kilometer= kilometer;
    this.servicecost=servicecost;
    this.pickupcity=pickupcity;
    this.destination=destination;
   this.car=car;
    }
    pricecalculator (){
        return`uberprice: "Erode to coimbatore": Rs.${(this.fareperkilometer*this.kilometer*this.servicecost)}`
       }
    calculator(){
          return `uberprice: "coimbatore to Tiruppur": Rs.${(this.fareperkilometer*this.kilometer*this.servicecost)}`
     }
    }
var a1= new uber("50","10","90","3", "Erode", "coimbatore", "uber XL")
    console.log(a1.pricecalculator());
var b1= new uber("45","9","56","3","coimbatore","Tiruppur","uberX")
    console.log(b1.calculator());





