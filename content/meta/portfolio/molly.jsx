import molly from "./molly.jpg";
import { molly as mollyClass, img } from "./molly.module.css";

export const Molly = () => {
    return <div className={mollyClass}>
               <picture>
                   <img className={img} src={molly} alt="" width="400" height="400" />
               </picture>
           </div>;
};
