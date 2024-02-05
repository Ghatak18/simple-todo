const inputBox = document.getElementById("input-box");
const list_container = document.getElementById("list-container");




function addTask(){
    if(inputBox.value === ''){
        alert("please Writw something");
    }
    else{
        let lii = document.createElement("li");
        lii.innerHTML = inputBox.value;
        list_container.appendChild(lii);
        let span = document.createElement("span");
        span.innerHTML = "&#10060;";
        lii.appendChild(span);
    }
   inputBox.value = "";
   saveData();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

document.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
  });

  function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
     
  }
  function showData(){
    list_container.innerHTML = localStorage.getItem("data");
  }

  showData();