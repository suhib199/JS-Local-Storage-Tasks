let fieldArray = ["name", "age", "education"];
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
    var name = document.querySelector('#name').value;
    var age = document.querySelector('#age').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var studyDetails = document.querySelector('#education').value;
    var description = document.querySelector('#description').value;
    var languagesArr = [];
    var languagesChecked = document.querySelectorAll('input[type="checkbox"]:checked');
    languagesChecked.forEach(element => { languagesArr.push(element.value) });

    var data = {
        "name": name,
        "age": age,
        "description": description,
        "education": studyDetails,
        "gender": gender,
        "preferLanguages": languagesArr
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
                <p id="myName">My Name:<span> ${elemen.name}</span></p>
                <p id="myAge">Age:<span> ${elemen.age}</span></p>
                <p id="myGender">Gender:<span> ${elemen.gender}</span> </p>
                <p id="university">Major and university:<span>  ${elemen.education}</span></p>
                <p id="ProgrammingLanguage">Preferred Languages: <span>${elemen.preferLanguages.join(', ')}</span> </p>
              `;
            column.appendChild(newBox);
        });
    }
}

submitButton.addEventListener('click', submittion);

