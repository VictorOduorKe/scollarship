document.getElementById("register-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const form=e.target;
    const messageArea=form.querySelector(".message-area");
    const registerBtn=form.querySelector("button");

    const username=form.elements["username"].value.trim();
    const email=form.elements["email"].value.trim();
    const phone=form.elements["phone"].value.trim();
    const password=form.elements["password"].value.trim();

    if(username===""||email===""||phone===""||password===""){
        messageArea.innerHTML="Kindly Fill all fields";
        messageArea.classList.add("message-error");
              registerBtn.disabled=true;

        setTimeout(() => {
            messageArea.innerHTML="";
            messageArea.classList.remove("message-error");
            registerBtn.disabled=false;
        }, 5000);
        return;
    }

    messageArea.innerHTML="Registered Successfully";
    messageArea.classList.add("message-success");
    setTimeout(() => {
        window.location.href="/hidden/progress.html"
    }, 5000);
    form.reset();
})