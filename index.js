function scuberGreetingForFeet(distance){
  if (distance<=400) {
    return 'This one is on me!';
  }
    else if (distance>2000 && distance<2501) {
      return 'I will gladly take your thirty bucks.';
    } 
    else if (distance>2500){
      return 'No can do.';
    }
}
console.log(scuberGreetingForFeet(1));

function ternaryCheckCity(city){
  if (city == 'NYC') {
    return 'Ok, sounds good.';
  } 
 else if(city!='NYC'){
  return 'No go.';
 }
}
console.log(ternaryCheckCity('NYC'));

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }

}

//console.log(switchOnCharmFromTip('thanks for everything'));