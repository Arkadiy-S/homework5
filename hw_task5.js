
// ДЗ  Задача 5
/* Самое популярное слово
Ввести построчно текст, состоящий из пробелов, переводов строки и латинских букв, и заканчивающийся пустой строкой.
 Вывести слово, которое чаще других встречается в тексте, если оно такое одно, и ---, если таких слов несколько.

"Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est \nconvallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis \n Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci \n Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt \n auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras \n congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas \n finibus lorem non tempor tincidunt aera \n"; 


Output:
tincidunt

*/

"use strict";
 
function popularWord (s) {

let arr = s.split(' '); // делаем из строки массив слов
let popWordStr = '';
let startPos = 0 ; //startPos - начальн. позиция в строке s для определения подстроки поиска из n символов
let numOfRepeatTmp = 1;   //  времен. число повторений 
let numOfRepeat = 1;   //  наибольшее число повторений
let word;  //  искомое слово, которое берется последовательно из текста слева направо 
let i;

for (startPos=0; startPos < arr.length; startPos++) { //цикл взятия слова из массива для поиска 
  word = arr[startPos];
  if (popWordStr.indexOf(word) != -1) continue; // если слово уже встречалось, то оно обработано, переход к следующему
  numOfRepeatTmp = 1;
  for (i = startPos + 1; i < arr.length; i++) { //цикл поиска соответствий взятого слова в массиве из слов текста
      if (arr[i] == word) numOfRepeatTmp++;
  } 
  if (numOfRepeat < numOfRepeatTmp) {numOfRepeat = numOfRepeatTmp;  popWordStr = word; continue} //это слово более частое
  if (numOfRepeat == numOfRepeatTmp) {popWordStr = popWordStr + " " + word;} //это слово такое же частое как и предыдущее, т.е. их несколько
 
}
console.log (popWordStr, " количество в тексте = " + numOfRepeat);
return numOfRepeat;
}

//Input:
let s = "Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas" + " " +
        "nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam" + " " +
        "elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo" + " " + 
        "varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer" + " " + 
        "eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus" + " " + 
        "tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et" + " " + 
        "risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod" + " " + 
        "eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor" + " " + 
        "tincidunt aera";

   

popularWord(s);