'use strict'

const obj={
    Name:"NESP",
    City:'Mumbai',
    Accrediction:'A++',
    Classes:
    {
        BTech: 
        {
            branches:"ECS,CS,IT",
            Sem:5
        },

        BSC:
        {
            branches:"MIB,Maths,Physics"
        },
    }
};

const {Classes}=obj;
//console.log(obj.Classes);
const {
    BTech:{branches:br,Sem:no}
 ,BSC:{branches:br1}}=Classes;
console.log(`${br}, ${br1} and ${no}`);