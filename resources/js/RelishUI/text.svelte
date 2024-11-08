<script>
    import {cn} from "./utils";

    /**
     * @typedef {Object} Props
     * @prop {HTMLParagraphElement} props - Heading element props
     */

    /**
     * @type Props
     */
    let { variant, children, class: styles, ...props } = $props();

    const base = "text-md";

    const classes = cn(base, styles);
</script>

<p {...props} aria-label="heading" class={classes}>
    {@render children?.()}
</p>