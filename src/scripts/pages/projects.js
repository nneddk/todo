import '../../styles/pages/projects.css';

export default function projects(){
    const projects = document.createElement('div');
    projects.classList.add('projects-div');


    const projectsList = document.createElement('div');
    projectsList.classList.add('projects-list');
    
    const addProject = document.createElement('button');
    addProject.classList.add('add-project-btn')
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
    
    projectWrapper.onclick = function(){
        projectWrapper.style.zIndex = '-1';
    }

}