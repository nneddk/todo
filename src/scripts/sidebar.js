import '../styles/sidebar.css';
import main from './main.js';
export default function sidebar(){
    //linking buttons
    const projectsBtn = document.getElementById('projects-btn');
    const checklistBtn = document.getElementById('checklist-btn');
    const notesBtn = document.getElementById('notes-btn');

    //button function
    projectsBtn.onclick = function(){
        main(0);
    }
    checklistBtn.onclick = function(){
        main(1);
    }
    notesBtn.onclick = function(){
        main(2);
    }
}