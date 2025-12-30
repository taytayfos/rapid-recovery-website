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
    <title>Member Business Network | Rapid Recovery: Elite Training Center</title>
    <meta name="description" content="Join the Rapid Recovery Business Network. Advertise your business, connect with like-minded entrepreneurs, and grow within our community.">
</svelte:head>

<!-- Hero Section -->
<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/business_banner.jpg');">
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">Community</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">Business</span>
            <span class="highlight">Network</span>
        </h1>
        <p class="hero-description">
            When one member wins, the community wins.
        </p>
        <div class="hero-buttons">
            <a href="#benefits" class="btn btn-primary">Learn More</a>
            <a href="{base}/#contact" class="btn btn-secondary">Join Network</a>
        </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>

<!-- Business Network Section -->
<section class="business-network" id="benefits" aria-labelledby="business-title">
    <div class="section-header reveal">
        <p class="section-tag">Community</p>
        <h2 class="section-title" id="business-title">Rapid Recovery Business Network</h2>
        <p class="section-description">
            At Rapid Recovery: Elite Training Center, community doesn't stop when you leave the gym.
        </p>
    </div>
    <div class="business-content reveal">
        <p class="business-text">
            We're building a network of like-minded business owners, creators, and professionals who share the same values we train by — discipline, integrity, and relentless pursuit of growth. This initiative was designed to help our members connect, collaborate, and support each other beyond training sessions. Because when one member wins, the community wins.
        </p>
        <div class="business-benefits">
            <h4>For a small monthly or annual fee, business-owner members receive:</h4>
            <ul>
                <li><strong>Website Feature:</strong> Your business showcased on our Member Business Network page</li>
                <li><strong>In-Gym Promotion:</strong> Digital ad space on our gym TVs</li>
                <li><strong>Banner or Poster Display:</strong> Professionally hung inside the gym</li>
                <li><strong>Exclusive Events & Networking:</strong> Quarterly Members in Business meet-ups</li>
                <li><strong>Podcast Feature:</strong> Spotlight on our "Get to Know the Members" podcast</li>
                <li><strong>Social Media Spotlight:</strong> Featured across our social channels</li>
                <li><strong>Member Business Feature Email:</strong> Monthly email to entire community</li>
            </ul>
        </div>
        <div class="business-cta">
            <a href="{base}/#contact" class="btn btn-primary">Join the Network</a>
        </div>
    </div>
</section>

<!-- Featured Businesses Section (Placeholder) -->
<section class="equipment-section" id="featured">
    <div class="section-header reveal">
        <p class="section-tag">Our Members</p>
        <h2 class="section-title">Featured Businesses</h2>
        <p class="section-description">
            Support the entrepreneurs inside our walls
        </p>
    </div>
    <div class="equipment-content reveal">
        <p class="equipment-text">
            Coming soon — our member business directory will showcase the talented entrepreneurs, professionals, and creators who train at Rapid Recovery. From fitness professionals to local services, our members offer a wide range of expertise.
        </p>
        <p class="equipment-text">
            Want to be featured? Join the Business Network and get your business in front of hundreds of motivated, success-driven individuals.
        </p>
        <div class="cta-center">
            <a href="{base}/#contact" class="btn btn-primary">Get Featured</a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="reviews-section">
    <div class="section-header reveal">
        <p class="section-tag">Are You a Business Owner?</p>
        <h2 class="section-title">Join Our Network Today</h2>
    </div>
    <div class="reviews-content reveal">
        <p class="reviews-intro">Connect with like-minded entrepreneurs and grow your business within our community.</p>
        <div class="reviews-cta">
            <a href="{base}/#contact" class="btn btn-primary">Join the Network</a>
            <a href="{base}/#memberships" class="btn btn-secondary">Become a Member</a>
        </div>
    </div>
</section>

<style>
    .cta-center {
        text-align: center;
        margin-top: var(--space-xl);
    }

    .reviews-cta {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
