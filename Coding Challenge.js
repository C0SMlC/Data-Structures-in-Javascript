'use strict'
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printgoals :function(...players)
  {
     let goalscored=0;
     

     for(i=0;i<players.length;i++)
     {
      console.log(`The Player ${players[i]} has scored `);

      
     }
  }
};

const[players1,players2]=game.players;
console.log(players1,players2);

const[gk1, ...others1]=players1;
console.log(gk1,others1);

const [gk2, ...others2] = players2;
console.log(gk2, others2);

const allplayers=[...players1,...players2];
console.log(allplayers);


const finalplayers=[...players1,'sub1','sub2','sub3'];
console.log(finalplayers);


const{odds}=game;
console.log(odds);

const{team1:Team1,x:Draw,team2:Team2}=odds;
console.log(Team1,Draw,Team2);


const{odds:{team1:X,x:draw,team2:Y}}=game;

console.log(X,draw,Y);