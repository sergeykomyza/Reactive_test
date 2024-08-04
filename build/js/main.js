// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ МАСКА ДЛЯ ИНПУТОВ (https://github.com/RobinHerbots/Inputmask)
const inputMask = () => {
    $(".js-maskPhone").inputmask({
        mask: "+7 999 999 99 99",
        clearIncomplete: true
    });
    $('.email').inputmask({
        mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
        clearIncomplete: true
    //     greedy: false,
    //     onBeforePaste: function (pastedValue, opts) {
    //         pastedValue = pastedValue.toLowerCase();
    //         return pastedValue.replace("mailto:", "");
    //     },
    //     definitions: {
    //         '*': {
    //             validator: "[0-9A-Za-z-а-я-]",
    //             casing: "lower"
    //         }
    //     }
    });
    $(".js-maskDate").inputmask({
        mask: "99/99/9999",
        clearIncomplete: true,
        'placeholder': 'dd/mm/yyyy'
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const steps = ()=> {

document.querySelectorAll('.step__body')[0].style.maxHeight = document.querySelectorAll('.step__body')[0].scrollHeight + 'px'
const form = document.querySelector('form'),
    step1 = document.querySelector('.step-1'),
    step2 = document.querySelector('.step-2'),
    step3 = document.querySelector('.step-3'),
    stepLast = document.querySelector('.step-last')

function activateNextStepButton(step){
    const nextStep = document.querySelector(step).nextElementSibling
    document.querySelector(step).classList.remove('step-active')
    document.querySelector(step).classList.add('step-complete')
    document.querySelector(step).querySelector('.step__body').style.maxHeight = 0
    nextStep.classList.add('step-active')
    nextStep.querySelector('.step__body').style.maxHeight = nextStep.querySelector('.step__body').scrollHeight + 'px'
    
}

step1.addEventListener('click', function(e){
    const input = e.target.closest('input[type="radio"]')
    const btn = e.target.closest('.js-nextStep')
    if(input){
        if(input.checked){
            input.closest('.step__body').querySelector('.js-nextStep').removeAttribute('disabled')
        }
    }
    if(btn){
        e.preventDefault()
        activateNextStepButton('.step-1')
    }
})

step2.addEventListener('input', function(e){ 
    const inputs = step2.querySelectorAll('input[type="text"]')
    const allFill = Array.from(inputs).every(input => input.value.trim() !== '')
    if(allFill){
        step2.querySelector('.js-nextStep').removeAttribute('disabled') 
    }
})
step2.addEventListener('click', function(e){
    if(e.target.closest('.js-nextStep')){
        e.preventDefault()
        activateNextStepButton('.step-2')
    }
})
step3.addEventListener('click', function(e){
    const input = e.target.closest('input[type="checkbox"]')
    const btn = e.target.closest('.js-nextStep')
    if(input){
        if(input.checked){
            input.closest('.step__body').querySelector('.js-nextStep').removeAttribute('disabled')
        }
    }
    if(btn){
        e.preventDefault()
        btn.closest('.step-box').style.display = 'none'
        stepLast.classList.add('is-complete')
    }
})

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
inputMask()
steps()