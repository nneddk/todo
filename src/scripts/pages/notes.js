import '../../styles/pages/notes.css';
let i = 0;
let  noteArray = [];
class noteForm{
    constructor(title, description, pinned){
        this.title = title;
        this.description = description;
        this.pinned = pinned;
    }
}

export default function notes(){

    const notes = document.createElement('div');
    notes.classList.add('notes-div');


    const notesList = document.createElement('div');
    notesList.classList.add('notes-list');

    const addNote = document.createElement('button');
    addNote.classList.add('add-note-btn')
    addNote.setAttribute('type', 'button');
    addNote.textContent = '+';

    addNote.onclick = function(){
        newNote();
    }
    notes.appendChild(addNote);
    notes.appendChild(notesList);

    i = 0;
    let v = 0;
    noteArray = JSON.parse(localStorage.getItem("note-data") || "[]");
    noteArray.forEach(element => {
        notesList.appendChild(addNoteTab(element.title, v));
        v++;
    });
    return notes;
    

}
function newNote(index, title, desc){
    
    const noteWrapper = document.getElementById('wrapper');
    noteWrapper.style.zIndex = '1';

    const noteEntry = document.createElement('div');
    noteEntry.classList.add('note-entry-div');
    
    const noteEntryTitle = document.createElement('input');
    noteEntryTitle.setAttribute('type', 'text');
    noteEntryTitle.setAttribute('maxlength', '64');
    noteEntryTitle.classList.add('note-entry-title');
    !title?noteEntryTitle.value = '':noteEntryTitle.value = title;
    

    const noteEntryTitleSpan = document.createElement('span');
    noteEntryTitleSpan.classList.add('note-entry-title-span');

    const noteEntryCloseBtn = document.createElement('button');
    noteEntryCloseBtn.setAttribute('type', 'button');
    noteEntryCloseBtn.classList.add('note-entry-close-btn');
    noteEntryCloseBtn.textContent = 'x';
    noteEntryCloseBtn.onclick = function(){
        noteWrapper.style.zIndex = '-1';
    }
    

    noteEntryTitleSpan.appendChild(noteEntryTitle);
    noteEntry.appendChild(noteEntryTitleSpan);
    noteEntry.appendChild(noteEntryCloseBtn);

    const noteEntryDescription = document.createElement('textarea');
    noteEntryDescription.setAttribute('rows', '10');
    noteEntryDescription.setAttribute('cols', '32');
    
    noteEntryDescription.classList.add('note-entry-description');
    !desc?noteEntryDescription.value = '':noteEntryDescription.value = desc;

    const noteEntryDescriptionSpan = document.createElement('span');
    noteEntryDescriptionSpan.classList.add('note-entry-description-span');

    noteEntryDescriptionSpan.appendChild(noteEntryDescription);
    noteEntry.appendChild(noteEntryDescriptionSpan);
    //empty space for formatting, ignore
    noteEntry.appendChild(document.createElement('div'));
    if (index == null){
        const noteEntryAddBtn = document.createElement('button');
        noteEntryAddBtn.setAttribute('type', 'button');
        noteEntryAddBtn.classList.add('note-entry-add-btn');
        noteEntryAddBtn.textContent = 'add note';

        noteEntryAddBtn.onclick = function(){
            let currIndex =  noteArray.length;
            const currnotes = document.querySelector('.notes-list');
            const noteTitle = document.querySelector('.note-entry-title').value;
            const noteDesc = document.querySelector('.note-entry-description').value;
            noteArray.push(new noteForm(noteTitle, noteDesc));
            localStorage.setItem("note-data",JSON.stringify(noteArray));
            currnotes.appendChild(addNoteTab(noteTitle, currIndex));     

            noteWrapper.style.zIndex = '-1';
        }
        noteEntry.appendChild(noteEntryAddBtn);
        

    }else{
        const noteEntryEditBtn = document.createElement('button');
        noteEntryEditBtn.setAttribute('type', 'button');
        noteEntryEditBtn.classList.add('note-entry-add-btn');
        noteEntryEditBtn.textContent = 'edit note';

        noteEntryEditBtn.onclick = function(){
            const currTab = document.querySelectorAll('.tab-title');

            currTab[index].textContent = document.querySelector('.note-entry-title').value;
            noteArray[index].title = document.querySelector('.note-entry-title').value;
            noteArray[index].description = document.querySelector('.note-entry-description').value;
            localStorage.setItem("note-data",JSON.stringify(noteArray));
            noteWrapper.style.zIndex = '-1';
        }
        noteEntry.appendChild(noteEntryEditBtn);
    }
    

    while(noteWrapper.hasChildNodes()){
        noteWrapper.removeChild(noteWrapper.lastChild);
    }


    noteWrapper.appendChild(noteEntry);
}

