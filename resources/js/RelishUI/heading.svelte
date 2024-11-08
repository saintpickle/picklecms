<script>
    import {cn} from "./utils";

    /**
     * @typedef {Object} Props
     * @prop {string} variant - Heading Variant
     * @prop {HTMLHeadingElement} props - Heading element props
     */

    /**
     * @type Props
     */
    let { variant, children, class: styles, ...props } = $props();

    const base = "text-7xl";

    const classes = cn(base, styles);
</script>

<h1 {...props} aria-label="heading" class={cn(classes, styles)}>
    {@render children?.()}
</h1>