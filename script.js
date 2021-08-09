//declare variable for list and fetch data using querySelectorAll
const nameList = document.querySelectorAll('.name-list li');
const text = document.querySelector(".text");
const textChange = document.querySelector(".changeMe");
const myListInput = document.querySelector(".addText");
const addBtn = document.querySelector(".addListBtn");

// access class in CSS. not impt
// text.classList.add("blue")

// how to change css using eventlistener
textChange.addEventListener("click", function () {
    text.classList.replace("text", "yellow");
});


// list of dom toke listener - https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList


const userList = document.querySelector(".name-list");

// console.log(userList);

// to click on each li
// for (user of userList) (
//     user.addEventListener("click", function () {
//         this.style.color = "green"
//     })
// )


addBtn.addEventListener("click", function () {
    // create an li
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(myListInput.value);

    // add input value 
    newLi.appendChild(liContent)
    // attach li to userlist
    userList.appendChild(newLi);
});


//how to manipulate each list 
for (test of nameList) {
    test.addEventListener('click', function () {
        //add action here
        this.style.color = "red";
    })
}

