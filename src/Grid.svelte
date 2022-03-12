<script lang="ts">
	import Letter from "./Letter.svelte";

	const words: string[][] = [];
	let row = 0;

	const list = ["apple" /* , "peach", "pears", "orange", "banana", "lemon", "kiwis" */];
	const solution = list[Math.floor(Math.random() * list.length)];

	function enterLetter(event: KeyboardEvent) {
		if (event.key === "Backspace") {
			words[row] = words[row].slice(0, -1);
		} else if (words[row]?.length >= solution.length) {
			submitGuess(words[row]);
		} else if (event.key.match("^[A-Za-z]$")) {
			words[row] = [...(words[row] ?? []), event.key.toUpperCase()];
		}
	}

	function submitGuess(word: string[]) {
		if (word.join("").toLowerCase() === solution) {
			alert("correct");
			if (row + 1 < height) {
				row++;
			} else {
				alert("start over");
				row = 0;
				words[row] = [];
			}
		} else {
			console.log(word.join("").toLowerCase(), solution);
		}
	}

	const width = solution.length;
	const height = width + 1;
</script>

<svelte:window on:keydown={enterLetter} />
<grid>
	{#each new Array(height) as _, i}
		<row>
			{#each new Array(width) as _, j}
				{#if i <= row}
					<Letter {solution} word={words[i]?.join("")} letter={words[i]?.[j] ?? ""} />
				{:else}
					<Letter {solution} word={""} letter={""} />
				{/if}
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
