const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

const defaultSpanValue = refs.span.textContent;

function onInputChange(event) {
    event.currentTarget.value !== "" ?
        refs.span.textContent = event.currentTarget.value :
        refs.span.textContent = defaultSpanValue;
};