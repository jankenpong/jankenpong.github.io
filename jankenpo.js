//1=batu,2=kertas,3=gunting
var countMenang=0	;
var countKalah=0;
var countRound=1;
var parentButton=document.getElementById('button');
var childBatu=document.getElementById('btnBatu');
var childKertas=document.getElementById('btnKertas');
var childGunting=document.getElementById('btnGunting');

var parentDisplay=document.getElementById('display');
var childComputer=document.getElementById('displayComputer');
var childResult=document.getElementById('displayResult');
var childNext=document.getElementById('btnNextRound');

// var createButton = document.createElement("button");
//     createButton.setAttribute('id','btnNextRound');
//     createButton.setAttribute('onClick','confirmBox()')
//     var createText = document.createTextNode("Next Round");
//     createButton.appendChild(createText);
//     var element = document.getElementById('display');
//     element.appendChild(createButton);

function result(user) {
  
  function computerInput(computer) {
    if(computer===1) {
	  document.getElementById("displayComputer").innerHTML = 'Komputer : BATU';
    }else if(computer===2) {
	  document.getElementById("displayComputer").innerHTML = 'Komputer : KERTAS';
    }else {
	  document.getElementById("displayComputer").innerHTML = 'Komputer : GUNTING';
    }
   

  //userInput=batu
  if(user===1 && computer===1) {
    document.getElementById('displayResult').innerHTML= 'Wah seri nih'
  }else if (user===1 && computer===2){
    document.getElementById('displayResult').innerHTML= 'Maaf, kamu kalah di round ini';
    countKalah++;
    document.getElementById('lose').innerHTML='Kalah: '+countKalah;
  }else if (user===1 && computer===3){
    document.getElementById('displayResult').innerHTML= 'Selamat, kamu menang di round ini!!'
    countMenang++;
    document.getElementById('win').innerHTML='Menang: '+countMenang;

  //userInput=kertas
  }else if (user===2 && computer===1){
    document.getElementById('displayResult').innerHTML= 'Selamat, kamu menang di round ini!!'
    countMenang++;
    document.getElementById('win').innerHTML='Menang: '+countMenang;
  }else if (user===2 && computer===2){
    document.getElementById('displayResult').innerHTML= 'Wah seri nih'
  }else if (user===2 && computer===3){
    document.getElementById('displayResult').innerHTML= 'Maaf, kamu kalah di round ini'
    countKalah++;
    document.getElementById('lose').innerHTML='Kalah: '+countKalah;

  //userInput=gunting
  }else if (user===3 && computer===1){
    document.getElementById('displayResult').innerHTML='Maaf, kamu kalah di round ini'
    countKalah++;
    document.getElementById('lose').innerHTML='Kalah: '+countKalah;
  }else if (user===3 && computer===2){
    document.getElementById('displayResult').innerHTML= 'Selamat, kamu menang di round ini!!'
    countMenang++;
    document.getElementById('win').innerHTML='Menang: '+countMenang;
  }else if (user===3 && computer===3){
    document.getElementById('displayResult').innerHTML= 'Wah seri nih'
  }

  }
  countRound++;
  computerInput(Math.floor(Math.random()*3)+1)
  document.getElementById('btnNextRound').style.visibility='';

  if(countMenang===3) {
    document.getElementById("finalResult").innerHTML= 'SELAMAT KAMULAH JUARANYA. Silahkan ambil hadiah mu!'
    parentButton.removeChild(childBatu);
    parentButton.removeChild(childKertas);
    parentButton.removeChild(childGunting);
    parentDisplay.removeChild(childComputer);
    parentDisplay.removeChild(childResult);
    parentDisplay.removeChild(childNext); 

    // var refreshbtn = document.createElement("button");
    // refreshbtn.setAttribute('onClick','refresh()')
    // var createText = document.createTextNode("Main Lagi");
    // refreshbtn.appendChild(createText);
    // var element = document.body;
    // element.appendChild(refreshbtn);


   
    document.getElementById('spoiler').style.display='';
     document.getElementById('refreshBtn').style.display='';

  } 

  
  if(countKalah===3){
    document.getElementById("finalResult").innerHTML= 'Maaf kamu kalah kali ini, tapi ada hadiah penghibur juga kok. Silhkan ambil hadiah di bawah!!'
    parentButton.removeChild(childBatu);
    parentButton.removeChild(childKertas);
    parentButton.removeChild(childGunting);
    parentDisplay.removeChild(childComputer);
    parentDisplay.removeChild(childResult);
    parentDisplay.removeChild(childNext); 	

    // var refreshbtn = document.createElement("button");  
    // refreshbtn.setAttribute('onClick','refresh()')
    // var createText = document.createTextNode("Main Lagi");
    // refreshbtn.appendChild(createText);
    // var element = document.body;
    // element.appendChild(refreshbtn);

     
     document.getElementById('spoilerKalah').style.display='';
     document.getElementById('refreshBtn').style.display='';
  }
}


function optionBatu() {
	result(1);
	
}

function optionKertas() {
	result(2);
}

function optionGunting() {
	result(3);
}



document.getElementById("btnBatu").addEventListener("click", optionBatu);
document.getElementById("btnKertas").addEventListener("click", optionKertas);
document.getElementById("btnGunting").addEventListener("click", optionGunting);




function confirmBox() {
  if(confirm('Lanjut ke round selanjutnya?')){
    document.getElementById("displayResult").innerHTML='';
    document.getElementById("displayComputer").innerHTML='';
    document.getElementById("finalResult").innerHTML='';
    document.getElementById("round").innerHTML='Round '+countRound;
    document.getElementById('btnNextRound').style.visibility='hidden';
  }else {
    document.getElementById("finalResult").innerHTML= 'Ayo jangan menyerah, masih ada kesempatan kok'

  }
}


function refresh() {
  location.reload();
}


//hadiah menang
function ambilHadiah() {
 if(document.getElementById('hadiah').style.display=='none') {
  document.getElementById('hadiah').style.display=''}
 else{
 document.getElementById('hadiah') .style.display='none'
 }
}

//hadiah kalah
function ambilHadiahKalah() {
 if(document.getElementById('hadiahKalah').style.display=='none') {
  document.getElementById('hadiahKalah').style.display=''}
 else{
 document.getElementById('hadiahKalah') .style.display='none'
 }
}