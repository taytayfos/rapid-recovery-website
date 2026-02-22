<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let scrolled = false;
    let mobileMenuOpen = false;
    let activeDropdown = null;

    $: currentPath = $page.url.pathname;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.pageYOffset > 100;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        const handleClickOutside = (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                activeDropdown = null;
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    });

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
        document.body.style.overflow = '';
    }

    function toggleDropdown(name) {
        activeDropdown = activeDropdown === name ? null : name;
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            if (mobileMenuOpen) {
                closeMobileMenu();
            }
            activeDropdown = null;
        }
    }

    function isActive(path) {
        if (path === '/') return currentPath === '/';
        return currentPath.startsWith(path);
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<header>
    <nav class="nav" class:scrolled aria-label="Main navigation">
        <!-- Logo -->
        <a href="{base}/" class="nav-logo" aria-label="Rapid Recovery: Elite Training Center - Home">
            <img src="{base}/images/logo2.png" alt="Rapid Recovery" class="logo-img" />
        </a>

        <!-- Desktop Navigation -->
        <ul class="nav-links" role="list">
            <!-- About Dropdown -->
            <li class="nav-dropdown" class:open={activeDropdown === 'about'}>
                <button 
                    class="nav-dropdown-trigger"
                    class:active={currentPath === '/'}
                    on:click|stopPropagation={() => toggleDropdown('about')}
                    aria-expanded={activeDropdown === 'about'}
                    aria-haspopup="true"
                >
                    About
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" width="12" height="12">
                        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li role="none"><a href="{base}/#about" role="menuitem" on:click={() => activeDropdown = null}>Our Mission</a></li>
                    <li role="none"><a href="{base}/#memberships" role="menuitem" on:click={() => activeDropdown = null}>Memberships</a></li>
                    <li role="none"><a href="{base}/#owners" role="menuitem" on:click={() => activeDropdown = null}>Meet the Owners</a></li>
                    <li role="none"><a href="{base}/#location" role="menuitem" on:click={() => activeDropdown = null}>Location</a></li>
                    <li role="none"><a href="{base}/#contact" role="menuitem" on:click={() => activeDropdown = null}>Contact</a></li>
                </ul>
            </li>

            <!-- The Gym Dropdown -->
            <li class="nav-dropdown" class:open={activeDropdown === 'gym'}>
                <button 
                    class="nav-dropdown-trigger"
                    class:active={isActive('/facilities')}
                    on:click|stopPropagation={() => toggleDropdown('gym')}
                    aria-expanded={activeDropdown === 'gym'}
                    aria-haspopup="true"
                >
                    The Gym
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" width="12" height="12">
                        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li role="none"><a href="{base}/facilities" role="menuitem" on:click={() => activeDropdown = null}>Facilities</a></li>
                    <li role="none"><a href="{base}/facilities#equipment" role="menuitem" on:click={() => activeDropdown = null}>Equipment</a></li>
                    <li role="none"><a href="{base}/facilities#turf" role="menuitem" on:click={() => activeDropdown = null}>Turf Area</a></li>
                    <li role="none"><a href="{base}/facilities#recovery" role="menuitem" on:click={() => activeDropdown = null}>Recovery</a></li>
                    <li role="none"><a href="{base}/facilities#posing-room" role="menuitem" on:click={() => activeDropdown = null}>Posing Room</a></li>
                </ul>
            </li>

            <!-- Services Dropdown -->
            <li class="nav-dropdown" class:open={activeDropdown === 'services'}>
                <button 
                    class="nav-dropdown-trigger"
                    class:active={isActive('/training') || isActive('/pt')}
                    on:click|stopPropagation={() => toggleDropdown('services')}
                    aria-expanded={activeDropdown === 'services'}
                    aria-haspopup="true"
                >
                    Services
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" width="12" height="12">
                        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li role="none"><a href="{base}/training" role="menuitem" on:click={() => activeDropdown = null}>Personal Training</a></li>
                    <li role="none"><a href="{base}/pt" role="menuitem" on:click={() => activeDropdown = null}>Physical Therapy</a></li>
                </ul>
            </li>

            <!-- Community Dropdown -->
            <li class="nav-dropdown" class:open={activeDropdown === 'community'}>
                <button 
                    class="nav-dropdown-trigger"
                    class:active={isActive('/media') || isActive('/business-network') || isActive('/shop')}
                    on:click|stopPropagation={() => toggleDropdown('community')}
                    aria-expanded={activeDropdown === 'community'}
                    aria-haspopup="true"
                >
                    Community
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" width="12" height="12">
                        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li role="none"><a href="{base}/media" role="menuitem" on:click={() => activeDropdown = null}>Media & Podcast</a></li>
                    <li role="none"><a href="{base}/business-network" role="menuitem" on:click={() => activeDropdown = null}>Business Network</a></li>
                    <li role="none"><a href="{base}/shop" role="menuitem" on:click={() => activeDropdown = null}>Shop</a></li>
                </ul>
            </li>
        </ul>

        <!-- CTA Button -->
        <a href="https://form.jotform.com/260487862745066" class="nav-cta" target="_blank" rel="noopener noreferrer">Join Now</a>

        <!-- Mobile Menu Toggle -->
        <button 
            class="nav-toggle" 
            aria-expanded={mobileMenuOpen} 
            aria-controls="navMobile" 
            aria-label="Toggle navigation menu"
            on:click={toggleMobileMenu}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
</header>

<!-- Mobile Menu -->
<nav 
    class="nav-mobile" 
    class:active={mobileMenuOpen}
    id="navMobile" 
    aria-label="Mobile navigation" 
    aria-hidden={!mobileMenuOpen}
>
    <div class="mobile-menu-content">
        <!-- Home -->
        <div class="mobile-section">
            <a href="{base}/" class="mobile-link" on:click={closeMobileMenu}>Home</a>
        </div>

        <!-- About -->
        <div class="mobile-section">
            <span class="mobile-section-title">About</span>
            <a href="{base}/#about" class="mobile-link" on:click={closeMobileMenu}>Our Mission</a>
            <a href="{base}/#memberships" class="mobile-link" on:click={closeMobileMenu}>Memberships</a>
            <a href="{base}/#owners" class="mobile-link" on:click={closeMobileMenu}>Meet the Owners</a>
            <a href="{base}/#location" class="mobile-link" on:click={closeMobileMenu}>Location</a>
            <a href="{base}/#contact" class="mobile-link" on:click={closeMobileMenu}>Contact</a>
        </div>

        <!-- The Gym -->
        <div class="mobile-section">
            <span class="mobile-section-title">The Gym</span>
            <a href="{base}/facilities" class="mobile-link" on:click={closeMobileMenu}>Facilities</a>
            <a href="{base}/facilities#equipment" class="mobile-link" on:click={closeMobileMenu}>Equipment</a>
            <a href="{base}/facilities#turf" class="mobile-link" on:click={closeMobileMenu}>Turf Area</a>
            <a href="{base}/facilities#recovery" class="mobile-link" on:click={closeMobileMenu}>Recovery</a>
            <a href="{base}/facilities#posing-room" class="mobile-link" on:click={closeMobileMenu}>Posing Room</a>
        </div>

        <!-- Services -->
        <div class="mobile-section">
            <span class="mobile-section-title">Services</span>
            <a href="{base}/training" class="mobile-link" on:click={closeMobileMenu}>Personal Training</a>
            <a href="{base}/pt" class="mobile-link" on:click={closeMobileMenu}>Physical Therapy</a>
        </div>

        <!-- Community -->
        <div class="mobile-section">
            <span class="mobile-section-title">Community</span>
            <a href="{base}/media" class="mobile-link" on:click={closeMobileMenu}>Media & Podcast</a>
            <a href="{base}/business-network" class="mobile-link" on:click={closeMobileMenu}>Business Network</a>
            <a href="{base}/shop" class="mobile-link" on:click={closeMobileMenu}>Shop</a>
        </div>

        <!-- CTA -->
        <div class="mobile-cta">
            <a href="https://form.jotform.com/260487862745066" class="btn btn-primary" target="_blank" rel="noopener noreferrer" on:click={closeMobileMenu}>Join Now</a>
        </div>
    </div>
</nav>

<!-- Overlay for mobile menu -->
{#if mobileMenuOpen}
    <div class="nav-overlay" on:click={closeMobileMenu} aria-hidden="true"></div>
{/if}

<style>
    /* ===================================
       Navigation Base
       =================================== */
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: var(--space-md) var(--space-2xl);
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all var(--transition-smooth);
    }

    .nav.scrolled {
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(20px);
        padding: var(--space-sm) var(--space-2xl);
        border-bottom: 1px solid var(--color-border);
    }

    /* ===================================
       Logo
       =================================== */
    .nav-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .logo-img {
        height: 50px;
        width: auto;
        transition: height var(--transition-base);
    }

    .nav.scrolled .logo-img {
        height: 40px;
    }

    /* ===================================
       Desktop Navigation Links
       =================================== */
    .nav-links {
        display: flex;
        gap: var(--space-xl);
        list-style: none;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav-links > li > a,
    .nav-dropdown-trigger {
        font-family: var(--font-display);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text);
        text-decoration: none;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        position: relative;
        padding: var(--space-sm) 0;
        transition: color var(--transition-fast);
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .nav-links > li > a::after,
    .nav-dropdown-trigger::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-silver);
        transition: width var(--transition-base);
    }

    .nav-links > li > a:hover,
    .nav-links > li > a:focus,
    .nav-links > li > a.active,
    .nav-dropdown-trigger:hover,
    .nav-dropdown-trigger:focus,
    .nav-dropdown-trigger.active {
        color: var(--color-silver);
    }

    .nav-links > li > a:hover::after,
    .nav-links > li > a:focus::after,
    .nav-links > li > a.active::after,
    .nav-dropdown-trigger:hover::after,
    .nav-dropdown-trigger.active::after {
        width: 100%;
    }

    /* Dropdown Arrow */
    .dropdown-arrow {
        transition: transform var(--transition-fast);
    }

    .nav-dropdown.open .dropdown-arrow {
        transform: rotate(180deg);
    }

    /* ===================================
       Dropdown Menu
       =================================== */
    .nav-dropdown {
        position: relative;
    }

    .dropdown-menu {
        position: absolute;
        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        background: rgba(19, 19, 19, 0.98);
        backdrop-filter: blur(10px);
        border: 1px solid var(--color-border);
        list-style: none;
        min-width: 200px;
        padding: var(--space-sm) 0;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
        z-index: 100;
        margin: 0;
    }

    .nav-dropdown.open .dropdown-menu {
        opacity: 1;
        visibility: visible;
    }

    .dropdown-menu li {
        margin: 0;
    }

    .dropdown-menu a {
        display: block;
        padding: var(--space-sm) var(--space-lg);
        font-family: var(--font-display);
        font-size: 0.85rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--color-text);
        text-decoration: none;
        transition: all var(--transition-fast);
        white-space: nowrap;
    }

    .dropdown-menu a:hover,
    .dropdown-menu a:focus {
        background: var(--color-gray-dark);
        color: var(--color-silver);
    }

    /* ===================================
       CTA Button
       =================================== */
    .nav-cta {
        font-family: var(--font-display);
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding: 0.75rem 1.75rem;
        background: var(--color-silver);
        color: var(--color-bg);
        text-decoration: none;
        transition: all var(--transition-base);
        clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
    }

    .nav-cta:hover,
    .nav-cta:focus {
        background: var(--color-silver-light);
        transform: translateY(-2px);
    }

    /* ===================================
       Mobile Menu Toggle
       =================================== */
    .nav-toggle {
        display: none;
        flex-direction: column;
        gap: 6px;
        cursor: pointer;
        z-index: 1001;
        padding: var(--space-xs);
        background: transparent;
        border: none;
    }

    .nav-toggle span {
        width: 28px;
        height: 2px;
        background: var(--color-white);
        transition: all var(--transition-base);
        display: block;
    }

    .nav-toggle[aria-expanded="true"] span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
    }

    .nav-toggle[aria-expanded="true"] span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle[aria-expanded="true"] span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
    }

    /* ===================================
       Mobile Menu
       =================================== */
    .nav-mobile {
        position: fixed;
        top: 0;
        right: -100%;
        width: 320px;
        max-width: 85vw;
        height: 100vh;
        background: var(--color-bg-alt);
        z-index: 1000;
        transition: right var(--transition-smooth);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .nav-mobile.active {
        right: 0;
    }

    .mobile-menu-content {
        padding: 100px var(--space-lg) var(--space-2xl);
    }

    .mobile-section {
        margin-bottom: var(--space-xl);
        border-bottom: 1px solid var(--color-border);
        padding-bottom: var(--space-lg);
    }

    .mobile-section:last-of-type {
        border-bottom: none;
    }

    .mobile-section-title {
        display: block;
        font-family: var(--font-display);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--color-silver);
        margin-bottom: var(--space-md);
    }

    .mobile-link {
        display: block;
        font-family: var(--font-display);
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--color-white);
        text-decoration: none;
        padding: var(--space-sm) 0;
        transition: color var(--transition-fast);
    }

    .mobile-link:hover,
    .mobile-link:focus {
        color: var(--color-silver);
    }

    .mobile-cta {
        margin-top: var(--space-xl);
        text-align: center;
    }

    .mobile-cta .btn {
        width: 100%;
    }

    /* Overlay */
    .nav-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 999;
        opacity: 1;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    /* ===================================
       Responsive
       =================================== */
    @media (max-width: 1024px) {
        .nav {
            padding: var(--space-md) var(--space-lg);
        }

        .nav.scrolled {
            padding: var(--space-sm) var(--space-lg);
        }

        .nav-links {
            gap: var(--space-lg);
        }
    }

    @media (max-width: 768px) {
        .nav-links,
        .nav-cta {
            display: none;
        }

        .nav-toggle {
            display: flex;
        }

        .logo-img {
            height: 40px;
        }

        .nav.scrolled .logo-img {
            height: 35px;
        }
    }
</style>
