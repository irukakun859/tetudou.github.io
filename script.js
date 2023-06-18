function generateRandomProblem() {
    const operations = ['+', '-', '×', '÷'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    let solution;
  
    switch (operation) {
      case '+':
        solution = num1 + num2;
        break;
      case '-':
        solution = num1 - num2;
        break;
      case '×':
        solution = num1 * num2;
        break;
      case '÷':
        solution = num1 / num2;
        break;
    }
  
    const problem = `${num1} ${operation} ${num2} = `;
    return { problem, solution };
  }
  
  function main() {
    const numProblems = 5;  // 問題数を設定します
  
    for (let i = 0; i < numProblems; i++) {
      const { problem, solution } = generateRandomProblem();
      console.log(`問題 ${i + 1}: ${problem}`);
      const userAnswer = parseFloat(prompt("答えを入力してください: "));
      
      if (isNaN(userAnswer)) {
        console.log("有効な数値を入力してください。\n");
        i--;  // 不正解としてカウントしないように、ループを1つ戻します
        continue;
      }
      
      if (userAnswer === solution) {
        console.log("正解です！\n");
      } else {
        console.log("不正解です。\n");
      }
    }
  }
  
  main();
  