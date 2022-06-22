const saturdayFun = function(fun = 'roller-skate' , duty = 'bathe my dog') {
    if (fun) {
        return (`This Saturday, I want to ${fun}!`);
    }
    else if (duty)
        return (`This Saturday, I want to ${duty}!`);
}
const mondayWork = function(work = 'go to the office' , home = 'work from home') {
    if (work) {
        return (`This Monday, I will ${work}.`);
    }
    else if (home)
        return (`This Monday, I will ${home}.`);
}
let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
