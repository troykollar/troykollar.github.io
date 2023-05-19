<script lang="ts">
	export let href: string;
	export let ariaLabel: string | undefined = undefined;
</script>

<a {href} aria-label={ariaLabel} class="text-gray-600 hover:text-gray-800"><slot /></a>
