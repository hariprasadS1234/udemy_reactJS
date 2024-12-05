import img1 from "./images/udemy_banner.jpg"
function Banner() {
    return (
        <div>
            <div class="udemy__banner">
                <img src={img1} alt="udemy_banner"></img>
                <div class="udemy__animated__banner">
                    <h3>Hurry Up! Udemy courses 50% off till midnight</h3>
                    <p>Buy the best courses with a off of the year, grab the course and knowledge</p>
                </div>
            </div>
        </div>
    )
}
export default Banner