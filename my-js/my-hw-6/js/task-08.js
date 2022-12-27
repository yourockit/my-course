const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     if (value === "") {
    //         alert(`Не все поля формы заполнены`);
    //     }
    //     console.log(name);
    //     console.log(value);
    // });

    const formElement = event.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    if (email === "" || password === "") {
        alert(`Не все поля формы заполнены`);
    } else {
        const formValue = {
            email,
            password,
        };

        console.log(formValue);
        event.currentTarget.reset();
    };
};