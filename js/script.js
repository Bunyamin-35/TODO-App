const newplanSubmitDOM = document.querySelector("#newplanSubmit")
const newplanInputDOM = document.querySelector("#newplanInput")

newplanSubmitDOM.addEventListener("click",submitplan)

function submitplan(event) {
    event.preventDefault()
    if (!newplanInputDOM.value) {
        alert("bir plan ekleyiniz!")
    } else if (newplanInputDOM.value) {
        addplan(newplanInputDOM.value)
        newplanInputDOM.value ="    "
    }   
}

const planlistDOM = document.querySelector(".newplanlist")

function addplan(item) {
    let newplan = document.createElement("div")
    newplan.innerHTML = `<div id="plans">
    <div id="newplan">${newplanInputDOM.value}</div>
    <div class="btns">
        <button class="editbtn">Edit</button>
        <button class="deletebtn">Delete</button>
    </div>
</div>`
    newplan.classList.add("plans")
    planlistDOM.appendChild(newplan)
}