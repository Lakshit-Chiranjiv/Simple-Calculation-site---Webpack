alert('Webpack done  !!!');
import { add_btn,sub_btn } from "./dom_vars";
import { add_function } from "./funcs/add_func";
import { subtract_function } from "./funcs/sub_func";
import "./style.css";


add_btn.addEventListener('click', add_function );

sub_btn.addEventListener('click', subtract_function );