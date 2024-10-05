// code your solution here

// function razzle(lawyer = 'Billy', target = "'em"){
// console.log(`${lawyer} razle-dazzles ${target}!`);
// }
// razzle();
// razzle("Methusella", "T'challah");

// function saturdayFun(){
//     console.log(`This Saturday, I want to ${activity}!`);
// }
// console.log(saturdayFun());
// saturdayFun("bathe my dog");
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const f = function(){
    console.log("Yet more razzling");
}
f();

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());

//function for wrapadjective
function wrapAdjective(flair = '*'){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    }
}
const WrapWithStars = wrapAdjective();
console.log(WrapWithStars("a hard worker"));

const WrapWithPipes = wrapAdjective("||");
console.log(WrapWithPipes("a dedicated programmer"));

