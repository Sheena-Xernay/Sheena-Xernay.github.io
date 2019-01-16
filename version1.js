
var dancingWords = [];
function DanceSpan(element, x, y) {
  element.position(20,800);
  
  this.brownian = function() {
    x += random(-1, 1);
    y += random(-1, 1);
    element.position(x,y);
  };
}

function setup() {
  // This paragraph is created aside of the main block of code.
  // It's to differentiate the creation of an element from its 
  // selection. Selected elements don't need to be created by 
  // p5js, they can be just plain HTML.
translate(0, 600);
  createCanvas(500,200);
  fill(0, 102, 153);
  createP('UX/UIResearcher HumanFactorsEngineer AeronauticalEngineering Front-endDeveloper '
    ).addClass('text');

  // This line grabs the paragraph just created, but it would 
  // also grab any other elements with class 'text' in the HTML
  // page.
  var texts = selectAll('.text');

  for (var i=0; i<texts.length; i++) {
    var paragraph = texts[i].html();
    var words = paragraph.split(' ');
    for (var j=0; j<words.length; j++) {   
      var spannedWord = createSpan(words[j]);
      var dw = new DanceSpan(spannedWord, random(200), random(400));
      dancingWords.push(dw);
    }
  }
}

function draw() {
  for (var i=0; i<dancingWords.length; i++) {
    dancingWords[i].brownian();
  }
}


function myFunction() {
    var x = document.getElementById("portfolio");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

