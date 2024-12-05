function Navbar() {
    return (
        
            <div class="navbar">

                <div class="navbar__header">
                    <h3>Udemy</h3>
                </div>
                <div class="navbar__search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Seacrh for anything here... Tech, Business, Art..."></input>
                </div>
                <div class="navbar__categories">
                    <h3>Courses</h3>
                    <div class="navbar__categories__cart">
                        <p >My Learning</p>
                        <div class="navbar__categories__cart__para">
                            <p>You have not purchased any courses yet</p>

                        </div>
                    </div>
                    <div class="navbar__categories__icons">
                        <i class="fa-solid fa-bell"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-user"></i>

                    </div>

                </div>
            </div>
        
    )
}
export default Navbar