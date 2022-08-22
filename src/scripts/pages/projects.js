import '../../styles/pages/projects.css';

let  projectArray = [];

class projectForm{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}

export default function projects(){
    const projects = document.createElement('div');
    projects.classList.add('projects-div');


    const projectsList = document.createElement('div');
    projectsList.classList.add('projects-list');
    
    const pinnedProjectsDiv = document.createElement('div');
    pinnedProjectsDiv.classList.add('pinned-projects');

    const addedProjects = document.createElement('div');
    addedProjects.classList.add('added-projects');

    projectsList.appendChild(pinnedProjectsDiv);
    projectsList.appendChild(addedProjects);

    const addProject = document.createElement('button');
    addProject.classList.add('add-project-btn')
    addProject.setAttribute('type', 'button');
    addProject.textContent = '+';

    addProject.onclick = function(){
        newProject();
    }

    

    projects.appendChild(addProject);
    projects.appendChild(projectsList);

    let v = 0;
    projectArray.forEach(element => {
        addedProjects.appendChild(addProjectTab(element.title, v));
        v++;
    });
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
        let index =  projectArray.length;
        const currProjects = document.querySelector('.added-projects');
        const projectTitle = document.querySelector('.project-entry-title').value;
        const projectDesc = document.querySelector('.project-entry-description').value;
        projectArray.push(new projectForm(projectTitle, projectDesc));
        currProjects.appendChild(addProjectTab(projectTitle, index));     
        console.log(projectArray);

        projectWrapper.style.zIndex = '-1';
    }

    projectEntry.appendChild(projectEntryAddBtn);

    while(projectWrapper.hasChildNodes()){
        projectWrapper.removeChild(projectWrapper.lastChild);
    }


    projectWrapper.appendChild(projectEntry);
}
let editIndex;

function addProjectTab(name, index){
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');

    projectTab.onclick = function(){
        editIndex = index;
        console.log(editIndex);
        viewProject(index);
    }
    const projectTabTitle = document.createElement('div');
    projectTabTitle.classList.add('project-tab-title');
    projectTabTitle.textContent = name;

    projectTab.appendChild(projectTabTitle);

    return projectTab;
}



function viewProject(index){
    const projectWrapper = document.getElementById('wrapper');
    projectWrapper.style.zIndex = '1';

    const projectEntry = document.createElement('div');
    projectEntry.classList.add('project-entry-div');

    const viewProjectTitle = document.createElement('div');
    viewProjectTitle.classList.add('view-project-title');
    viewProjectTitle.textContent = projectArray[index].title;

    const projectEntryCloseBtn = document.createElement('button');
    projectEntryCloseBtn.setAttribute('type', 'button');
    projectEntryCloseBtn.classList.add('project-entry-close-btn');
    projectEntryCloseBtn.textContent = 'x';
    projectEntryCloseBtn.onclick = function(){
        projectWrapper.style.zIndex = '-1';
    }

    projectEntry.appendChild(viewProjectTitle);
    projectEntry.appendChild(projectEntryCloseBtn);


    while(projectWrapper.hasChildNodes()){
        projectWrapper.removeChild(projectWrapper.lastChild);
    }

    projectWrapper.appendChild(projectEntry);

}

