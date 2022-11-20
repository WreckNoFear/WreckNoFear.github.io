var completedProjects = document.getElementById('comp');
var workInProgressProjects = document.getElementById('wip');
var abandonedProjects = document.getElementById('abap');

var gi = document.querySelectorAll('a.grid-item-link');

completedProjects.addEventListener('click', () => {
    completedProjects.classList.add('sb-active');
    workInProgressProjects.classList.remove('sb-active');
    abandonedProjects.classList.remove('sb-active');
})
workInProgressProjects.addEventListener('click', () => {
    workInProgressProjects.classList.add('sb-active');
    completedProjects.classList.remove('sb-active');
    abandonedProjects.classList.remove('sb-active');
})
abandonedProjects.addEventListener('click', () => {
    abandonedProjects.classList.add('sb-active');
    completedProjects.classList.remove('sb-active');
    workInProgressProjects.classList.remove('sb-active');
})

completedProjects.addEventListener('click', updateProjects);
workInProgressProjects.addEventListener('click', updateProjects);
abandonedProjects.addEventListener('click', updateProjects);
window.onload = updateProjects;

function updateProjects () {
    if (completedProjects.classList.contains('sb-active')) {
        gi.forEach(element => {
            if (element.dataset.type != 'completed-project') {
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