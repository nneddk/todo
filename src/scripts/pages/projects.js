import '../../styles/pages/projects.css';
let i = 0;
let  projectArray = [];
class projectForm{
    constructor(title, description, pinned){
        this.title = title;
        this.description = description;
        this.pinned = pinned;
    }
}


/* debug purposes, to fill arrays 
for(let i = 0; i<20; i++){
    i%2 == 0?projectArray.push(new projectForm('ogga', 'bogga')):projectArray.push(new projectForm('nuga', 'suga'));
}
*/
export default function projects(){
    const projects = document.createElement('div');
    projects.classList.add('projects-div');


    const projectsList = document.createElement('div');
    projectsList.classList.add('projects-list');

    const addProject = document.createElement('button');
    addProject.classList.add('add-project-btn')
    addProject.setAttribute('type', 'button');
    addProject.textContent = '+';

    addProject.onclick = function(){
        newProject();
    }

    projects.appendChild(addProject);
    projects.appendChild(projectsList);
    i = 0;

    let v = 0;
    projectArray = JSON.parse(localStorage.getItem("data") || "[]");
    projectArray.forEach(element => {
        projectsList.appendChild(addProjectTab(element.title, v));
        v++;
    });
    
    

    const currentPinned = document.querySelectorAll('.pinned');
    return projects;
    

}
function newProject(index, title, desc){
    const projectWrapper = document.getElementById('wrapper');
    projectWrapper.style.zIndex = '1';

    const projectEntry = document.createElement('div');
    projectEntry.classList.add('project-entry-div');
    
    const projectEntryTitle = document.createElement('input');
    projectEntryTitle.setAttribute('type', 'text');
    projectEntryTitle.setAttribute('maxlength', '64');
    projectEntryTitle.setAttribute('placeholder', 'name your new project');
    projectEntryTitle.classList.add('project-entry-title');
    !title?projectEntryTitle.value = '':projectEntryTitle.value = title;
    

    const projectEntryTitleSpan = document.createElement('span');
    projectEntryTitleSpan.classList.add('project-entry-title-span');

    const projectEntryCloseBtn = document.createElement('button');
    projectEntryCloseBtn.setAttribute('type', 'button');
    projectEntryCloseBtn.classList.add('project-entry-close-btn');
    projectEntryCloseBtn.textContent = 'x';
    projectEntryCloseBtn.onclick = function(){
        projectWrapper.style.zIndex = '-1';
    }
    

    projectEntryTitleSpan.appendChild(projectEntryTitle);
    projectEntry.appendChild(projectEntryTitleSpan);
    projectEntry.appendChild(projectEntryCloseBtn);

    const projectEntryDescription = document.createElement('textarea');
    projectEntryDescription.setAttribute('rows', '10');
    projectEntryDescription.setAttribute('cols', '32');
    

    projectEntryDescription.setAttribute('placeholder', 'add a description');
    projectEntryDescription.classList.add('project-entry-description');
    !desc?projectEntryDescription.value = '':projectEntryDescription.value = desc;

    const projectEntryDescriptionSpan = document.createElement('span');
    projectEntryDescriptionSpan.classList.add('project-entry-description-span');

    projectEntryDescriptionSpan.appendChild(projectEntryDescription);
    projectEntry.appendChild(projectEntryDescriptionSpan);
    //empty space for formatting, ignore
    projectEntry.appendChild(document.createElement('div'));
    if (index == null){
        const projectEntryAddBtn = document.createElement('button');
        projectEntryAddBtn.setAttribute('type', 'button');
        projectEntryAddBtn.classList.add('project-entry-add-btn');
        projectEntryAddBtn.textContent = 'add project';

        projectEntryAddBtn.onclick = function(){
            let currIndex =  projectArray.length;
            const currProjects = document.querySelector('.projects-list');
            const projectTitle = document.querySelector('.project-entry-title').value;
            const projectDesc = document.querySelector('.project-entry-description').value;
            projectArray.push(new projectForm(projectTitle, projectDesc));
            localStorage.setItem('data',JSON.stringify(projectArray));
            currProjects.appendChild(addProjectTab(projectTitle, currIndex));     

            projectWrapper.style.zIndex = '-1';
        }
        projectEntry.appendChild(projectEntryAddBtn);
        

    }else{
        const projectEntryEditBtn = document.createElement('button');
        projectEntryEditBtn.setAttribute('type', 'button');
        projectEntryEditBtn.classList.add('project-entry-add-btn');
        projectEntryEditBtn.textContent = 'edit project';

        projectEntryEditBtn.onclick = function(){
            const currTab = document.querySelector('.project-tab-title');
            currTab.textContent = document.querySelector('.project-entry-title').value;
            projectArray[index].title = document.querySelector('.project-entry-title').value;
            projectArray[index].description = document.querySelector('.project-entry-description').value;

            projectWrapper.style.zIndex = '-1';
        }
        projectEntry.appendChild(projectEntryEditBtn);
    }
    

    while(projectWrapper.hasChildNodes()){
        projectWrapper.removeChild(projectWrapper.lastChild);
    }


    projectWrapper.appendChild(projectEntry);
}

