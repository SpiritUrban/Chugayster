const path = "/_pages/programs/rozvivalka";

 //location.reload()
document.addEventListener("keypress", keyboardProcesor, false); // возможно полечить используя "keypress" - другие коды

// База слів "arWord"
//var arWord = [ "ВДАЧА", 
//               "РОБОТ"];
var arWord = [ "МОНСТЕРТРАК",
               "ДИНОЗАВР",
               "КОЛЕСО",
               "БУЛЬДОЗЕР",
               "КАТОК",
               "ЕКСКАВАТОР",
               "БЕТОНОМІШАЛКА",
               "АВТОБУС",
               "БОБЕР",
               "ВЕРТОЛІТ",
               "ДЕРЕВО",
               "БУДИНОК",
               "РАКЕТА",
               "САМОСКИД",
               "ЛАМПОЧКА",
               "СВИНЯ",
               "РОБОТ",
               "ПОЖЕЖНА МАШИНА",
               "КВІТКА",
               "СЛОН",
               "ЗЕБРА",
               "СВІТЛОФОР"];
var label = 0; //указатель на символ
var ArrOneWord = [];
var locker = true;
var soundFlag = true;

//var localStorage.level;

var A = document.getElementById("A");

function startControl() {
  console.log( "старт контроль - "+locker);
    if (locker == true) {
      locker = false;
      builder();
    };
}; 

function cache(){
    // Video kesh
    var mediaKesh = document.getElementById("kesh");
    mediaKesh.src= path + '/vidos/'+arWord[Number(localStorage.level)+1] +'.mp4';
    mediaKesh.onerror = function(){ mediaElement.src=path+'/vidos/'+arWord[Number(localStorage.level)+1] +'.webm'};
};

function builder() {

  locker = false;

  if (localStorage.level === undefined) { localStorage.level = 6;};

  localStorage.level++;          
            
  var buildWord = arWord[Number(localStorage.level)]; // buildWord - вместитель слова уровня

  // Перевірка на вихід за межі масиву
  if (buildWord === undefined) { 
    localStorage.level = -1;
    console.log("вийшли за межі масиву, назначено рівень 0, ПЕРЕЗАПУСК ");
    builder();         
  }else{

    console.log("поточне слово = "+buildWord);

    // БУДУЭМО ДОМ - СЛОВО
    ArrOneWord = buildWord.split('');

    // Чистимо ДОМ "center"
    center.innerHTML = "";    
              
    // ЦИКЛ ПОБУДОВИ ДОМ
    for (var i = 0; i < buildWord.length; i++) { 
      center.innerHTML += '<input id="'+i+'" class="letter" type="button" value="'+ArrOneWord[i]+'" onclick = letterProcesor('+i+');>';                   
    };  
    // ВІДЕО
      var mediaElement = document.getElementById("vidosik");
      //mediaElement.pause();
      //var fileName = ArrOneWord[localStorage.level] +'.mp4'; 
      //mediaElement.volume=0.3;
      mediaElement.src= path + '/vidos/'+arWord[localStorage.level] +'.mp4';
      //console.log(arWord[localStorage.level] +'.mp4');
      vidosik.onerror = function(){ mediaElement.src= path + '/vidos/'+arWord[Number(localStorage.level)] +'.webm'};// було замість МЕДІАЕЛЕМЕНТ - ВІДОСІК

  };         
};   

function step(){
  document.getElementById(label).style.background="#de7800";
  label++;
  Sound(ArrOneWord[label-1]);
};


function letterProcesor(letter){
  //відстрочена ф
  if (letter == 1) setTimeout(cache(), 5000);
  if (letter == label) step();
  if (label == arWord[localStorage.level].length) { builder(); label=0; };
  console.log(arWord[localStorage.level]);
};


