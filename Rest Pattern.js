'use strict'
const friends=['Pratik','Jack','Hailee','Jim','Pam'];
const[best,secondbest,...others]=friends;
console.log(best,secondbest,others);

const restrarunt = {
    Name:"Crsisperry",
    Founded:1902,
    Founder:'Pratik',
    Startermenu:['Kanda-Pohe','Bread-Butter','Paratha','Spaghetii'],
    Menu:['Pizza','Cake','Pie','Sandwich','Burgor','Noodles']
}

const[firstdish,seconddish,...other]= [...restrarunt.Startermenu,...restrarunt.Menu];
console.log(firstdish,seconddish,other);

const arr=[1,2,3,4,5,6];
const [a1, ...otherss]=arr;
console.log(a1,otherss);
console.log(typeof(otherss));