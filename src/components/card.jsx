import React from 'react'
// import "../source/card.css";
export default function Card() {
    return (
        <section class="blogs">
            <div class="hero_container">
                <h2>Latest Blogs</h2>
                <div class="blog-grid">
                    <div class="blog-card">
                        <div class="blog-thumbnail">
                            <img src="https://via.placeholder.com/1280x720" alt="Blog 1 Thumbnail" />
                        </div>
                        <div class="blog-content">
                            <h3 class="blog-title">The Future of Cloud Computing</h3>
                            <p class="blog-summary">Explore the latest trends and innovations shaping the future of
                                cloud technology.</p>
                            <div class="blog-meta">
                                <span>June 15, 2024</span>
                                <span><i class="fas fa-eye"></i> 1.5k views</span>
                            </div>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="blog-thumbnail">
                            <img src="https://via.placeholder.com/1280x720" alt="Blog 2 Thumbnail" />
                        </div>
                        <div class="blog-content">
                            <h3 class="blog-title">Cybersecurity Best Practices</h3>
                            <p class="blog-summary">Learn how to protect your digital assets with these essential
                                cybersecurity tips.</p>
                            <div class="blog-meta">
                                <span>June 10, 2024</span>
                                <span><i class="fas fa-eye"></i> 2.3k views</span>
                            </div>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="blog-thumbnail">
                            <img src="https://via.placeholder.com/1280x720" alt="Blog 3 Thumbnail" />
                        </div>
                        <div class="blog-content">
                            <h3 class="blog-title">AI in Everyday Life</h3>
                            <p class="blog-summary">Discover how artificial intelligence is transforming our daily
                                experiences.</p>
                            <div class="blog-meta">
                                <span>June 5, 2024</span>
                                <span><i class="fas fa-eye"></i> 3.7k views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
