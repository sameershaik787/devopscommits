function calculate() {
    const m1 = Number(document.getElementById("mark1").value);
    const m2 = Number(document.getElementById("mark2").value);
    const m3 = Number(document.getElementById("mark3").value);

    const result = document.getElementById("result");

    const fields = [
        document.getElementById("mark1").value,
        document.getElementById("mark2").value,
        document.getElementById("mark3").value
    ];

    if (fields.some(mark => mark.trim() === "")) {
        result.textContent = "Please enter all three marks.";
        return;
    }

    if ([m1, m2, m3].some(mark => mark < 0 || mark > 100)) {
        result.textContent = "Marks must be between 0 and 100.";
        return;
    }

    const total = m1 + m2 + m3;
    const percentage = total / 3;
    const status = [m1, m2, m3].every(mark => mark >= 35)
        ? "Pass"
        : "Fail";

    result.textContent =
        `Total: ${total}/300 | Percentage: ${percentage.toFixed(2)}% | ${status}`;
}