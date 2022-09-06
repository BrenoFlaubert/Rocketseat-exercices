const questions = [
    "oque aprendi hoje?",
    "oque me deixou aborrecido?",
    "oque eu poderia fazer para melhorar?",
    "oque me deixou feliz hoje?",
    "quantas pessoas eu ajudei hoje?"
]

const ask = ( index = 0 ) => {
    return process.stdout.write("\n\n" + questions[index] + " > ")
}
ask()

const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
   console.log(`
   Bacana Breno!

   O que você aprendeu hoje foi:
   ${answers[0]}

   O que te aborreceu e voce poderia melhorar foi:
   ${answers[1]}

   O que te deixou feliz hoje foi:
   ${answers[2]}

   Voce ajudou ${answers[3]} pessoas hoje!!

   Volte amanhã para mais reflexôes
   `) 
})