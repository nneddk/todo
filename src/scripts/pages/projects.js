import '../../styles/pages/projects.css';
let  projectsArray = [];
class projectsForm{
    constructor(title, pinned){
        this.title = title;
        this.pinned = pinned;
    }
}

export default function projects(){
    const projects = document.createElement('div');
    projects.classList.add('projects-div');

    const projectsList = document.createElement('div');
    projectsList.classList.add('projects-list');

    const addProjects = document.createElement('button');
    addProjects.classList.add('add-project-btn')
    addProjects.setAttribute('type', 'button');
    addProjects.textContent = '+';

    addProjects.onclick = function(){
        newProject();
    }

    projects.appendChild(addProjects);
    projects.appendChild(projectsList);
    
    return projects;
}

function newProject(){
    console.log('new project');
}