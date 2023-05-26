const value = document.getElementById("input")
const button = document.getElementById("btn")
const content = document.getElementById("content") 
const each = document.createElement("div")
content.appendChild(each)

window.onload =function (){
   window.alert("Confirm your added tasks before leaving or refreashing the page (DELETE OR EDIT ) to correct any mistakes. Thankyou")
    var tasks = JSON.parse(localStorage.getItem("names"))
    if(tasks){
        var list = document.getElementById("todolist")
        for(var i=0;i<tasks.length;i++){
            var task = tasks[i]
            var tenda = document.createElement("input")
            var listitem = document.createElement("li")
            var remover = document.createElement("button")
            remover.style.backgroundColor="crimson"
            remover.classList.add("floater")
            remover.innerHTML="DEL"
            remover.onclick = function (){
                window.alert("Sorry.. we are updating some features try again late.Thankyou ")}
            tenda.value= task
            listitem.appendChild(remover)
            listitem.appendChild(tenda)
            list.appendChild(listitem)
        } 
    }  
}


button.addEventListener("click",()=>{
    const p = document.createElement("li")
    const holder = document.createElement("input");
    holder.setAttribute("readonly", "readonly")
    const deleter = document.createElement("button")
      deleter.innerHTML="DEL"




const edit = document.createElement("button")
edit.style.backgroundColor="blue"
edit.innerHTML="EDIT"
    if(value.value === ""){
        window.alert("You have not typed anything.")
    }else{
    const data = localStorage.getItem("names")
        var names;
        if(data === null){
            names = []
        }else{
            names = JSON.parse(data)
        }
        names.push(value.value)
        for(let i=0;i<names.length;i++){
            holder.value = names[i]
        }
        localStorage.setItem ("names", JSON.stringify(names))
    
    
        p.appendChild(holder)
        each.appendChild(p)
        p.appendChild(deleter)
        p.appendChild(edit)
    value.value=""   
     
    }
    
    deleter.addEventListener("click",()=>{
        window.confirm("Confirm to delete task.")
        each.removeChild(p)
    })

    edit.addEventListener("click",()=>{
        switch (edit.innerHTML) {
            case "EDIT":
                holder.removeAttribute("readonly")
                holder.focus()
                edit.innerHTML = "SAVE"
                
                break;
        
            case "SAVE":
                holder.setAttribute("readonly", "readonly")
                edit.innerHTML="EDIT"
                break;
        }
    })
    })
    
    
    
