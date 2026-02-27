    // DOM Elements 
    const btnEl = document.querySelector(".btn");
    const inputEl = document.getElementById("input");
    const copyIconEl = document.querySelector(".fa-copy");
    const alertContainerEl = document.querySelector(".alertContainer");

    // Event Lestiner on button 
    btnEl.addEventListener("click", ()=> {
    createPassword();
    });
   // Event listener on copy element
copyIconEl.addEventListener("click", ()=> {
    copyPassword();
    
    // FIRST show the alert by REMOVING "active" class
    alertContainerEl.classList.remove("active");
    
    // THEN hide it after 2 seconds by ADDING "active" class back
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    }, 2000);
});
    // functon to create a password 
    function createPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+:?{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwrodLength = 14;
    let password = "";
    for (let index = 0; index < passwrodLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, password);
    }
    inputEl.value = password;
    }
    // functon to copy a password 
    function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
    }
