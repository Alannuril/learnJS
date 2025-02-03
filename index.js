document.addEventListener("DOMContentLoaded", function () {
    const resultDiv = document.getElementById("result");
    const playerScoreSpan = document.getElementById("playerScore");
    const computerScoreSpan = document.getElementById("computerScore");
    const roundDiv = document.getElementById("round");
    const choices = document.querySelectorAll(".choice");
    const resetButton = document.getElementById("resetButton");

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    // Fungsi untuk mendapatkan pilihan komputer
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // Fungsi untuk memainkan satu ronde
    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();
        round++;
        roundDiv.textContent = `Round: ${round}`;

        // Tentukan hasil ronde
        if (playerSelection === computerSelection) {
            resultDiv.textContent = `It's a tie! Both chose ${playerSelection}.`;
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
            resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore++;
            resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        }

        // Perbarui skor
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;

        // Cek apakah ada pemenang
        if (playerScore === 5 || computerScore === 5) {
            announceWinner();
        }
    }

    // Fungsi untuk mengumumkan pemenang
    function announceWinner() {
        if (playerScore === 5) {
            resultDiv.textContent = "Congratulations! You won the game! 🎉";
        } else {
            resultDiv.textContent = "Sorry, the computer won the game. 😢";
        }
        disableButtons();
    }

    // Fungsi untuk menonaktifkan tombol setelah permainan selesai
    function disableButtons() {
        choices.forEach(button => {
            button.disabled = true;
        });
    }

    // Fungsi untuk mereset permainan
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        round = 0;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
        resultDiv.textContent = "No results yet!";
        roundDiv.textContent = `Round: ${round}`;
        choices.forEach(button => {
            button.disabled = false;
        });
    }

    // Tambahkan event listener ke tombol pilihan
    choices.forEach(button => {
        button.addEventListener("click", function () {
            playRound(this.id); // Menggunakan ID tombol sebagai pilihan pemain
        });
    });

    // Tambahkan event listener ke tombol reset
    resetButton.addEventListener("click", resetGame);
});