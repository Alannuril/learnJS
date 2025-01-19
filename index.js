document.addEventListener("DOMContentLoaded", function() {
    const resultDiv = document.getElementById("result");
    const playerScoreSpan = document.getElementById("playerScore");
    const computerScoreSpan = document.getElementById("computerScore");
    const choices = document.querySelectorAll(".choice");
    const roundDiv = document.getElementById("round");
    const maxRounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 0;

    function getComputerChoice() {
        const randomValue = Math.floor(Math.random() * 3);
        if (randomValue === 0) {
            return "rock";
        } else if (randomValue === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    choices.forEach(choice => {
        choice.addEventListener("click", function() {
            if (currentRound < maxRounds) {
                const playerChoice = this.id; // Mengambil ID gambar yang diklik
                const computerChoice = getComputerChoice();

                resultDiv.textContent = `Anda memilih: ${playerChoice}, Komputer memilih: ${computerChoice}.`;

                // Tentukan pemenang
                if (playerChoice === computerChoice) {
                    resultDiv.textContent += " Hasil: Seri!";
                } else if (
                    (playerChoice === "rock" && computerChoice === "scissors") ||
                    (playerChoice === "paper" && computerChoice === "rock") ||
                    (playerChoice === "scissors" && computerChoice === "paper")
                ) {
                    playerScore++;
                    playerScoreSpan.textContent = playerScore;
                    resultDiv.textContent += " Hasil: Anda Menang!";
                } else {
                    computerScore++;
                    computerScoreSpan.textContent = computerScore;
                    resultDiv.textContent += " Hasil: Komputer Menang!";
                }

                currentRound++;
                roundDiv.textContent = `Ronde: ${currentRound}/${maxRounds}`;

                // Jika sudah mencapai ronde maksimum, tampilkan hasil akhir
                if (currentRound === maxRounds) {
                    setTimeout(() => {
                        if (playerScore > computerScore) {
                            resultDiv.textContent = "Anda adalah pemenang keseluruhan!";
                        } else if (playerScore < computerScore) {
                            resultDiv.textContent = "Komputer adalah pemenang keseluruhan!";
                        } else {
                            resultDiv.textContent = "Permainan berakhir seri!";
                        }
                    }, 600); // Delay sedikit sebelum menampilkan hasil akhir
                }
            }
        });
    });

    // Event listener untuk tombol reset
    document.getElementById("resetButton").addEventListener("click", function() {
        playerScore = 0;
        computerScore = 0; 
        currentRound = 0; 
        playerScoreSpan.textContent = playerScore; 
        computerScoreSpan.textContent = computerScore; 
        resultDiv.textContent = "No result yet"; 
        roundDiv.textContent = `Ronde: ${currentRound}/${maxRounds}`; 
    });
});