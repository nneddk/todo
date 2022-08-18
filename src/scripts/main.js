import '../styles/main.css'


export default function main(num){
    const currContent = document.getElementById('current');
    const currTitle = document.getElementById('title');
    currTitle.textContent = num;
    currContent.textContent = num;
}