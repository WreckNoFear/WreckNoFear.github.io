var activeProjects = document.getElementById('actp');
var workInProgressProjects = document.getElementById('wip');
var abandonedProjects = document.getElementById('abap');

var gi = document.querySelectorAll('a.gi-link');

activeProjects.addEventListener('click', () => {
    activeProjects.classList.add('sb-active');
    workInProgressProjects.classList.remove('sb-active');
    abandonedProjects.classList.remove('sb-active');
})
workInProgressProjects.addEventListener('click', () => {
    workInProgressProjects.classList.add('sb-active');
    activeProjects.classList.remove('sb-active');
    abandonedProjects.classList.remove('sb-active');
})
abandonedProjects.addEventListener('click', () => {
    abandonedProjects.classList.add('sb-active');
    activeProjects.classList.remove('sb-active');
    workInProgressProjects.classList.remove('sb-active');
})

activeProjects.addEventListener('click', updateProjects);
workInProgressProjects.addEventListener('click', updateProjects);
abandonedProjects.addEventListener('click', updateProjects);
window.onload = updateProjects;

function updateProjects () {
    if (activeProjects.classList.contains('sb-active')) {
        gi.forEach(element => {
            if (element.dataset.type != 'active-project') {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        });
    } else if (workInProgressProjects.classList.contains('sb-active')) {
        gi.forEach(element => {
            if (element.dataset.type != 'workinprogress-project') {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        });
    } else if (abandonedProjects.classList.contains('sb-active')) {
        gi.forEach(element => {
            if (element.dataset.type != 'abandoned-project') {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        });
    }
}