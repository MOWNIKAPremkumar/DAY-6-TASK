// Circle - Class
// Convert the UML diagram to Typescript class

class circle {
    constructor(radius,color){ 
    this.radius = radius;
    this.color= color;
    
    }
    getarea (){
        const π = 3.14;
        var area= π*this.radius*this.radius
    return `area:${area},
    color:"${this.color}"`;
    }
    getcircumference(){
        const π = 3.14;
        var circumference= 2* π*this.radius
    return `circumference:${circumference},
    color:"${this.color}"`; 
           
        }
    CircleD(){
        var CircleD =2*this.radius
    return `CircleD:${CircleD},
    color:"${this.color}"`; 

    }
    getradius(){
        var c = 15;
        const π = 3.14;
        var radius=c%2*π;
    return `radius:${radius},
    color:"${this.color}"`; 
    }
    }
var a1= new circle(4,"Red",)
    console.log(a1.getarea());
var b1= new circle(9,"Blue")
    console.log(b1.getcircumference());
var c1= new circle(10,"Yellow")
    console.log(c1.CircleD());
var d1= new circle(12,"pink")
    console.log(d1.getradius());