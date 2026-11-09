const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  		const itemPrice=document.querySelectorAll(".price")
		let totalAmount=0
		itemsPrice.forEach((item)=>{
			totalAmount+=Number(itemPrice.innerText)
		})
	let row=document.createElement("tr");
	let data=document.createElement("td");
	data.innerText=totalAmount;
	row.appendChild(data);
	let table=document.querySelector("table");
	table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

