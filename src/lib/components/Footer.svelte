<script>
    import { base } from '$app/paths';
    export let variant = 'gym';
</script>

<footer class="footer">
    <div class="footer-main">
        <div class="footer-info">
            <a href="{base}/" class="footer-logo">
                <img src="{base}/images/logo2.png" alt="Rapid Recovery" class="footer-logo-img" />
            </a>
            <p class="footer-subtitle">
                {#if variant === 'pt'}
                    Sports Therapy & Performance
                {:else}
                    Elite Training Center
                {/if}
            </p>
            <div class="footer-details">
                <p>3243 Hamilton Blvd</p>
                <p>Allentown, PA 18103</p>
                <p><a href="tel:+16107986815">(610) 798-6815</a></p>
                <p><a href="mailto:support@elitetrainingcenter.org">support@elitetrainingcenter.org</a></p>
            </div>
            <div class="footer-social">
                {#if variant === 'pt'}
                <a href="https://www.instagram.com/rapidrecoverypt" class="social-link" aria-label="Follow Rapid Recovery PT on Instagram" target="_blank" rel="noopener noreferrer">IG</a>
                {:else}
                <a href="https://www.instagram.com/rr_elitetrainingcenter" class="social-link" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">IG</a>
                {/if}
                <a href="https://youtube.com/@taytayfos_hayhayfos" class="social-link" aria-label="Subscribe on YouTube" target="_blank" rel="noopener noreferrer">YT</a>
            </div>
        </div>

        <div class="footer-nav-section">
            <div class="footer-nav-column">
                <h4>The Gym</h4>
                <ul>
                    <li><a href="{base}/facilities">Facilities</a></li>
                    <li><a href="{base}/facilities#equipment">Equipment</a></li>
                    <li><a href="{base}/facilities#recovery">Recovery</a></li>
                    <li><a href="{base}/#memberships">Memberships</a></li>
                </ul>
            </div>
            <div class="footer-nav-column">
                <h4>Services</h4>
                <ul>
                    <li><a href="{base}/training">Personal Training</a></li>
                    <li><a href="{base}/pt">Physical Therapy</a></li>
                </ul>
            </div>
            <div class="footer-nav-column">
                <h4>Community</h4>
                <ul>
                    <li><a href="{base}/media">Media & Podcast</a></li>
                    <li><a href="{base}/business-network">Business Network</a></li>
                    <li><a href="{base}/shop">Shop</a></li>
                </ul>
            </div>
            <div class="footer-nav-column">
                <h4>Info</h4>
                <ul>
                    <li><a href="{base}/#contact">Contact</a></li>
                    <li><a href="{base}/privacy-policy">Privacy Policy</a></li>
                    <li><a href="{base}/cancellations">Cancellations</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-75.5000000!3d40.6000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3243%20Hamilton%20Blvd%2C%20Allentown%2C%20PA%2018103!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Rapid Recovery Location"
            ></iframe>
        </div>
    </div>
    
    <div class="footer-bottom">
        <p class="footer-copy">
            © {new Date().getFullYear()} Rapid Recovery: 
            {#if variant === 'pt'}
                Sports Therapy and Performance LLC
            {:else}
                Elite Training Center
            {/if}. All Rights Reserved.
        </p>
    </div>
</footer>

<style>
    .footer {
        background: var(--color-bg);
        border-top: 1px solid var(--color-border);
    }
    .footer-main {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: var(--space-2xl);
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--space-3xl) var(--space-2xl);
    }
    .footer-logo {
        display: inline-block;
        margin-bottom: var(--space-sm);
    }
    .footer-logo-img {
        height: 45px;
        width: auto;
    }
    .footer-subtitle {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin-bottom: var(--space-lg);
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .footer-details {
        margin-bottom: var(--space-lg);
    }
    .footer-details p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xs);
        font-size: 0.9rem;
    }
    .footer-details a {
        color: var(--color-text-muted);
        text-decoration: none;
        transition: color var(--transition-fast);
    }
    .footer-details a:hover {
        color: var(--color-silver);
    }
    .footer-social {
        display: flex;
        gap: var(--space-sm);
    }
    .social-link {
        width: 42px;
        height: 42px;
        border: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-display);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-text);
        text-decoration: none;
        transition: all var(--transition-base);
    }
    .social-link:hover,
    .social-link:focus {
        border-color: var(--color-silver);
        background: var(--color-silver);
        color: var(--color-bg);
    }
    .footer-nav-section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-lg);
    }
    .footer-nav-column h4 {
        font-family: var(--font-display);
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--color-silver);
        margin-bottom: var(--space-md);
    }
    .footer-nav-column ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .footer-nav-column li {
        margin-bottom: var(--space-sm);
    }
    .footer-nav-column a {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        text-decoration: none;
        transition: color var(--transition-fast);
    }
    .footer-nav-column a:hover {
        color: var(--color-silver);
    }
    .footer-map {
        position: relative;
        border: 1px solid var(--color-border);
        overflow: hidden;
        min-height: 250px;
    }
    .footer-map iframe {
        width: 100%;
        height: 100%;
        min-height: 250px;
        border: 0;
        filter: grayscale(100%) invert(92%) contrast(90%);
        transition: filter var(--transition-base);
    }
    .footer-map:hover iframe {
        filter: grayscale(50%) invert(92%) contrast(90%);
    }
    .footer-bottom {
        border-top: 1px solid var(--color-border);
        padding: var(--space-md) var(--space-2xl);
        text-align: center;
    }
    .footer-copy {
        font-size: 0.85rem;
        color: var(--color-text-muted);
    }
    @media (max-width: 1024px) {
        .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xl);
            padding: var(--space-2xl) var(--space-lg);
        }
        .footer-nav-section {
            grid-template-columns: repeat(2, 1fr);
        }
        .footer-map {
            grid-column: span 2;
        }
    }
    @media (max-width: 768px) {
        .footer-main {
            grid-template-columns: 1fr;
        }
        .footer-nav-section {
            grid-template-columns: repeat(2, 1fr);
        }
        .footer-map {
            grid-column: auto;
        }
        .footer-bottom {
            padding: var(--space-md) var(--space-lg);
        }
    }
    @media (max-width: 480px) {
        .footer-nav-section {
            grid-template-columns: 1fr;
            text-align: center;
        }
        .footer-info {
            text-align: center;
        }
        .footer-social {
            justify-content: center;
        }
        .footer-logo {
            display: block;
        }
    }
</style>
