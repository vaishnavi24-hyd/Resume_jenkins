
function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var projects = document.getElementById("projects").value;

    if (name == "" || email == "" || education == "" ||
        skills == "" || projects == "") {

        document.getElementById("msg").innerHTML = "Fill all fields";
    }
    else if (!email.includes("@")) {
        document.getElementById("msg").innerHTML = "Invalid Email";
    }
    else {
        document.getElementById("msg").innerHTML =
            "Resume Submitted Successfully!";
    }

    return false;
}
