// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

function minsSinceMidnight() {
  let current = new Date();
  let midNight = new Date();
  //set to nearest midnight in the past
  midNight.setHours(0,0,0,0); 
  
  return Math.floor((current-midNight)/(1000/60))
}

console.log(minsSinceMidnight());
