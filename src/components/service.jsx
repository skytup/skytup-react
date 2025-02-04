import React from 'react';
import '../source/services.css';

export default function Service() {
    return (
        <>
            <header>
                <h1>Our Services</h1>
            </header>

            <main>
                <section id="starterPlan">
                    <h2>Starter Plan</h2>
                    <p>Sign up now and get 70% off on your first order!</p>
                    <button><i className="fas fa-sign-in-alt"></i> Sign Up</button>
                </section>

                <section>
                    <h2>My Services</h2>
                    <div className="service">
                        <h3>Web Development</h3>
                        <p>I offer professional web development services, including custom website design, responsive layouts,
                            and
                            e-commerce integration.</p>
                        <button><i className="fas fa-shopping-cart"></i> Order Now</button>
                    </div>
                    <div className="service">
                        <h3>Android Development</h3>
                        <p>I specialize in developing high-quality Android apps tailored to your business needs, ensuring a
                            seamless
                            user experience.</p>
                        <button><i className="fas fa-mobile-alt"></i> Order Now</button>
                    </div>
                    <div className="service">
                        <h3>Maintenance Service</h3>
                        <p>Keep your website or application running smoothly with my maintenance services, including regular
                            updates,
                            bug fixes, and performance optimizations.</p>
                        <button><i className="fas fa-wrench"></i> Order Now</button>
                    </div>
                    <div className="service">
                        <h3>Personal Support</h3>
                        <p>Get personalized support and guidance for your online projects, whether you need help with website
                            management, content creation, or digital marketing.</p>
                        <button><i className="fas fa-headset"></i> Order Now</button>
                    </div>
                </section>
                <section id="staticProduct">
                    <h2>Static Website</h2>
                    <p>Check out our static product offerings for your business needs.</p>
                    <button><i className="fas fa-eye"></i> View Products</button>
                </section>

                <section id="dynamicProduct">
                    <h2>Dynamic Website</h2>
                    <p>Explore our dynamic product solutions tailored to your specific requirements.</p>
                    <button><i className="fas fa-rocket"></i> Get Started</button>
                </section>

                <section>
                    <h2>Budget Range</h2>
                    <input type="range" id="budgetRange" min="500" max="10000" value="2000" step="100" oninput="updateBudgetValue(this.value)" />
                    <span id="budgetValue">$2000</span>
                </section>

                <section>
                    <h2>Filter Services</h2>
                    <form>
                        <div>
                            <input type="checkbox" id="webDev" name="services" value="webDev" />
                            <label for="webDev">Web Development</label>
                        </div>
                        <div>
                            <input type="checkbox" id="androidDev" name="services" value="androidDev" />
                            <label for="androidDev">Android Development</label>
                        </div>
                        <div>
                            <input type="checkbox" id="maintenance" name="services" value="maintenance" />
                            <label for="maintenance">Maintenance Service</label>
                        </div>
                        <div>
                            <input type="checkbox" id="personalSupport" name="services" value="personalSupport" />
                            <label for="personalSupport">Personal Support</label>
                        </div>
                    </form>
                </section>
            </main>
        </>

    )
    function updateBudgetValue(value) {
        document.getElementById('budgetValue').textContent = '$' + value;
    }
}
