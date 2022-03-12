<script>
	import Letter from "./Letter.svelte";

	export let word;
	export let solution;

	let width = solution.length;
</script>

<grid>
	{#each new Array(width) as _}
		<row>
			{#each new Array(width) as _, i}
				<Letter letter={word[i] ?? ""} />
			{/each}
		</row>
	{/each}
</grid>

<style scoped>
	grid {
		margin: 2em;
		flex-direction: column;
	}
	grid,
	row {
		display: flex;
		gap: 0.5em;
	}
</style>
