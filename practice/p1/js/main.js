function handle_p_click(){
  let div_one = document.getElementById("d1") //
  let div_two = document.getElementById("d2")

  if (this.parentElement.id === "d1"){
    div_one.removeChild(this)
    div_two.appendChild(this)
  }
  else if(this.parentElement.id === "d2"){
    div_two.removeChild(this)
    div_one.appendChild(this)
  }
}

let paragraphs= document.getElementsByTagName('p')
for( let p of paragraphs){
  p.addEventListener("click", handle_p_click)
}



// function handle_p_click(){
//   if(this.parentElement.id === "d1"){
//     let div = document.getElementById("d1")
//     div.removeChild(this)
//
//     let newDiv = document.getElementById("d2")
//     newDiv.appendChild(this)
//   } else if(this.parentElement.id === "d1"){
//     let div = document.getElementById("d2")
//     div.removeChild(this)
//
//     let newDiv = document.getElementById("d1")
//     newDiv.appendChild(this)
//   }
// }
//
// let p = document.getElementById("d1")
// p.addEventListener("click", handle_p_click)
