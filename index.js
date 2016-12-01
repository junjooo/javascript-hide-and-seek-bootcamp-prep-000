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
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
