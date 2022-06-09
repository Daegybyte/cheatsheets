function handle_load_CB(){
  let div_content = this.responseText
  div.appendChild(div_content)
}

function loaded_CB(){
  let request = new XMLHttpRequest()
  request.open("GET", "newdata.html")
  request.addEventListener("load", handle_load_CB)
  request.send()
}


let body = document.body
let div = document.createElement('div')
body.appendChild(div)

this.window.onload = loaded_CB






// let body = document.body
// let div = document.createElement('div')
// body.appendChild(div)
//
// let request = new XMLHttpRequest()
// request.open("GET", "newdata.html")
// request.addEventListener("load", handle_load_CB)
// request.send()
//
// function handle_load_CB(){
//   let div_content = this.responseText
//   div.appendChild(div_content)
// }
