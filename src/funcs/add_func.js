import { add_val1,add_val2,add_result } from "../dom_vars";



export const add_function = () => {

    if(add_val1.value !== '' && add_val2.value !== '')
    {
        let v1 = Number(add_val1.value);
        let v2 = Number(add_val2.value);
        let s = v1 + v2;
        add_result.innerHTML = `<strong>Result = ${s}</strong>`;
    }
};