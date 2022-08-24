import '../../styles/pages/checklist.css';
let i = 0;
let  checklistArray = [];

class checklistForm{
    constructor(title, level, checked, pinned){
        this.title = title;
        this.level = level;
        this.checked = checked;
        this.pinned = pinned;
    }
}
let add = 0;

export default function checklist(){
    const checklist = document.createElement('div');
    checklist.classList.add('checklist-div');

    const checklistListHolder = document.createElement('div');
    checklistListHolder.classList.add('checklist-list-holder')

    const addNewChecklist = document.createElement('div');
    addNewChecklist.classList.add('add-checklist-div');

    const checklistList = document.createElement('div');
    checklistList.classList.add('checklist-list');

    checklistListHolder.appendChild(addNewChecklist);
    checklistListHolder.appendChild(checklistList);

    const addChecklistBtn = document.createElement('button');
    addChecklistBtn.classList.add('add-checklist-btn')
    addChecklistBtn.setAttribute('type', 'button');
    addChecklistBtn.textContent = '+';

    addChecklistBtn.onclick = function(){
        newChecklist();
        add = !add;
    }
    checklist.appendChild(addChecklistBtn);
    checklist.appendChild(checklistListHolder);
    
    let v = 0;
    i = 0;
    checklistArray = JSON.parse(localStorage.getItem("checklist-data") || "[]");

    checklistArray.forEach(element => {
        checklistList.appendChild(addChecklist(element.title, v));
        v++;
    });

    return checklist;
}

function newChecklist(){
    let level = 0;
    const addNewChecklist = document.querySelector('.add-checklist-div');

    const newChecklist = document.createElement('div');
    newChecklist.classList.add('new-checklist');

    const newChecklistTitle = document.createElement('input');
    newChecklistTitle.setAttribute('type', 'text');
    newChecklistTitle.setAttribute('maxlength', '64');
    newChecklistTitle.classList.add('new-checklist-title');
    newChecklistTitle.onkeydown = function(e){
        if (e.key === 'Enter' && add) {
            submitChecklist(newChecklistTitle.value, level);
            addNewChecklist.classList.remove('add-checklist-open');
            add = !add;
        }
    }

    const newChecklistLevel = document.createElement('button');
    newChecklistLevel.setAttribute('type', 'button');
    newChecklistLevel.classList.add('new-checklist-level');

    newChecklistLevel.onclick = function(){
        level++;
        level = level%3;

        switch(level){
            case 0:
                newChecklistLevel.style.backgroundColor = 'lightgrey';
                break;
            case 1:
                newChecklistLevel.style.backgroundColor = 'orange';
                break;
            case 2:
                newChecklistLevel.style.backgroundColor = 'purple';
                break;
        }
    }

    const newChecklistBtn = document.createElement('button');
    newChecklistBtn.setAttribute('type', 'button');
    newChecklistBtn.classList.add('new-checklist-add');
    newChecklistBtn.textContent = '+';
    newChecklistBtn.onclick = function(){
        submitChecklist(newChecklistTitle.value, level);
        addNewChecklist.classList.remove('add-checklist-open');
        add = !add;
    }

    newChecklist.appendChild(newChecklistTitle);
    newChecklist.appendChild(newChecklistLevel);
    newChecklist.appendChild(newChecklistBtn);

    if (addNewChecklist.hasChildNodes()){
        addNewChecklist.removeChild(addNewChecklist.lastChild);
    }

    addNewChecklist.appendChild(newChecklist);

    if (!add){
        addNewChecklist.classList.add('add-checklist-open');
    }else{
        addNewChecklist.classList.remove('add-checklist-open');
    }
    
}

function submitChecklist(title, id){
    let currIndex = checklistArray.length;
    checklistArray.push(new checklistForm(title, id, false, false));
    localStorage.setItem("checklist-data",JSON.stringify(checklistArray));

    const currContent = document.querySelector('.checklist-list');
    currContent.appendChild(addChecklist(title, currIndex));
}

