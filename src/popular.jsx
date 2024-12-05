import c1 from "./images/c1.jpg"
import c2 from "./images/c2.jpg"

import c3 from "./images/c3.jpg"

import c4 from "./images/c4.jpg"

function Most_Popular() {
    return (
        <div>        <div class="most__popular">
            <h2>Most popular</h2>
            <p>pick the best fit</p>
            <div class="course__card__main">
                <div class="course__card">
                    <img src={c1}></img>
                        <h3>Python programming by john mosh</h3>
                        <p>John Mosh</p>
                        <p>⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>
                <div class="course__card">
                    <img src={c2}></img>
                        <h3>Java programming by Moheen Ali Academy</h3>
                        <p>DFF Academy of san francise</p>
                        <p>⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>

                <div class="course__card">
                    <img src={c3}></img>
                        <h3>Full stack web Development by steeve</h3>
                        <p>col steeve</p>
                        <p>⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>

                <div class="course__card">
                    <img src={c4}></img>
                        <h3>ML by Error makes clever Academy</h3>
                        <p>Agnel John</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>
                <div class="course__card">
                    <img src={c3}></img>
                        <h3>Full stack web Development by steeve</h3>
                        <p>col steeve</p>
                        <p>⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>
                <div class="course__card">
                    <img src={c2}></img>
                        <h3>Java programming by Moheen Ali Academy</h3>
                        <p>DFF Academy of san francise</p>
                        <p>⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>

                <div class="course__card">
                    <img src={c1}></img>
                        <h3>Python programming by john mosh</h3>
                        <p>John Mosh</p>
                        <p>⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>
                <div class="course__card">
                    <img src={c4}></img>
                        <h3>ML by Error makes clever Academy</h3>
                        <p>Agnel John</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>499 <span>1999</span></p>
                </div>


            </div>


        </div>
        </div>
    )
}
export default Most_Popular