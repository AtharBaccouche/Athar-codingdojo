//1
console.log(hello);                                   
var hello = 'world';                                 

// //var hello;
// //console.log(hello);    //logs undefined
// //hello = 'world';


//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle ;
//needle = 'haystack';
// function test(){
//     var needle
//     needle = 'magnet';
//     console.log(needle);
// }
// test();//'magnet'

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan ;
// brendan= 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);// 'super cool'

4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food ;
// food= 'chicken';
//console log(food)//'chicken'
// function eat(){
//     var food ;
//     food = 'half-chicken';
//     console.log(food);
//     food= 'gone';
// }
// eat();//'half chicken'

5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//  console.log(food)
// var mean = function() {
//     var food 
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// mean();//'fish'
// console.log(food);


6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre 
// console.log(genre);//undefined
// genre = "disco";
// function rewind() {
//     var genre
//     genre = "rock";
//     console.log(genre);//rock
//     genre = "r&b";
//     console.log(genre);// "r&b"
// }
// rewind();
// console.log(genre);//disco


//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = "san jose";
// function learn() {
//     var dojo =
//     dojo = "seattle";
//     console.log(dojo);// seattle
//     dojo = "burbank";
//     console.log(dojo);burbank
// }
// console.log(dojo);//san jose
// learn();
// console.log(dojo);// san jose

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));//{name: Chicago, students:65, hiring:true }
// console.log(makeDojo("Berkeley", 0));//eror