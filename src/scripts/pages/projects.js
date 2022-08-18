import '../../styles/pages/projects.css';

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
    return projects;

}

function newProject(){
    const projectWrapper = document.getElementById('wrapper');
    projectWrapper.style.zIndex = '1';

    const projectEntry = document.createElement('div');
    projectEntry.classList.add('project-entry-div');
    
    const projectEntryTitle = document.createElement('input');
    projectEntryTitle.setAttribute('type', 'text');
    projectEntryTitle.setAttribute('maxlength', '28');
    projectEntryTitle.setAttribute('placeholder', 'Name your new project');
    projectEntryTitle.classList.add('project-entry-title');

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
    projectEntryDescription.setAttribute('maxlength', '310');
    
    projectEntryDescription.setAttribute('placeholder', 'Project Description');
    projectEntryDescription.classList.add('project-entry-description');

    const projectEntryDescriptionSpan = document.createElement('span');
    projectEntryDescriptionSpan.classList.add('project-entry-description-span');

    projectEntryDescriptionSpan.appendChild(projectEntryDescription);
    projectEntry.appendChild(projectEntryDescriptionSpan);
    //empty space for formatting, ignore
    projectEntry.appendChild(document.createElement('div'));

    const projectEntryAddBtn = document.createElement('button');
    projectEntryAddBtn.setAttribute('type', 'button');
    projectEntryAddBtn.classList.add('project-entry-add-btn');
    projectEntryAddBtn.textContent = 'Add project';
    projectEntryAddBtn.onclick = function(){
        
        const projectTitle = document.querySelector('.project-entry-title').value;
        const projectDesc = document.querySelector('.project-entry-description').value;
        projectArray.push(new projectForm(projectTitle, projectDesc));
        
        console.log(projectArray);

        projectWrapper.style.zIndex = '-1';
    }

    projectEntry.appendChild(projectEntryAddBtn);

    while(projectWrapper.hasChildNodes()){
        projectWrapper.removeChild(projectWrapper.lastChild);
    }


    projectWrapper.appendChild(projectEntry);
}

let  projectArray = [];

class projectForm{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}