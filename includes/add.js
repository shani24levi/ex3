var boxshow = document.getElementById('areaShowBoxes');
var charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var words = [];

var height = 80;
var width = 80;



function cratBox(height,width){
    var box = document.createElement('div');
    box.style.height = height + 'px';
    box.style.width = width + 'px';
    box.className = 'box';

    return box;
}



function wordLocation(height,width){
    var p = document.createElement('p');
    p.style.marginTop = height*0.35+'px';  //64\180=0.35 from figma
    p.style.fontSize = width*0.27+'px';  //49\180=0.27 from figma
    
    return p;
}


//fuction for selcte 3 rendoms word from arry and save it in an array2
var rendomWorsSelctor = function(){
    var indexWord = 0;
    var i;

    for(i=1; i<=2; i++){
        indexWord = Math.floor(Math.random() * charArray.length);
        words.push(charArray[indexWord]);
    }
    words.push(charArray[indexWord]);  //need to have 2 equals in a row

};




//function for show 3 dynamic boxes on clike
var dynamicBoxes = function () {

    rendomWorsSelctor();
    var i = 0;

    for (i = 0; i < 3; ++i ,height += 20, width += 20) {
        var box= cratBox(height,width);
        box.addEventListener('click', clickDynamicBox);
        boxshow.appendChild(box);

        //put in the box thet created one word from array
        var p= wordLocation(height,width);
        p.innerHTML = words[i];
        box.appendChild(p);
    
    }
};



var sTring = [];
var clickDynamicBox = function () { 
    if (sTring.length >= 2) {  //needed at list 2 boxes
        clear();
    }   

    if (!this.className.includes('show')) {
        if (!this.className.includes('correct')) {
            this.className = this.className + ' show';
            sTring.push(this);
            if (sTring.length == 2) {

                chackEquls();
            }
        }
    }
   
};




var clear = function () {
    var i = 0;
    for (i = 0; i < sTring.length; ++i) {
        sTring[i].className = sTring[i].className.replace('show', '');
    }
    sTring = []; // empty array
};





var chackEquls = function () {

    var word1 = sTring[0].innerHTML;
    var word2 = sTring[1].innerHTML;

    var index = word1.indexOf('">');
    var PIndex = word1.indexOf('</p');
    var final1 = word1.substring(index, PIndex);

    index = word2.indexOf('">');
    PIndex = word2.indexOf('</p');
    var fainal2 = word2.substring(index, PIndex);

    var equal=0;
    if (final1 == fainal2){
        equal=1;
    }

    if(equal){
        for (i = 0; i < sTring.length; ++i) 
            sTring[i].className = sTring[i].className.replace('show', 'correct');
        
    }
  
    else 
        clear;
};










