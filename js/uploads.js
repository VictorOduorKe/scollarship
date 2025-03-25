document.getElementById("upload-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const uploadData = e.target;
    const messageArea = uploadData.querySelector(".message-area");
    
    const educationLevel = uploadData.elements["education"].value;
    const educationCert = uploadData.elements["education-cert"].files[0];
    const visa=uploadData.elements["visa"].files[0];
    const healthCertificate=uploadData.elements["health-certificate"].files[0];
    const idCard=uploadData.elements["id-card"].files[0];
    const uploadBtn=uploadData.querySelector("button");

    if (!educationCert||!visa||!healthCertificate||!idCard) { 
        messageArea.innerHTML = "Please upload all documents";
        messageArea.classList.add("message-error");
        uploadBtn.disabled=true;

        setTimeout(() => {
            messageArea.innerHTML = "Please upload all documents";
            messageArea.classList.add("message-error");
            uploadBtn.disabled=false;
        }, 5000);
        return;
    }
     messageArea.innerHTML="Files uploaded successfully";
     messageArea.classList.add("")
    console.log("Education Level:", educationLevel);
    console.log("Selected File:", educationCert.name, educationCert.size, educationCert.type);
});
