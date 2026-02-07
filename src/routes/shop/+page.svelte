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
    <title>Shop | Rapid Recovery: Elite Training Center</title>
    <meta name="description" content="Smoothies, supplements, and merchandise at Rapid Recovery: Elite Training Center. Everything you need, right when you need it.">
</svelte:head>

<!-- Hero Section -->
<section class="hero pt-hero" id="home" aria-labelledby="hero-title" style="background-image: url('{base}/images/shop_page.jpg');">
    <div class="hero-overlay" aria-hidden="true"></div>
    
    <div class="hero-content">
        <p class="hero-subtitle">Fuel & Gear</p>
        <h1 class="hero-title" id="hero-title">
            <span class="line">The</span>
            <span class="highlight">Shop</span>
        </h1>
        <p class="hero-description">
            Smoothies, Supps & Merchandise
        </p>
        <div class="hero-buttons">
            <a href="#offerings" class="btn btn-primary">View Offerings</a>
            <a href="{base}/#contact" class="btn btn-secondary">Contact Us</a>
        </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
    </div>
</section>

<!-- Shop Section -->
<section class="shop" id="offerings" aria-labelledby="shop-title">
    <div class="section-header reveal">
        <p class="section-tag">Fuel & Gear</p>
        <h2 class="section-title" id="shop-title">Smoothies, Supps, & Merchandise</h2>
        <p class="section-description">
            Member Essentials - Everything You Need, Right When You Need It
        </p>
    </div>
    <div class="shop-content reveal">
        <p class="shop-text">
            We're here to keep you fueled, prepared, and performing your best — whether you're starting your session, recovering afterward, or just forgot something at home (it happens).
        </p>
        <div class="shop-offerings">
            <ul>
                <li><strong>Microwavable Ready-to-Eat Meals</strong> – Quick, clean fuel you can heat and eat</li>
                <li><strong>Protein Smoothies</strong> – Made fresh at the front desk. Ask about our Smoothie of the Month</li>
                <li><strong>Add-Ins & Custom Options</strong> – Peanut butter, frozen fruit, fresh bananas, and rotating add-ins</li>
                <li><strong>Snacks & Performance Fuel</strong> – Grab-and-go options to keep energy and recovery on track</li>
                <li><strong>Forgot Something?</strong> – We've got essentials like deodorant, headphones, and more</li>
                <li><strong>Rapid Recovery Merchandise</strong> – Apparel and accessories that represent our community</li>
            </ul>
        </div>
    </div>
</section>

<!-- Merchandise Preview Section -->
<section class="equipment-section" id="merch">
    <div class="section-header reveal">
        <p class="section-tag">Rep the Brand</p>
        <h2 class="section-title">Rapid Recovery Merchandise</h2>
    </div>
    <div class="equipment-content reveal">
        <p class="equipment-text">
            Wear the brand that represents discipline, excellence, and community. Our merchandise is designed for athletes who take their training seriously and want to represent what Rapid Recovery stands for — both inside and outside the gym.
        </p>
        <p class="equipment-text">
            From performance apparel to everyday essentials, our gear is built to match the quality you've come to expect from everything we do.
        </p>
        <div class="equipment-brands">
            <h4>Available Items:</h4>
            <p>T-Shirts, Hoodies, Tank Tops, Stringers, Hats, Gym Bags, Shaker Bottles, and more. New items added regularly.</p>
        </div>
        <div class="cta-center">
            <a href="{base}/#contact" class="btn btn-primary">Inquire About Merchandise</a>
        </div>
    </div>
</section>

<style>
    .cta-center {
        text-align: center;
        margin-top: var(--space-xl);
    }
</style>
