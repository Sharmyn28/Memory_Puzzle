
let n = 3;
let m = 4;
let table_place = document.getElementById('table_place');

let source = ['img1','img2','img4','img5',
'img3','img6','img2','img1',
'img6','img5','img3','img4'];

function createTable(){
	let table = document.createElement('table');
	let cont = 0;
	for(let i = 0 ; i< n; i++){
		let row = document.createElement('tr');
		for(let j = 0; j< m; j++){
			let box = document.createElement('td');
			box.setAttribute('class','cards');
			box.setAttribute('id', i+','+j);
			let img = document.createElement('img');
			img.setAttribute('class','back');
			img.setAttribute('src','assets/img/'+ source[cont] +'.jpg');
			cont++;
			box.appendChild(img);
			row.appendChild(box);
		}
		table.appendChild(row);
	}
	$("#table_place").append(table);
}

createTable();

/*
let back = document.getElementsByClassName('back');
table_place.addEventListener("click",function(event){
	if (event.target.tagName == "TD"){
		event.target.firstChild.style.display = "flex";
	}
});

table_place.addEventListener("dblclick",function(event){
	if (event.target.tagName == "TD"){
		event.target.firstChild.style.display = "none";
	}
});
*/
var guess1 = "";
var guess2 = "";
var count = 0;
var hasWin = 0;

$("td").click(function() {

  if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {
    count++;
    $(this).children("img").show();
    $(this).children("img").addClass("face-up");
    
    //guess #1
    if (count === 1 ) { 
      guess1 = $(this).children("img").attr("src"); 
    }  else { 
      guess2 = $(this).children("img").attr("src"); 
      
      if (guess1 === guess2) { 
        console.log("match");
        $("td").children("img[src='" + guess2 + "']").addClass("match");
        hasWin++;
        if(hasWin == 6){
			alert('GANASTE!!');
		}
      } else { 
        console.log("miss");
        setTimeout(function() {
          $("img").not(".match").hide();
          $("img").not(".match").removeClass("face-up");
        }, 900);
      }
      count = 0; 
      setTimeout(function() { console.clear(); }, 60000);      
    }
  }
 });