function keyboardProcesor(e){

  var keyID = e.keyCode || e.which;
  var keyChar = String.fromCharCode(keyID);

  console.log("keyID =*=" + keyID);

  if (keyID == 32) {if (locker == true) startControl()}; // Пробел

  switch(ArrOneWord[label]) {
   case " ": if (keyID == 32) step(); break;//F
   case "А": if (keyID == 1040 || keyID == 1072 || keyID == 70 || keyID == 102) step(); break;//F
   case "Б": if (keyID == 1041 || keyID == 1073 || keyID == 44) step(); break;//, 
   case "В": if (keyID == 1042 || keyID == 1074 || keyID == 68 || keyID == 100) step(); break;//D
   case "Г": if (keyID == 1043 || keyID == 1075 || keyID == 85 || keyID == 117) step(); break;//U
   case "Д": if (keyID == 1044 || keyID == 1076 || keyID == 76 || keyID == 108) step(); break;//L
   case "Е": if (keyID == 1045 || keyID == 1077 || keyID == 84 || keyID == 116) step(); break;//T
   case "Є": if (keyID == 1069 || keyID == 1101 || keyID == 39 || keyID == 1108 || keyID == 1028) step(); break;//'Э
   case "Ж": if (keyID == 1046 || keyID == 1078 || keyID == 59) step(); break;//;
   case "З": if (keyID == 1047 || keyID == 1079 || keyID == 80 || keyID == 112) step(); break;//P
   case "И": if (keyID == 1048 || keyID == 1080 || keyID == 66 || keyID == 98) step(); break;//B
   case "І": if (keyID == 1030 || keyID == 1110 || keyID == 83 || keyID == 115 || keyID == 1067 || keyID == 1099) step(); break;//S Ы 
   case "Ї": if (keyID == 1066 || keyID == 1098 || keyID == 93 || keyID == 1111 || keyID == 1031) step(); break;//]
   case "Й": if (keyID == 1049 || keyID == 1081 || keyID == 81 || keyID == 113) step(); break;//Q
   case "К": if (keyID == 1050 || keyID == 1082 || keyID == 82 || keyID == 114) step(); break;//R
   case "Л": if (keyID == 1051 || keyID == 1083 || keyID == 75 || keyID == 107) step(); break;//K

   case "М": if (keyID == 1052 || keyID == 1084 || keyID == 86 || keyID == 118) step(); break;//V
   case "Н": if (keyID == 1053 || keyID == 1085 || keyID == 89 || keyID == 121) step(); break;//Y
   case "О": if (keyID == 1054 || keyID == 1086 || keyID == 74 || keyID == 106) step(); break;//J
   case "П": if (keyID == 1055 || keyID == 1087 || keyID == 71 || keyID == 103) step(); break;//G
   case "Р": if (keyID == 1056 || keyID == 1088 || keyID == 72 || keyID == 104) step(); break;//H

   case "С": if (keyID == 1057 || keyID == 1089 || keyID == 67 || keyID == 99) step(); break;//C
   case "Т": if (keyID == 1058 || keyID == 1090 || keyID == 78 || keyID == 110) step(); break;//N
   case "У": if (keyID == 1059 || keyID == 1091 || keyID == 69 || keyID == 101) step(); break;//E
   case "Ф": if (keyID == 1060 || keyID == 1092 || keyID == 65 || keyID == 97) step(); break;//A

   case "Х": if (keyID == 1061 || keyID == 1093 || keyID == 91) step(); break;//[ 
   case "Ц": if (keyID == 1062 || keyID == 1094 || keyID == 87 || keyID == 119) step(); break;//W
   case "Ч": if (keyID == 1063 || keyID == 1095 || keyID == 88 || keyID == 120) step(); break;//X
   case "Ш": if (keyID == 1064 || keyID == 1096 || keyID == 73 || keyID == 105) step(); break;//I

   case "Щ": if (keyID == 1065 || keyID == 1097 || keyID == 79 || keyID == 111) step(); break;//O
   case "Ь": if (keyID == 1068 || keyID == 1100 || keyID == 77 || keyID == 109) step(); break;//M
   case "Ю": if (keyID == 1070 || keyID == 1102 || keyID == 46) step(); break;//.
   case "Я": if (keyID == 1071 || keyID == 1103 || keyID == 90  || keyID == 122) step(); break;//Z
   case "'": if (keyID == 39   || keyID == 96   || keyID == 126 || keyID == 1105 || keyID == 1025) step(); break;//Z   

   default: 
  };

console.log(keyID);

  if (label == arWord[localStorage.level].length) { builder(); label=0;};
};

/* ******************************************* БАЗА ЗВУКІВ ******************************************** */

function Sound(let) {
  switch(let) {
   case "А": A.play(); break;        
   case "Б": B.play(); break;
   case "В": V.play(); break;    
   case "Г": G.play(); break; 
   case "Д": D.play(); break;   
   case "Е": E.play(); break;    
   case "Є": YE.play(); break; 
   case "Э": E.play(); break;  
   case "Ж": J.play(); break;    
   case "З": Z.play(); break; 
   case "И": _N.play(); break;  
   case "Ы": _N_.play(); break;    
   case "І": I.play(); break; 
   case "Ї": YI.play(); break;  
   case "Й": YY.play(); break;    
   case "К": K.play(); break; 
   case "Л": L.play(); break;  
   case "М": M.play(); break;    
   case "Н": N.play(); break; 
   case "О": O.play(); break;  
   case "П": P.play(); break;    
   case "Р": R.play(); break; 
   case "С": S.play(); break;  
   case "Т": T.play(); break;    
   case "У": U.play(); break; 
   case "Ф": F.play(); break; 
   case "Х": H.play(); break;    
   case "Ц": C.play(); break; 
   case "Ч": CH.play(); break;         
   case "Ш": SH.play(); break;  
   case "Щ": SCH.play(); break;    
   case "Ю": UU.play(); break; 
   case "Я": YA.play(); break;   
   case "Ь": MZNAK.play(); break;    
   case "Ъ": TZNAK.play(); break;  
   default:                                                                                                        
  };       
};

