<script lang="ts">
	import { fade } from "svelte/transition";

	export let solution = "";
	export let guess = "";
	export let value = "";
	export let position = 0;
	export let row = 0;
	export let finished = false;

	// @ts-expect-error
	const analysis = (globalThis.analysis ??= []);

	$: state = (() => {
		analysis[row] ??= new Map();
		if (finished) {
			if (value && value.toLowerCase() === solution[position] && guess) {
				analysis[row].set(value, "correct");
			} else if (
				value &&
				solution.toLowerCase().includes(value.toLowerCase()) &&
				position === guess.indexOf(value)
			) {
				analysis[row].set(value, "almost");
			} else {
				analysis[row].set(value, "incorrect");
			}

			/* if ([...analysis[row].values()].includes("correct"))
				analysis[row] = new Map(
					[...analysis[row]].map(a => {
						debugger;
						if (a[1] === "almost") a[1] = "incorrect";
						return a;
					})
				); */
			return analysis[row].get(value);
		}
	})();
</script>

<letter class={state}>
	{#key value}
		<span in:fade>{value}</span>
	{/key}
</letter>

<style scoped>
	letter {
		box-shadow: 0 0 5px black;
		border-radius: 10%;
		font-size: 2em;
		padding: 0;
		font-weight: bold;
		aspect-ratio: 1;
		width: 2em;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
	}

	.incorrect {
		background-color: #5d627d;
		box-shadow: 0 0 5px gray;
		color: white;
	}

	.correct {
		background-color: seagreen;
		box-shadow: 0 0 5px green;
		color: white;
	}

	.almost {
		background-color: #ff9800;
		box-shadow: 0 0 5px yellow;
		color: white;
	}
</style>
