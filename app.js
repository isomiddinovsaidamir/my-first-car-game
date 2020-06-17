/*
document.querySelector('.btn').addEventListener('click', function() {

});
*/
/*
mark = Math.floor(Math.random() * 10);
console.log(mark);

var marks = ['Mercedes Benz', 'BMW', 'Opel', 'Chevrolet', 'Alfa Romeo', 'Fiat', 'Toyota', 'Dodge', 'Mustang'];

console.log(marks[mark]);
*/



var mark0 = Math.floor(Math.random() * 10);
var mark1 = Math.floor(Math.random() * 10);
var mark2 = Math.floor(Math.random() * 10);
var mark3 = Math.floor(Math.random() * 10);

var moshnanomlari = ['Mercedes Benz', 'BMW', 'Renault', 'Chevrolet', 'Alfa Romeo', 'Fiat', 'Toyota', 'Dodge', 'Ford', 'Mustang']

document.querySelector('.btn0').textContent = moshnanomlari[mark0];
document.querySelector('.btn1').textContent = moshnanomlari[mark1];
document.querySelector('.btn2').textContent = moshnanomlari[mark2];
document.querySelector('.btn3').textContent = moshnanomlari[mark3];

var togrijavob = Math.floor(Math.random() * 4);

var marklar = [mark0, mark1, mark2, mark3];

var mark5 = marklar[togrijavob];

document.querySelector('.logo').src = mark5 + '.png';





document.querySelector('.btn0').addEventListener('click', function() {

    
    if (mark5 === mark0) {
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.logo').style.display = 'none';    
    document.querySelector('.btn0').style.display = 'none';    
    document.querySelector('.btn1').style.display = 'none';    
    document.querySelector('.btn2').style.display = 'none';    
    document.querySelector('.btn3').style.display = 'none';    
} else {
        
         document.querySelector('.loose').style.display = 'block';
         document.querySelector('.logo').style.display = 'none';    
         document.querySelector('.btn0').style.display = 'none';    
         document.querySelector('.btn1').style.display = 'none';    
         document.querySelector('.btn2').style.display = 'none';    
         document.querySelector('.btn3').style.display = 'none';

};
});

document.querySelector('.btn1').addEventListener('click', function() {

    
    if (mark5 === mark1) {
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.logo').style.display = 'none';    
    document.querySelector('.btn0').style.display = 'none';    
    document.querySelector('.btn1').style.display = 'none';    
    document.querySelector('.btn2').style.display = 'none';    
    document.querySelector('.btn3').style.display = 'none';    
} else {
        
         document.querySelector('.loose').style.display = 'block';
         document.querySelector('.logo').style.display = 'none';    
         document.querySelector('.btn0').style.display = 'none';    
         document.querySelector('.btn1').style.display = 'none';    
         document.querySelector('.btn2').style.display = 'none';    
         document.querySelector('.btn3').style.display = 'none';

};
});


document.querySelector('.btn2').addEventListener('click', function() {

    
    if (mark5 === mark2) {
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.logo').style.display = 'none';    
    document.querySelector('.btn0').style.display = 'none';    
    document.querySelector('.btn1').style.display = 'none';    
    document.querySelector('.btn2').style.display = 'none';    
    document.querySelector('.btn3').style.display = 'none';    
} else {
        
         document.querySelector('.loose').style.display = 'block';
         document.querySelector('.logo').style.display = 'none';    
         document.querySelector('.btn0').style.display = 'none';    
         document.querySelector('.btn1').style.display = 'none';    
         document.querySelector('.btn2').style.display = 'none';    
         document.querySelector('.btn3').style.display = 'none';

};
});



document.querySelector('.btn3').addEventListener('click', function() {

    
    if (mark5 === mark3) {
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.logo').style.display = 'none';    
    document.querySelector('.btn0').style.display = 'none';    
    document.querySelector('.btn1').style.display = 'none';    
    document.querySelector('.btn2').style.display = 'none';    
    document.querySelector('.btn3').style.display = 'none';    
} else {
        
         document.querySelector('.loose').style.display = 'block';
         document.querySelector('.logo').style.display = 'none';    
         document.querySelector('.btn0').style.display = 'none';    
         document.querySelector('.btn1').style.display = 'none';    
         document.querySelector('.btn2').style.display = 'none';    
         document.querySelector('.btn3').style.display = 'none';

};
});



 console.log(mark5);
 console.log(mark0);
 console.log(mark1);
 console.log(mark2);
 console.log(mark3);