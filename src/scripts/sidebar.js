import '../styles/sidebar.css';
import main from './main.js';

import projects from './pages/projects.js';
import checklist from './pages/checklist.js';
import notes from './pages/notes.js';

/*
import projectsWhite from '../icons/projects/projects-white-64.svg';
import projectsBlack from '../icons/projects/projects-black-64.svg';

import checklistWhite from '../icons/checklist/checklist-white-64.svg';
import checklistBlack from './icons/checklist/checklist-black-64.svg';

import notesWhite from '../icons/notes/notes-white-64.svg';
import notesBlack from '../icons/notes/notes-black-64.svg';
*/

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
        projectsBtn.style.backgroundImage = 'url(../src/icons/projects/projects-white-64.svg)';
        projectsBtn.classList.add('anim');

        checklistBtn.style.backgroundColor = '';
        checklistBtn.style.backgroundImage = 'url(../src/icons/checklist/checklist-white-64.svg)';
        checklistBtn.classList.add('anim');

        notesBtn.style.backgroundColor = '';
        notesBtn.style.backgroundImage = 'url(../src/icons/notes/notes-white-64.svg)';
        notesBtn.classList.add('anim');

        console.log(btn.id);
        btn.classList.remove('anim');
        btn.style.backgroundColor = 'lightgrey';

        if(btn.id === 'projects-btn'){
            projectsBtn.style.backgroundImage = 'url(../src/icons/projects/projects-black-64.svg)';
        }
        if(btn.id === 'checklist-btn'){
            checklistBtn.style.backgroundImage = 'url(../src/icons/checklist/checklist-black-64.svg)';
        }
        if(btn.id === 'notes-btn'){
            notesBtn.style.backgroundImage = 'url(../src/icons/notes/notes-black-64.svg)';
        }
        
    }


}

