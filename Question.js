class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');  
      this.greeting = createElement('h3');
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');      
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
      
    }
     hide(){
     this.input.hide();
      this.button.hide();
      this.greeting.hide();
     }
    display(){
      var title = createElement('h2')
      stroke("white");
      fill("white");
      title.html("My Quiz Game");
      title.position(350, 0); 
      
      this.question.html("Question:- How many months of a year has 28 days?");
      this.question.position(150,80);
      this.option1.html("1) 1 month");
      this.option1.position(150,100);
      this.option2.html("2) 3 months");
      this.option2.position(200,100);
      this.option3.html("3) 0 months");
      this.option3.position(150,120);
      this.option4.html("4) 12 months");
      this.option4.position(180,120);
      
      this.input.position(130, 160);
      this.button.position(250, 200);
  
        this.button.mousePressed(() =>{
        this.input.hide();
        this.button.hide();
  
       contestant.name = this.input.value();
        
        contestantCount+=1;
        contestant.index = contestantCount
        contestant.update()
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello " + contestant.name );
        this.greeting.position(130, 160)
      });

      var correctOption = createElement('h2');  
      stroke("yellow");
      fill("yellow")
      correctOption.html("Enter Correct Option No.");
      correctOption.position(180,160);
    }
  }
  