class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Quiz Game");
      title.position(350, 0);
  
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestantount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);

        this.question.html("Question:What has a bed but never sleeps, can run but never walks, and has a bank but no money? ");
        this.question.position(150,80);
        this.option1.html("a Human")
        this.question.position(150,120);
        this.option2.html("a Tree")
        this.question.position(150,160);
        this.option3.html("A River");
        this.question.position(150,200);

        this.input.position(150,250);
      });
  
    }
  }
  