import '../styles/sidebar.css';
import main from './main.js';

import projects from './pages/projects.js';
import checklist from './pages/checklist.js';
import notes from './pages/notes.js';




export default function sidebar(){
    //linking buttons
    const projectsBtn = document.getElementById('projects-btn');
    const checklistBtn = document.getElementById('checklist-btn');
    const notesBtn = document.getElementById('notes-btn');

    main(projects());
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


}

