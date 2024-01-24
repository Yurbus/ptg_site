document.addEventListener('DOMContentLoaded', function () {
    // Получаем все формы на странице
    const forms = document.querySelectorAll('form');
    
    // Проходимся по каждой форме и добавляем обработчик события отправки
    forms.forEach(function(form) {
        form.addEventListener('submit', function (e) {
            formSend(e, form);
        });
    });

    async function formSend(e, form) {
        e.preventDefault();

        let error = formValidate(form);
        
        let formData = new FormData(form);
        
        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Error');
                form.classList.remove('_sending');
            }
        } else {
            alert('Fill in the fields or the field is entered incorrectly!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            
            if (input.classList.contains('_email')) {
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else { 
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    // Проверка электронной почты
    function emailTest(input) {
        return !/^[.a-zA-Z0-9_-]+@[a-z0-9_-]+\.([a-z0-9]{1,6}\.)?[a-z]{2,6}$/.test(input.value);
    }
});





// Отправка почты

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
        
//         let formData = new FormData(form);
        
//         if (error === 0) {
//             form.classList.add('_sending');
//             let response = await fetch('sendmail.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             if(response.ok) {
//                 let result = await response.json();
//                 alert(result.message);
//                 form.reset();
//                 form.classList.remove('_sending');
//             }else {
//                 alert('Error');
//                 form.classList.remove('_sending');
//             }
//         } else {
//             alert('Fill in the fields!');
//         }
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input)
            
//             if (input.classList.contains('_email')) {
//                 if (emailTest(input)){
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
//                 formAddError(input);
//                 error++;
//             } else { 
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//         return error;
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     // test email
//     function emailTest(input) {
//         return !/^[.a-zA-Z0-9_-]+@[a-z0-9_-]+\.([a-z0-9]{1,6}\.)?[a-z]{2,6}$/.test(input.value);
//     }
// });