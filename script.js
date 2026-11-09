
const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const itemPrice = document.querySelectorAll(".prices");

    let totalAmount = 0;

    itemPrice.forEach((item) => {
        totalAmount += Number(item.innerText);
    });

    const row = document.createElement("tr");

    const data = document.createElement("td");

    data.innerText = totalAmount;

    row.appendChild(data);

    const table = document.querySelector("table");

    table.appendChild(row);
};

// Calculate automatically when the page loads
getSum();

// Calculate again when the button is clicked
getSumBtn.addEventListener("click", getSum);
