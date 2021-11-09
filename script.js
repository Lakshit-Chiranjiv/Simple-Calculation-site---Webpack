const add_val1 = document.getElementById('a-v1');
const add_val2 = document.getElementById('a-v2');
const add_btn = document.getElementById('a-b');
const add_result = document.getElementById('a-res');

const sub_val1 = document.getElementById('s-v1');
const sub_val2 = document.getElementById('s-v2');
const sub_btn = document.getElementById('s-b');
const sub_result = document.getElementById('s-res');

console.log(Number(add_val1.value) + 12);

add_btn.addEventListener('click', () => {
    if(add_val1.value !== '' && add_val2.value !== '')
    {
        let v1 = Number(add_val1.value);
        let v2 = Number(add_val2.value);
        let s = v1 + v2;
        add_result.innerHTML = `<strong>Result = ${s}</strong>`;
    }
});

sub_btn.addEventListener('click', () => {
    if(sub_val1.value !== '' && sub_val2.value !== '')
    {
        let v1 = Number(sub_val1.value);
        let v2 = Number(sub_val2.value);
        let d = (v1 >= v2) ? (v1 - v2) : (v2 - v1);
        sub_result.innerHTML = `<strong>Result = ${d}</strong>`;
    }
});