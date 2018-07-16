// require('./mystyles.scss');

function isValidWalk(walk) {
    //insert brilliant code here
    walk =[]
    for(i =0; i < walk[i]; i++){
      if (walk[i] <= 1){
        return false
      } else if (walk[i] === walk[i+1]) {
        return false
      } else if (walk[i] > 10) {
        return false 
      } else {
        return true 
      }
    }
  }

 isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
