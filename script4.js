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

