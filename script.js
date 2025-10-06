// 🔮 Fortune Teller Function
function fortuneTeller(name, age) {
  let fortune = "";

  // --- Name-based fortunes ---
  if (name.length > 7) {
    fortune += "will marry late in life. ";
  } else if (name.length < 5) {
    fortune += "will marry within a year. ";
  } else {
    fortune += "will encounter a once-in-a-lifetime opportunity. ";
  }

  if (name[0].toLowerCase() === 'r') {
    fortune += "will be rich. ";
  }

  if (name.toLowerCase().includes('i')) {
    fortune += "will fall in love this week. ";
  }

  // --- Age-based fortunes ---
  if (age < 18) {
    fortune += "will discover a new hidden talent soon.";
  } else if (age >= 18 && age <= 30) {
    fortune += "will start an exciting new chapter in life.";
  } else if (age > 30 && age <= 50) {
    fortune += "will enjoy great health and success.";
  } else {
    fortune += "will share their wisdom with younger generations.";
  }

  return `${name}, you ${fortune}`;
}

// 🧙 Function triggered by button
function showFortune() {
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);
  const result = fortuneTeller(name, age);
  document.getElementById('result').textContent = result;
  console.log(result);
}