function addProjectTab(name, index){
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');
    
    if (projectArray[index].pinned){
        projectTab.classList.add('pinned');
        projectTab.style.top = (i)+'%';
        i+=8;
    }
    const projectTabTitle = document.createElement('div');
    projectTabTitle.classList.add('project-tab-title');
    projectTabTitle.textContent = name;
    projectTabTitle.onclick = function(){
        viewProject(index);
    }
    const projectTabDelete = document.createElement('button');
    projectTabDelete.setAttribute('id','button');
    projectTabDelete.classList.add('project-tab-delete');
    projectTabDelete.onclick = function(){
        deleteProject(index);
    }

    const projectTabPin = document.createElement('button');
    projectTabPin.setAttribute('type', 'button');
    projectTabPin.classList.add('project-tab-pin');
    projectTabPin.onclick = function(){
        pinProject(index);
    }

    projectTab.appendChild(projectTabTitle);
    projectTab.appendChild(projectTabDelete);
    projectTab.appendChild(projectTabPin);
    
    
    
    return projectTab;
}



function viewProject(index){
    let title = projectArray[index].title;
    let desc = projectArray[index].description;

    const projectWrapper = document.getElementById('wrapper');
    projectWrapper.style.zIndex = '1';

    const projectEntry = document.createElement('div');
    projectEntry.classList.add('view-project-div');

    const viewProjectTitle = document.createElement('div');
    viewProjectTitle.classList.add('view-project-title');
    viewProjectTitle.textContent = title;

    const projectEntryCloseBtn = document.createElement('button');
    projectEntryCloseBtn.setAttribute('type', 'button');
    projectEntryCloseBtn.classList.add('project-entry-close-btn');
    projectEntryCloseBtn.textContent = 'x';
    projectEntryCloseBtn.onclick = function(){
        projectWrapper.style.zIndex = '-1';
    }

    const viewProjectDesc = document.createElement('div');
    viewProjectDesc.classList.add('view-project-desc');
    viewProjectDesc.textContent = desc;

    const viewProjectButtonHolder = document.createElement('div');
    viewProjectButtonHolder.classList.add('view-project-button-holder');
    
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.setAttribute('type', 'button');
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.classList.add('view-project-btn');

    deleteProjectButton.onclick = function(){
        deleteProject(index);
        projectWrapper.style.zIndex = '-1';
    }

    const editProjectButton = document.createElement('button');
    editProjectButton.setAttribute('type', 'button');
    editProjectButton.classList.add('edit-project-project');
    editProjectButton.classList.add('view-project-btn');
    editProjectButton.onclick = function(){
        editProject(index, title, desc);


    }

    const pinProjectButton = document.createElement('button');
    pinProjectButton.setAttribute('type', 'button');
    pinProjectButton.classList.add('pin-project-button');
    pinProjectButton.classList.add('view-project-btn');
    pinProjectButton.onclick = function(){
        pinProject(index);
        projectWrapper.style.zIndex = '-1';
        
    }
    viewProjectButtonHolder.appendChild(deleteProjectButton);
    viewProjectButtonHolder.appendChild(editProjectButton);
    viewProjectButtonHolder.appendChild(pinProjectButton);



    projectEntry.appendChild(viewProjectTitle);
    projectEntry.appendChild(projectEntryCloseBtn);
    projectEntry.appendChild(viewProjectDesc);
    projectEntry.appendChild(document.createElement('div'));
    projectEntry.appendChild(viewProjectButtonHolder);


    while(projectWrapper.hasChildNodes()){
        projectWrapper.removeChild(projectWrapper.lastChild);
    }

    projectWrapper.appendChild(projectEntry);

}

function deleteProject(index){
    const addedProjects = document.querySelector('.projects-list');
    if(index!= null){
        projectArray.splice(index, 1);

        while(addedProjects.hasChildNodes()){
            addedProjects.removeChild(addedProjects.lastChild);
        }

        let v = 0;
        projectArray.forEach(element => {
        addedProjects.appendChild(addProjectTab(element.title, v));
        v++;
        });
    }

}

function editProject(index, title, desc){
    newProject(index, title, desc);
}
let counter = 0;

function pinProject(index){
    const currentTabs = document.querySelectorAll('.project-tab');
    if(!projectArray[index].pinned){
        if(counter!=5){
            projectArray[index].pinned = true;
            currentTabs[index].classList.add('pinned');
            counter++;
        }
        
    }else{
        projectArray[index].pinned = false;
        currentTabs[index].classList.remove('pinned');
        counter--;
    }
    
    const currentPinned = document.querySelectorAll('.pinned');
    currentPinned[0] != null? currentPinned[0].style.top = '0%': 0;
    currentPinned[1] != null? currentPinned[1].style.top = '8%': 0;
    currentPinned[2] != null? currentPinned[2].style.top = '16%': 0;        
    currentPinned[3] != null? currentPinned[3].style.top = '24%': 0;
    currentPinned[4] != null? currentPinned[4].style.top = '32%': 0;
    
    
}