<script lang="ts">
	export let title: string;
</script>

<article class="flex flex-col gap-3">
	<h3 class="text-gray-800 text-lg font-medium">{title}</h3>
	<p class="text-base leading-6 font-normal"><slot /></p>
</article>
