<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let showNotice = false;

    onMount(() => {
        if (browser) {
            const cookieConsent = localStorage.getItem('cookieConsent');
            if (!cookieConsent) {
                setTimeout(() => {
                    showNotice = true;
                }, 1000);
            }
        }
    });

    function acceptCookies() {
        if (browser) {
            localStorage.setItem('cookieConsent', 'accepted');
            showNotice = false;
        }
    }
</script>

{#if showNotice}
    <div class="cookie-notice show" role="dialog" aria-live="polite" aria-label="Cookie consent banner">
        <div class="cookie-notice-content">
            <p class="cookie-text">
                We use cookies to improve your experience on our site. By continuing to browse, you accept our use of cookies.
            </p>
            <div class="cookie-actions">
                <a href="/privacy-policy" class="cookie-link">Learn More</a>
                <button class="cookie-accept" on:click={acceptCookies}>Accept</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .cookie-notice {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(19, 19, 19, 0.98);
        backdrop-filter: blur(10px);
        border-top: 2px solid var(--color-silver);
        padding: var(--space-md) var(--space-lg);
        z-index: 9999;
        opacity: 0;
        transform: translateY(100%);
        transition: all var(--transition-smooth);
    }

    .cookie-notice.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-notice-content {
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-lg);
    }

    .cookie-text {
        font-size: 0.9375rem;
        color: var(--color-text);
        line-height: 1.6;
        margin: 0;
    }

    .cookie-actions {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        flex-shrink: 0;
    }

    .cookie-link {
        font-family: var(--font-display);
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--color-silver);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .cookie-link:hover,
    .cookie-link:focus {
        color: var(--color-silver-light);
        text-decoration: underline;
    }

    .cookie-accept {
        font-family: var(--font-display);
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding: 0.75rem 1.75rem;
        background: var(--color-silver);
        color: var(--color-bg);
        border: none;
        cursor: pointer;
        transition: all var(--transition-base);
        clip-path: polygon(4% 0, 100% 0, 96% 100%, 0% 100%);
    }

    .cookie-accept:hover,
    .cookie-accept:focus {
        background: var(--color-silver-light);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .cookie-notice-content {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
        }

        .cookie-actions {
            justify-content: center;
            flex-direction: column;
            gap: var(--space-sm);
        }

        .cookie-accept {
            width: 100%;
        }
    }
</style>
