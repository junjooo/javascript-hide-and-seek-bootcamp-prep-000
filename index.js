function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankList = document.querySelectorAll(".ranked-list li")
  for (let i =0,l=rankList.length; i < l; i++) {
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML,10)+n
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
