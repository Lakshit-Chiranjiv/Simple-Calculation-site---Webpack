import { add_btn,sub_btn } from "./src/dom_vars";
import { add_function } from "./src/funcs/add_func";
import { subtract_function } from "./src/funcs/sub_func";


add_btn.addEventListener('click', add_function );

sub_btn.addEventListener('click', subtract_function );












// error part

        // if(isNaN(v1))
        // {
        //     add_val1.style.borderWidth = "1px";
        //     add_val1.style.border = "solid";
        //     add_val1.style.borderColor = "red";
        //     document.getElementById('eav1').innerHTML = '1st Value is invalid';
        // }
        // if(isNaN(v2))
        // {
        //     add_val2.style.borderWidth = "1px";
        //     add_val2.style.border = "solid";
        //     add_val2.style.borderColor = "red";
        //     document.getElementById('eav2').innerHTML = '2nd Value is invalid';
        // }