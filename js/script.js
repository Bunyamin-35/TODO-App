const newplanSubmitDOM = document.querySelector("#newplanSubmit")
const newplanInputDOM = document.querySelector("#newplanInput")
const listheaderDOM = document.querySelector("#list_header")

newplanSubmitDOM.addEventListener("click",submitplan)

function submitplan(event) {
    event.preventDefault()
    if (!newplanInputDOM.value) {
        alert("bir plan ekleyiniz!")
    } else if (newplanInputDOM.value) {
        addplan(newplanInputDOM.value)
        newplanInputDOM.value =""
    }
       
}

//const planlistDOM = document.querySelector("#newplanlist")
const planlistDOM = document.querySelector(".contentbox")

// function addplan(item) {
//     let newplan = document.createElement("div")
//     newplan.innerHTML = `<div class="newplan">
//     <div class="newplancontent">${newplanInputDOM.value}</div>
//     <div class="btns">
//         <button class="editbtn">Edit</button>
//         <button class="deletebtn">Delete</button>
//     </div>
// </div>`
//     newplan.classList.add("plans")
//     planlistDOM.appendChild(newplan)
// }

function addplan(item) {
    const newplan = document.createElement("article")
    newplan.classList.add("newplanlist")

    const newplancontent =document.createElement("div")
    newplancontent.classList.add("newplancontent")

    const newplancontentInput = document.createElement("input")
    newplancontentInput.classList.add("planInput")
    newplancontentInput.type = "text"
    newplancontentInput.value = newplanInputDOM.value
    newplancontentInput.setAttribute("readonly","readonly")
    // newplancontent.innerText = newplanInputDOM.value
    //newplancontentInput.classList.add("checked")
    

    const planbtns = document.createElement("div")
    planbtns.classList.add("btns")

    const editbtn = document.createElement("button")
    editbtn.classList.add("editbtn")
    editbtn.innerHTML ="Edit"
    
    const deletebtn = document.createElement("button")
    deletebtn.classList.add("deletebtn")
    deletebtn.innerHTML ="Delete"
    

    planbtns.appendChild(editbtn)
    planbtns.appendChild(deletebtn)
    
    newplan.appendChild(newplancontent)
    newplan.appendChild(planbtns)
    newplancontent.appendChild(newplancontentInput)
    

    planlistDOM.appendChild(newplan)
    /****  ****/

    
    /****  ****/

    editbtn.addEventListener("click",editplan)

    function editplan() {
        if(editbtn.innerText.toLocaleLowerCase() =="edit"){
            newplancontentInput.removeAttribute("readonly")
            newplancontentInput.focus()
            editbtn.innerText = "Save"
        } else {
            newplancontentInput.setAttribute("readonly","readonly")
            editbtn.innerText = "Edit"
            console.log("Edit executed")
        }
        
    }
    

    deletebtn.addEventListener("click",deleteplan)

    function deleteplan() {
        planlistDOM.removeChild(newplan)
    }

    newplancontentInput.addEventListener("click",function(item){
        item.target.classList.toggle("checked")
        DeleteAll()
    })

    function DeleteAll(){
        let checkeditemlist = document.querySelectorAll(".checked")
        // console.log(checkeditemlist.length)
        if(checkeditemlist.length>=2){
            document.querySelector(".deleteallbtn").classList.remove("d-none")            
        } else {
            document.querySelector(".deleteallbtn").classList.add("d-none")           
        }
    }
    document.querySelector(".deleteallbtn").onclick = function() {
        var itemschecked = document.querySelectorAll(".checked")
        itemschecked.forEach(function(item){
            item.parentElement.parentElement.remove()
        })
    }

 
    
}





