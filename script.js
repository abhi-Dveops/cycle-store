function selectCycle(cycleName) {

    document.getElementById("cycle").value = cycleName;

    document.querySelector(".order-form").scrollIntoView({
        behavior: "smooth"
    });
}

function placeOrder() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let cycle = document.getElementById("cycle").value;
    let qty = document.getElementById("qty").value;

    if (name === "" || mobile === "" || cycle === "" || qty === "") {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("message").innerHTML =
        `Order Placed Successfully!<br>
         Customer: ${name}<br>
         Cycle: ${cycle}<br>
         Quantity: ${qty}`;

    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("cycle").value = "";
    document.getElementById("qty").value = "";
}
