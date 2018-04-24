let pharse = [],
elem = document.getElementById('myphrase'),
messages = document.createElement("ul"),
message = document.createElement("li"),
br = document.createElement("br")


function get(){
  $.ajax({
    url:'http://localhost:3000/phrases',
    type:'get'

  })
  .done(function(data){
    let LenPharse = pharse.length;
    if ($.inArray(data.name,pharse ) > -1){
        console.log("here");
    }else{
      if (LenPharse <= 10){

      pharse.push(data.name)
      let messages = document.getElementsByTagName("ul")[0]
        // message = document.createElement("li"),
        // for(let i =0; i<= pharse.length;i++){

          if (!pharse.includes(data.name)){

          console.log(data.name);
        }else{
          let content = document.createTextNode(data.name);
        message.appendChild(content);
        messages.appendChild(message);
        localStorage.setItem("array",pharse)


    }

  // }

    }
  }
})
}

document.getElementById("myphrase").innerHTML =  localStorage.getItem("array");
document.body.appendChild(messages);
console.log(pharse);
function removePharse(){
  message.remove()
  localStorage.clear();
  elem.remove()
}
