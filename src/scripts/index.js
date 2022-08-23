import '../styles/index.css';
import '../styles/sidebar.css';

import projects from './pages/projects.js';
import checklist from './pages/checklist.js';
import notes from './pages/notes.js';

function header(){
    const header = document.createElement('div');
    header.classList.add('header');
    
    const to = document.createElement('span');
    to.classList.add('to');
    to.textContent = 'to';

    const Do = document.createElement('span');
    Do.classList.add('do');
    Do.textContent = 'do';

    header.appendChild(to);
    header.appendChild(Do);

    return header;
}

function wrapper(){
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'wrapper');
    return wrapper;
}

function content(){
    const content = document.createElement('div');
    content.classList.add('content');

    const main = document.createElement('div');
    main.classList.add('main');

    const currentContent = document.createElement('div');
    currentContent.setAttribute('id', 'current-content');

    main.appendChild(currentContent);

    content.appendChild(sidebar());
    content.appendChild(main);

    return content;
}

function sidebar(){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const projectsBtn  = document.createElement('button');
    projectsBtn.setAttribute('type', 'button');
    projectsBtn.setAttribute('id', 'projects-btn');
    projectsBtn.classList.add('sidebar-btn');
    projectsBtn.classList.add('anim');


    const checklistBtn = document.createElement('button');
    checklistBtn.setAttribute('type', 'button');
    checklistBtn.setAttribute('id', 'checklist-btn');
    checklistBtn.classList.add('sidebar-btn');
    checklistBtn.classList.add('anim');

    const notesBtn = document.createElement('button');
    notesBtn.setAttribute('type', 'button');
    notesBtn.setAttribute('id', 'notes-btn');
    notesBtn.classList.add('sidebar-btn');
    notesBtn.classList.add('anim');

    
    btnChanger(projectsBtn);
    //button function
    projectsBtn.onclick = function(){
        main(projects());
        btnChanger(this);
    }
    checklistBtn.onclick = function(){
        main(checklist());
        btnChanger(this);
    }
    notesBtn.onclick = function(){
        main(notes());
        btnChanger(this);
    }
    

    function btnChanger(btn){
        projectsBtn.style.backgroundColor = '';
        projectsBtn.classList.add('anim');

        checklistBtn.style.backgroundColor = '';
        checklistBtn.classList.add('anim');

        notesBtn.style.backgroundColor = '';
        notesBtn.classList.add('anim');

        btn.classList.remove('anim');
        btn.style.backgroundColor = 'lightgrey';
        
    }

    sidebar.appendChild(projectsBtn);
    sidebar.appendChild(checklistBtn);
    sidebar.appendChild(notesBtn);

    return sidebar;


}

function main(child){
    const currContent = document.getElementById('current-content');
    
    while (currContent.hasChildNodes()){
        currContent.removeChild(currContent.lastChild);
    }
    currContent.appendChild(child);
}

function footer(){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'nneddk';
    return footer;
}

document.body.appendChild(header());
document.body.appendChild(wrapper());
document.body.appendChild(content());
document.body.appendChild(footer());

main(projects());