import i1 from "./images/c1.jpg"
import i2 from "./images/c2.jpg"

import i3 from "./images/c3.jpg"

import i4 from "./images/c4.jpg"

function Recommended(){
    return(

        <div class="udemy__recommended">
            <h3 class="udemy__recommended__header">Recommeded for you</h3>
            <p>pick the best fit</p>
            <div class="course__card__main">
                <div class="course__card">
                    <img src={i1}></img>
                    <h3>Python programming by john mosh</h3>
                    <p>John Mosh</p>
                    <p>⭐⭐⭐⭐</p>
                    <p>499 <span>1999</span></p>
                </div>
                <div class="course__card">
                    <img src={i2}></img>
                    <h3>Java programming by Moheen Ali Academy</h3>
                    <p>DFF Academy of san francise</p>
                    <p>⭐⭐⭐⭐</p>
                    <p>499 <span>1999</span></p>
                </div>

                <div class="course__card">
                    <img src={i3}></img>
                    <h3>Full stack web Development by steeve</h3>
                    <p>col steeve</p>
                    <p>⭐⭐⭐⭐</p>
                    <p>499 <span>1999</span></p>
                </div>

                <div class="course__card">
                    <img src={i4}></img>
                    <h3>ML by Error makes clever Academy</h3>
                    <p>Agnel John</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>499 <span>1999</span></p>
                </div>

            </div>
        </div>
    )
}
export default Recommended