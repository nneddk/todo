import '../styles/main.css'


export default function main(child){
    const currContent = document.getElementById('current-content');
    while (currContent.hasChildNodes()){
        currContent.removeChild(currContent.lastChild);
    }
    currContent.appendChild(child);
}