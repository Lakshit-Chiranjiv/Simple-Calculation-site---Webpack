import { sub_val1,sub_val2,sub_result } from "../dom_vars";

export const subtract_function = () => {
    if(sub_val1.value !== '' && sub_val2.value !== '')
    {
        let v1 = Number(sub_val1.value);
        let v2 = Number(sub_val2.value);
        let d = (v1 >= v2) ? (v1 - v2) : (v2 - v1);
        sub_result.innerHTML = `<strong>Result = ${d}</strong>`;
    }
};