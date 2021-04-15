const gameSummary = {
 numbers: 0,
 wins: 0,
 losses: 0,
 draws: 0
}

const game = {
 playerHand: "",
 aiHand: "",

}


const hands = [...document.querySelectorAll('.select img')];
const btn = document.querySelector('.start');

 handSelection =  (e) =>  {

 game.playerHand = e.target.dataset.option;
 console.log(game.playerHand);
 hands.forEach(hand => hand.style.boxShadow = '');
 e.target.style.boxShadow = '0 0 0 4px yellow';

}
hands.forEach(hand =>hand.addEventListener('click',handSelection));



aiChoose = (e) =>{
 if(game.playerHand=== "")   alert('proszę wybrać zdjęcie');
 

const index = Math.floor(Math.random () * hands.length);
 game.aiHand = hands[index].dataset.option;
 console.log(game.aiHand);

}
btn.addEventListener('click',aiChoose);

const summaryChoises  = document.querySelectorAll('.panel-left  span ');



result = (e) =>{
 if(game.playerHand !=="" ){
 if((game.playerHand == "nożyczki" && game.aiHand == "papier") ||
 (game.playerHand == "kamień" && game.aiHand == "nożyczki") ||
 (game.playerHand == "papier" && game.aiHand == "kamień" ) ) {
  console.log('wygrałeś');
  gameSummary.wins ++;
  summaryChoises[2].textContent = 'wygrałeś/aś,brawo :)';
  summaryChoises[2].style.color = "green";
 }
  
 else if(game.playerHand == game.aiHand) {
   console.log('remis');
  gameSummary.draws ++;
  
  summaryChoises[2].textContent = 'remis';
  summaryChoises[2].style.color = "grey";
   }

    else{
   console.log('przegrałeś');
   gameSummary.losses ++;
   summaryChoises[2].textContent = 'przegrałeś/aś :( Może jeszcze raz?';
   summaryChoises[2].style.color = "red";
    }

gameSummary.numbers ++;
   }
  }
btn.addEventListener('click',result);




const showChoices = () =>{
summaryChoises[0].textContent =  game.playerHand;
summaryChoises[1].textContent =  game.aiHand;
styleResult=summaryChoises[2];
}
 
btn.addEventListener('click',showChoices);



const styles = document.querySelectorAll('.panel-right span');



showResults = () =>{
 styles[0].textContent = gameSummary.numbers;
 styles[1].textContent = gameSummary.wins;
 styles[2].textContent = gameSummary.losses;
 styles[3].textContent = gameSummary.draws;
}
btn.addEventListener('click',showResults);




playerReset = (e) =>{
 game.playerHand = "";
hands.forEach((hand,index) => {
 hands[index].style.boxShadow ="none";
});
 }
 btn.addEventListener('click',playerReset);



