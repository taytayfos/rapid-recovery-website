<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    onMount(() => {
        const checkReveal = () => {
            const windowHeight = window.innerHeight;
            const revealPoint = 120;

            document.querySelectorAll('.reveal').forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', checkReveal, { passive: true });
        checkReveal();

        return () => {
            window.removeEventListener('scroll', checkReveal);
        };
    });
</script>

<svelte:head>
    <title>Media & Podcast | Rapid Recovery: Elite Training Center</title>
    <meta name="description" content="Discover our media team services and Get to Know the Members podcast at Rapid Recovery: Elite Training Center.">
</svelte:head>

<!-- Hero Section -->
<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/podcast.jpg');">
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">Content & Community</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Media &</span>
            <span class="highlight">Podcast</span>
        </h1>
        <p class="hero-description">
            Your story. Your training. Captured with purpose.
        </p>
        <div class="hero-buttons">
            <a href="#podcast" class="btn btn-primary">Listen Now</a>
            <a href="#media-team" class="btn btn-secondary">Media Services</a>
        </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>

<!-- Media Team Section -->
<section class="media-team" id="media-team" aria-labelledby="media-title">
    <div class="section-header reveal">
        <p class="section-tag">Content Creation</p>
        <h2 class="section-title" id="media-title">Our Media Team</h2>
        <p class="section-description">
            Your story. Your Training. Captured with Purpose.
        </p>
    </div>
    <div class="media-content reveal">
        <p class="media-text">
            At Rapid Recovery: Elite Training Center, we believe every member has a story worth telling — and our in-house media team is here to bring those stories to life. From training footage and professional photos to member and business spotlights, our team creates content that reflects the energy, precision, and excellence that define our community.
        </p>
        <div class="media-services">
            <h4>What We Offer:</h4>
            <ul>
                <li><strong>Training Videos & Photo Sessions</strong> – Capture your workouts, form checks, and PR moments</li>
                <li><strong>Member Spotlights</strong> – Feature stories highlighting your journey and transformation</li>
                <li><strong>Business Spotlights</strong> – Tailored photo/video features for member-owned businesses</li>
                <li><strong>Join Get to Know the Members</strong> – A podcast featuring the most important people in our gym community, you! Members can contact us to schedule a time to be featured on the podcast</li>
                <li><strong>Content Packages</strong> – Perfect for personal branding and social media growth</li>
            </ul>
        </div>
        <div class="media-note">
            <p><em>*Pricing is determined by the media team. Request a quote for your vision. Member spotlights and initial "Get to Know the Members" features are free of charge.</em></p>
        </div>
        <div class="media-cta">
            <a href="{base}/#contact" class="btn btn-primary">Connect with Media Team</a>
        </div>
    </div>
</section>

<!-- Podcast Section -->
<section class="podcast-section" id="podcast" aria-labelledby="podcast-title">
    <div class="section-header reveal">
        <p class="section-tag">Iron Insights</p>
        <h2 class="section-title" id="podcast-title">Get to Know the Members Podcast</h2>
        <p class="section-description">
            Real Stories. Real People. One Community.
        </p>
    </div>
    <div class="podcast-content reveal">
        <p class="podcast-text">
            The Get to Know the Members Podcast is where the walls of the gym disappear and the stories that built it come to life. Hosted by Dr. Taylor Foster, DPT, CSCS and Hailie Foster, PA-C, each episode dives into the lives of the people who make Rapid Recovery: Elite Training Center what it is — the dedicated members, business owners, and athletes who bring energy, purpose, and personality to our community.
        </p>
        <p class="podcast-text">
            These conversations go beyond sets and reps. We talk discipline, faith, struggle, success, and everything that happens in between. It's a space for connection — where you'll learn what drives the people training beside you and be reminded why this gym is so much more than a place to lift weights.
        </p>
        <div class="podcast-cta">
            <a href="https://open.spotify.com/show/6dx0KHsb8NB5voUVQE8zuU?si=H30Ukgd8SnuZdjbJ7KUAGA" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
            <a href="https://podcasts.apple.com/us/podcast/iron-insights/id1796747217" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Listen on Apple Podcasts</a>
        </div>
    </div>
</section>

<!-- Instagram Section -->
<section class="instagram-section" id="instagram" aria-labelledby="instagram-title">
    <div class="section-header reveal">
        <p class="section-tag">Follow Us</p>
        <h2 class="section-title" id="instagram-title">Connect with Us on Instagram</h2>
        <p class="section-description">
            The gym doesn't end when you walk out the door — it lives online through our community.
        </p>
    </div>
    <div class="instagram-content reveal">
        <p class="instagram-text">
            Follow @rr_elitetrainingcenter on Instagram to stay connected, inspired, and informed. Our page isn't just photos of workouts — it's a behind-the-scenes look at what makes Rapid Recovery: Elite Training Center truly different.
        </p>
        <div class="instagram-features">
            <h4>What You'll Find:</h4>
            <ul>
                <li>Member Spotlights – Real people. Real stories. Weekly highlights</li>
                <li>Member-Owned Businesses – Support the entrepreneurs inside our walls</li>
                <li>Equipment Deep Dives – Detailed breakdowns of every handpicked piece</li>
                <li>Recovery & Amenities Guide – Tutorials and tips for our recovery tools</li>
                <li>Community Highlights – Photos, videos, and stories from events and everyday moments</li>
                <li>Behind the Scenes – Sneak peeks at new equipment and upgrades</li>
            </ul>
        </div>
        <div class="instagram-cta">
            <a href="https://www.instagram.com/rr_elitetrainingcenter" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Follow @rr_elitetrainingcenter</a>
        </div>
    </div>
</section>
