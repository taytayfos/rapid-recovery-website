<script>
    import { onMount } from 'svelte';

    let visible = false;

    onMount(() => {
        const handleScroll = () => {
            visible = window.pageYOffset > 300;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

<button 
    class="back-to-top" 
    class:visible 
    on:click={scrollToTop}
    aria-label="Back to top"
>
    <span>↑</span>
</button>

<style>
    .back-to-top {
        position: fixed;
        bottom: var(--space-xl);
        right: var(--space-xl);
        width: 50px;
        height: 50px;
        background: var(--color-silver);
        color: var(--color-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
        z-index: 100;
        border: none;
    }

    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }

    .back-to-top:hover {
        background: var(--color-silver-light);
        transform: translateY(-5px);
    }
</style>
