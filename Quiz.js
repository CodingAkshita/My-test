class Quiz {
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef  = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount(); 
          }
          
          question = new Question()
          question.display();
        }
}

play(){
    question.hide();
    background("yellow");    
    textSize(30)
    stroke("violet");
    fill("violet");
    text("Result of the Quiz",120,100);
    contestant.getContestantinfo();
    if(allPlayers!==undefined){
        stroke("violet");
        fill("violet");
        text("*NOTE: Contestant/Contestants who answered correct are highlighted in Green colour!",120,100);
       for(var plr in allContestants){
       var correctAns = "4";   
       if(correctAns===allContestants[plr].answer)
       fill("green"); 
       else
       fill("red");
      }
  }
  }
}