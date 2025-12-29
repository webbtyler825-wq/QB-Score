// Sample QB data (replace with API call)
const qbData = [
  { name: "Patrick Mahomes", team: "KC", yards: 4100, tds: 35, ints: 11, completion: 67.2 },
  { name: "Josh Allen", team: "BUF", yards: 4403, tds: 38, ints: 15, completion: 66.1 },
  { name: "Lamar Jackson", team: "BAL", yards: 3670, tds: 28, ints: 8, completion: 64.6 },
  { name: "Dak Prescott", team: "DAL", yards: 4260, tds: 36, ints: 9, completion: 69.1 },
  { name: "Jalen Hurts", team: "PHI", yards: 3850, tds: 31, ints: 10, completion: 65.0 }
];

// Custom QB score formula
// Simple example: (TDs*5 + Yards/25 + Comp%) - INTs*10
function calculateQBScore(qb) {
  return ((qb.tds * 5) + (qb.yards / 25) + qb.completion - (qb.ints * 10)).toFixed(2);
}

// Populate table
function renderTable(data) {
  const tbody = document.querySelector("#qbTable tbody");
  tbody.innerHTML = "";

  data.forEach(qb => {
    const score = calculateQBScore(qb);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${qb.name}</td>
      <td>${qb.team}</td>
      <td>${qb.yards}</td>
      <td>${qb.tds}</td>
      <td>${qb.ints}</td>
      <td>${qb.completion}%</td>
      <td><strong>${score}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

// Simulate API call on button click
document.getElementById("loadData").addEventListener("click", () => {
  renderTable(qbData);
});
