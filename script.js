function calculateGrade() {
  const marks = [];
  for (let i = 1; i <= 5; i++) {
    let mark = parseFloat(prompt(`Enter marks for Subject ${i}:`));
    while (isNaN(mark) || mark < 0 || mark > 100) {
      mark = parseFloat(prompt(`Invalid input. Enter valid marks (0–100) for Subject ${i}:`));
    }
    marks.push(mark);
  }

  const total = marks.reduce((acc, val) => acc + val, 0);
  const average = total / marks.length;
  let grade = "";

  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  document.getElementById("result").innerHTML = `
    <p>Total Marks: ${total}</p>
    <p>Average Marks: ${average.toFixed(2)}</p>
    <p>Grade: <strong>${grade}</strong></p>
  `;
}