function addNoteTab(name, index){
    const noteTab = document.createElement('div');
    noteTab.classList.add('note-tab');
    
    if (noteArray[index].pinned){
        noteTab.classList.add('pinned');
        noteTab.style.top = (i)+'%';
        i+=8;
    }
    const noteTabTitle = document.createElement('div');
    noteTabTitle.classList.add('tab-title');
    noteTabTitle.textContent = name;
    noteTabTitle.onclick = function(){
        viewNote(index);
    }
    const noteTabDelete = document.createElement('button');
    noteTabDelete.setAttribute('id','button');
    noteTabDelete.classList.add('tab-delete');
    noteTabDelete.onclick = function(){
        deleteNote(index);
    }

    const noteTabPin = document.createElement('button');
    noteTabPin.setAttribute('type', 'button');
    noteTabPin.classList.add('tab-pin');
    noteTabPin.onclick = function(){
        pinNote(index);
    }

    noteTab.appendChild(noteTabTitle);
    noteTab.appendChild(noteTabDelete);
    noteTab.appendChild(noteTabPin);
    
    
    
    return noteTab;
}



function viewNote(index){
    let title = noteArray[index].title;
    let desc = noteArray[index].description;

    const noteWrapper = document.getElementById('wrapper');
    noteWrapper.style.zIndex = '1';

    const noteEntry = document.createElement('div');
    noteEntry.classList.add('view-note-div');

    const viewNoteTitle = document.createElement('div');
    viewNoteTitle.classList.add('view-note-title');
    viewNoteTitle.textContent = title;

    const noteEntryCloseBtn = document.createElement('button');
    noteEntryCloseBtn.setAttribute('type', 'button');
    noteEntryCloseBtn.classList.add('note-entry-close-btn');
    noteEntryCloseBtn.textContent = 'x';
    noteEntryCloseBtn.onclick = function(){
        noteWrapper.style.zIndex = '-1';
    }

    const viewNoteDesc = document.createElement('div');
    viewNoteDesc.classList.add('view-note-desc');
    viewNoteDesc.textContent = desc;

    const viewNoteButtonHolder = document.createElement('div');
    viewNoteButtonHolder.classList.add('view-note-button-holder');
    
    const deleteNoteButton = document.createElement('button');
    deleteNoteButton.setAttribute('type', 'button');
    deleteNoteButton.classList.add('delete-button');
    deleteNoteButton.classList.add('view-note-btn');

    deleteNoteButton.onclick = function(){
        deleteNote(index);
        noteWrapper.style.zIndex = '-1';
    }

    const editNoteButton = document.createElement('button');
    editNoteButton.setAttribute('type', 'button');
    editNoteButton.classList.add('edit-button');
    editNoteButton.classList.add('view-note-btn');
    editNoteButton.onclick = function(){
        editNote(index, title, desc);


    }

    const pinNoteButton = document.createElement('button');
    pinNoteButton.setAttribute('type', 'button');
    pinNoteButton.classList.add('pin-button');
    pinNoteButton.classList.add('view-note-btn');
    pinNoteButton.onclick = function(){
        pinNote(index);
        noteWrapper.style.zIndex = '-1';
        
    }
    viewNoteButtonHolder.appendChild(deleteNoteButton);
    viewNoteButtonHolder.appendChild(editNoteButton);
    viewNoteButtonHolder.appendChild(pinNoteButton);



    noteEntry.appendChild(viewNoteTitle);
    noteEntry.appendChild(noteEntryCloseBtn);
    noteEntry.appendChild(viewNoteDesc);
    noteEntry.appendChild(document.createElement('div'));
    noteEntry.appendChild(viewNoteButtonHolder);


    while(noteWrapper.hasChildNodes()){
        noteWrapper.removeChild(noteWrapper.lastChild);
    }

    noteWrapper.appendChild(noteEntry);

}

function deleteNote(index){
    const addedNotes = document.querySelector('.notes-list');
    if(index!= null){
        noteArray.splice(index, 1);
        localStorage.setItem("note-data",JSON.stringify(noteArray));
        while(addedNotes.hasChildNodes()){
            addedNotes.removeChild(addedNotes.lastChild);
        }

        let v = 0;
        i = 0;
        noteArray.forEach(element => {
        addedNotes.appendChild(addNoteTab(element.title, v));
        v++;
        });
    }

}

function editNote(index, title, desc){
    newNote(index, title, desc);
    localStorage.setItem("note-data",JSON.stringify(noteArray));
}
let counter = 0;

function pinNote(index){
    const currentTabs = document.querySelectorAll('.note-tab');
    if(!noteArray[index].pinned){
        if(counter!=5){
            noteArray[index].pinned = true;  
            currentTabs[index].classList.add('pinned');
            counter++;
        }
    }else{
        noteArray[index].pinned = false;
        currentTabs[index].classList.remove('pinned');
        counter--;
    }
    localStorage.setItem("note-data",JSON.stringify(noteArray));
    const currentPinned = document.querySelectorAll('.pinned');
    currentPinned[0] != null? currentPinned[0].style.top = '0%': 0;
    currentPinned[1] != null? currentPinned[1].style.top = '8%': 0;
    currentPinned[2] != null? currentPinned[2].style.top = '16%': 0;        
    currentPinned[3] != null? currentPinned[3].style.top = '24%': 0;
    currentPinned[4] != null? currentPinned[4].style.top = '32%': 0;
    
    
}
