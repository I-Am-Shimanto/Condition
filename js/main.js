const question = document.querySelector('.question');
const input = document.querySelector('.input');
const error = document.querySelector('.error');
const yesbtn = document.querySelector('.yesbtn');
const nobtn = document.querySelector('.nobtn');
const qualifiedImage = document.querySelector('.qualifiedimage');
const disqualifiedImage = document.querySelector('.disqualifiedimage');
const submit = document.querySelector('.submit');

submit.addEventListener('click', ()=>{
    // ======== age validation =========
     if(input.value < 1){
        error.innerHTML = "PLease Enter a Valid Age"
     }else if(input.value <= 17){
        error.innerHTML = "Your Age is too low for Licence"
     }else if(input.value >= 18 && input.value <= 70){
        question.innerHTML = "Do you have medical certificate?"
        input.style.display = "none"
        yesbtn.style.display = "block"
        nobtn.style.display = "block"
        error.innerHTML = ""

    // ========== medical certificate validation =========
        yesbtn.addEventListener('click', ()=>{
            error.innerHTML = ""

            // ========== criminal record validation =========
            question.innerHTML = "Do you have any criminal record?"
            nobtn.addEventListener('click', ()=>{
                yesbtn.style.display = "none"
                nobtn.style.display = "none"
                error.innerHTML = ""
                question.innerHTML = ""
                qualifiedImage.style.display = "block"
                disqualifiedImage.style.display = "none"
                submit.style.display = "none"
            })
            yesbtn.addEventListener('click', ()=>{
                error.innerHTML = ""
                yesbtn.style.display = "none"
                nobtn.style.display = "none"
                question.innerHTML = ""
                disqualifiedImage.style.display = "block"
                submit.style.display = "none"
            })
        })
        // ============ medical certificate validation =========
        nobtn.addEventListener('click', ()=>{
            disqualifiedImage.style.display = "block"
            yesbtn.style.display = "none"
            nobtn.style.display = "none"
            question.innerHTML = ""
            submit.style.display = "none"
        })
     }
     else{
        error.innerHTML = "You are not eligible for Licence"
     }
})