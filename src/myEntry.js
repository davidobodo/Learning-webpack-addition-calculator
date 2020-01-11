import { run } from "./app/app";
// import "./css/myStyles.css";
import "./scss/myStyles.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
console.log("hi")

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService)