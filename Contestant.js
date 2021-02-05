class Contestant {
    constructor(){
      this.enter = createButton("Submit");
      this.index = null;
      this.answer = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data) =>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
    static getContestantinfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data) =>{
        allContestants = data.val();
    })
  }

  display(){
        this.button.mousePressed(() =>{
        this.input.hide();
        this.button.hide();
  
       contestant.name = this.input.value();
        
        contestantCount+=1;
        contestant.index = contestantCount
        contestant.update()
        contestant.updateCount(contestantCount);
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  }
  }
  