<script lang="ts">
	import Grid from "./Grid.svelte";

	let word = [];

	let solution = "apple";
	let list = ["apple", "peach", "pears", "orange", "banana", "lemon", "kiwis"];

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
</script>

<svelte:window on:keydown={enterLetter} />
<main>
	<Grid {word} {solution} />
</main>
