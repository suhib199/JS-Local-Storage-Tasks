let fieldArray = ["Technology", "Subject", "User"];
fieldArray.forEach((element) => {
    let inputFeilds = document.querySelector(`#${element}`);
    function borderHidden() {
        inputFeilds.style.borderLeft = "none";
        inputFeilds.style.borderRight = "none";
        inputFeilds.style.borderTop = "none";
        inputFeilds.style.borderBottom = "1px solid lightskyblue";
        inputFeilds.style.outline = "none";
    }
    function borderblur() {
        inputFeilds.style.border = "";
    }
    inputFeilds.addEventListener("focus", borderHidden);
    inputFeilds.addEventListener("blur", borderblur);
});

let previewCards = document.querySelector("#cardsPreview");
let mainContainer = document.querySelector(".main-container");
let cards_containr = document.querySelector(".row-containr");
function Cards() {
    mainContainer.style.display = "none";
    cards_containr.style.display = "block";
    document.body.style.margin = "20px 0 0 0";
    document.body.style.background = "gray";
    let sectionBackWord = document.createElement("div");
    sectionBackWord.innerHTML = `<a href=""><h1>Back<h1></a>`;
    sectionBackWord.align = 'center';
    document.body.appendChild(sectionBackWord);
}
previewCards.addEventListener("click", Cards);
document.addEventListener('DOMContentLoaded', function () { renderData() });


// ----------------------------------------To render data-------------------------------------------------------------





let submitButton = document.querySelector("#submit");

function submittion() {
    var Technology = document.querySelector('#Technology').value;
    var User = document.querySelector('#User').value;
    var Subject = document.querySelector('#Subject').value;
    var Description = document.querySelector('#Description').value;
  
    var data = {
        "Technology": Technology,
        "User": User,
        "Subject": Subject,
        "Description": Description,
    }

    var existingData = JSON.parse(localStorage.getItem('inputData')) || [];
    existingData.push(data);

    localStorage.setItem('inputData', JSON.stringify(existingData));


}

function renderData() {
    var storedData = JSON.parse(localStorage.getItem('inputData'));

    if (storedData) {
        let column = document.querySelector('.colums');

        storedData.forEach(elemen=>{
            let newBox = document.createElement('div');
            newBox.className = 'box';
            newBox.innerHTML = `
                <p id="Technology">Technology:<span> ${elemen.Technology}</span></p>
                <p id="User">User:<span> ${elemen.User}</span></p>
                <p id="Description">Description:<span> ${elemen.Description}</span> </p>
                <p id="Subject">Subject:<span>  ${elemen.Subject}</span></p>
                
             
              `;
            column.appendChild(newBox);
        });
    }
}

submitButton.addEventListener('click', submittion);

