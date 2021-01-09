var hamburger = document.getElementById('menu');
var row = document.getElementsByClassName('row')[0];

function ham() {
    hamburger.style.visibility = 'hidden';
    if(row.style.display == 'none') {
        hamburger.src = './images/icon-close.svg';
        hamburger.style.visibility = 'visible';
        row.style.display = 'block';
    }
    else {
        hamburger.src = './images/icon-hamburger.svg';
        hamburger.style.visibility = 'visible';
        row.style.display = 'none';
    }
}

const reviews = [
    {
        img: "./images/avatar-anisha.png",
        name: "Anisha Li",
        feedback: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
    },
    {
        img: "./images/avatar-ali.png",
        name: "Ali Bravo",
        feedback: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
    },
    {
        img: "./images/avatar-richard.png",
        name: "Richard Watts",
        feedback: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
    },
     {
        img: "./images/avatar-shanai.png",
        name: "Shanai Gough",
        feedback: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
    }
];

const img = document.getElementById('image');
const nam = document.getElementsByClassName('name')[0];
const feedback = document.getElementsByClassName('feedback')[0];

console.log(img, nam, feedback);

const radioBtns = document.getElementsByClassName('radio')[0];

radioBtns.addEventListener('click', change);

function change(e) {
    console.log(e.target.value)
    if(e.target.value == 'A') {
        showChange(0);
    }
    else if (e.target.value == 'B') {
        showChange(1);
    }
    else if (e.target.value == 'C') {
        showChange(2);
    }
    else if (e.target.value == 'D') {
        showChange(3);
    }
}

function showChange(index) {
    const item = reviews[index];
    img.src = item.img;
    nam.textContent = item.name;
    feedback.textContent = item.feedback;
}