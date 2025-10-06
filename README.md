# 🔮 Fortune Teller Using JavaScript

## 🎯 Objective
This project predicts a fun fortune based on the user's **name** and **age** using JavaScript functions, conditionals, and booleans.

---

## 💡 Features
- Uses `if` statements to create dynamic fortunes.  
- Combines name-based and age-based predictions.  
- Includes a simple **interactive frontend** using HTML and JavaScript.  
- Displays results both on the page and in the console.

---

## 🧠 How It Works
1. The user enters their **name** and **age**.  
2. The script checks for:
   - Name length  
   - First letter  
   - Presence of the letter “i”  
   - Age ranges  
3. Based on these conditions, a fortune is generated and shown on the page.

---

## 🖥️ How to Run
### Option 1: Run in Browser
1. Download or clone this repository.
2. Open `index.html` in any web browser.
3. Enter your name and age, then click **Tell My Fortune**.

### Option 2: Run in Console (for Programiz)
1. Copy the code from `script.js`.
2. Paste it into [Programiz JavaScript Online Compiler](https://www.programiz.com/javascript/online-compiler).
3. Replace the last lines with:
   ```javascript
   let name = prompt("Enter your name:");
   let age = parseInt(prompt("Enter your age:"));
   console.log(fortuneTeller(name, age));
