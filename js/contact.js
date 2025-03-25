
document.addEventListener("submit",(e)=>{
    e.preventDefault();
    const  messageArea=document.querySelector('.message-area');
    const form=document.getElementById('contact-form');
    const btn=form.querySelector("button");
     const username=form.elements["username"].value.trim();
     const email=form.elements["email"].value.trim();
     const phone=form.elements["phone"].value.trim();
     const message=form.elements["message"].value.trim();
    messageArea.innerText="";

     if(username===""||email===""||phone===""||message===""){
        messageArea.innerText="kindly fill all fields";
        messageArea.classList.add("message-error");
        btn.disabled=true;
        setTimeout(()=>{
            messageArea.innerText="";
            messageArea.classList.remove("message-error");
            btn.disabled=false;
        },5000)
        return;      
    }

    messageArea.innerText="Message Sent successfully"
    messageArea.classList.add("message-success");
    form.reset();


})