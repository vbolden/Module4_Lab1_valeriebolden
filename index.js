// TASK 1

function formatFullName(firstName, lastName) {
    if (firstName === '') {
        return 'Invalid name input'
    }

    if (lastName === '') {
        return 'Invalid name input'
    }

    let firstNameCap = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    let lastNameCap = lastName.charAt(0).toUpperCase() + lastName.slice(1)

    return `${lastNameCap}, ${firstNameCap}`
}

console.log(formatFullName("john", "smith"))

// TASK 2

function calculateTotalCost(price, quantity, taxRate) {
    if (!(typeof price === 'number')) {
        return "Value for price is not a number";
    }

    if (!(typeof quantity === 'number')) {
        return "Value for quantity is not a number";
    }

    if (!(typeof taxRate === 'number')) {
        return "Value taxRate is not a number";
    }

    let totalCost = (price * quantity) * (1 + taxRate);
    return totalCost
}

console.log(calculateTotalCost(200, 3, 0.09))