<script lang="ts">
	import Letter from "./Letter.svelte";
	
	let word: string[] = [];

	let list = ["apple", "peach", "pears", "orange", "banana", "lemon", "kiwis"];
	let solution = list[Math.floor(Math.random() * list.length)];

	function enterLetter(event: KeyboardEvent) {
		if (event.key === "Backspace") {
			word = word.slice(0, -1);
		} else if (word.length >= solution.length) {
			submitGuess(word);
		} else if (event.key.match("^[A-Za-z]$")) {
			word = [...word, event.key.toUpperCase()];
		}
	}

	function submitGuess(word: string[]) {
		if (word.join("").toLowerCase() === solution) {
			alert("correct");
		} else {
			console.log(word.join("").toLowerCase(), solution);
		}
	}

	let width = solution.length;
	let height = width + 1;
</script>

<svelte:window on:keydown={enterLetter} />
<grid>
	{#each new Array(height) as _}
		<row>
			{#each new Array(width) as _, i}
				<Letter {solution} {word} letter={word[i] ?? ""}/>
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