function addChecklist(title, currIndex){
    const checklistTab = document.createElement('div');
    checklistTab.classList.add('checklist-tab');

    if (checklistArray[currIndex].pinned){
        checklistTab.classList.add('pinned');
        checklistTab.style.top = (i)+'%';
        i+=8;
    }
    let level = checklistArray[currIndex].level;
    switch (level){
        case 0:
            checklistTab.classList.add('light');
            break;
        case 1:
            checklistTab.classList.add('medium');
            break;
        case 2:
            checklistTab.classList.add('heavy');
            break;
    }
    
    const checklistTabCheck = document.createElement('button');
    checklistTabCheck.setAttribute('id','button');

    checklistTabCheck.classList.add('tab-check');
    checklistTabCheck.onclick = function(){
        checkChecklist(currIndex);
    }

    const checklistTabTitle = document.createElement('div');
    checklistTabTitle.classList.add('tab-title');
    checklistTabTitle.textContent = title;

    if (checklistArray[currIndex].checked){
        checklistTabTitle.classList.add('checked');
        checklistTab.classList.add('tab-checked');
    }
 
    const checklistTabDelete = document.createElement('button');
    checklistTabDelete.setAttribute('id','button');
    checklistTabDelete.classList.add('tab-delete');
    checklistTabDelete.onclick = function(){
        deleteChecklist(currIndex);
    }

    const checklistTabPin = document.createElement('button');
    checklistTabPin.setAttribute('type', 'button');
    checklistTabPin.classList.add('tab-pin');
    checklistTabPin.onclick = function(){
        pinChecklist(currIndex);
    }
    checklistTab.appendChild(checklistTabCheck);
    checklistTab.appendChild(checklistTabTitle);
    checklistTab.appendChild(checklistTabDelete);
    checklistTab.appendChild(checklistTabPin);
    
    
    
    return checklistTab;
}
function deleteChecklist(index){
    const addedChecklist = document.querySelector('.checklist-list');
    if(index!= null){
        checklistArray.splice(index, 1);
        localStorage.setItem("checklist-data",JSON.stringify(checklistArray));
        while(addedChecklist.hasChildNodes()){
            addedChecklist.removeChild(addedChecklist.lastChild);
        }

        let v = 0;
        i = 0;
        checklistArray.forEach(element => {
            addedChecklist.appendChild(addChecklist(element.title, v));
            v++;
        });
    }

}

let counter = 0;
//pinned code
function pinChecklist(index){
    const currentTabs = document.querySelectorAll('.checklist-tab');
    if(!checklistArray[index].pinned && !checklistArray[index].checked){
        if(counter!=5){
            checklistArray[index].pinned = true;  
            currentTabs[index].classList.add('pinned');
            counter++;
        }
    }else{
        checklistArray[index].pinned = false;
        currentTabs[index].classList.remove('pinned');
        !counter?counter:counter--;
    }
    localStorage.setItem("checklist-data",JSON.stringify(checklistArray));
    const currentPinned = document.querySelectorAll('.pinned');
    currentPinned[0] != null? currentPinned[0].style.top = '0%': 0;
    currentPinned[1] != null? currentPinned[1].style.top = '8%': 0;
    currentPinned[2] != null? currentPinned[2].style.top = '16%': 0;        
    currentPinned[3] != null? currentPinned[3].style.top = '24%': 0;
    currentPinned[4] != null? currentPinned[4].style.top = '32%': 0;
    
    
}

//check code
function checkChecklist(index){
    const currentTabTitle = document.querySelectorAll('.tab-title');
    const currentTab = document.querySelectorAll('.checklist-tab');

    if(!checklistArray[index].checked){
        checklistArray[index].checked = true; 
        if (checklistArray[index].pinned){
            pinChecklist(index);
        }
        currentTabTitle[index].classList.add('checked'); 
        currentTab[index].classList.add('tab-checked'); 

    }else{
        checklistArray[index].checked = false;
        currentTabTitle[index].classList.remove('checked');
        currentTab[index].classList.remove('tab-checked'); 
    }
    localStorage.setItem("checklist-data",JSON.stringify(checklistArray));
}
