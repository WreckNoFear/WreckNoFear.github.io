let form = document.getElementById("form");
let submitanother = document.getElementById("submit-another");
let submitted = document.getElementById("submitted");

function submitHandler(e) {
    e.preventDefault();
    form.style.display = "none";
    submitted.style.display = "block";
}

submitanother.addEventListener("click", () => {
    form.reset();
    form.style.display = "block";
    submitted.style.display = "none";
});