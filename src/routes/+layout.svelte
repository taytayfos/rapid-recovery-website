<script>
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import CookieNotice from '$lib/components/CookieNotice.svelte';
    import BackToTop from '$lib/components/BackToTop.svelte';
    import '$lib/styles/global.css';
    import { page } from '$app/stores';

    // Determine footer variant based on current page
    $: footerVariant = $page.url.pathname.startsWith('/pt') ? 'pt' : 'gym';
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
