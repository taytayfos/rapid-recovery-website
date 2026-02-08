<script>
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import CookieNotice from '$lib/components/CookieNotice.svelte';
    import BackToTop from '$lib/components/BackToTop.svelte';
    import '$lib/styles/global.css';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    // Determine footer variant based on current page
    $: footerVariant = $page.url.pathname.startsWith('/pt') ? 'pt' : 'gym';

    onMount(() => {
        // Load Nuclea/GHL external tracking script
        const trackingScript = document.createElement('script');
        trackingScript.src = 'https://link.elitetrainingcenter.org/js/external-tracking.js';
        trackingScript.setAttribute('data-tracking-id', 'tk_a5c60b0798a64de3bf2737e7d63067fc');
        document.body.appendChild(trackingScript);
    });
</script>

<!-- Skip to main content link -->
<a href="#main" class="skip-link">Skip to main content</a>

<Nav />

<main id="main">
    <slot />
</main>

<Footer variant={footerVariant} />
<CookieNotice />
<BackToTop />
