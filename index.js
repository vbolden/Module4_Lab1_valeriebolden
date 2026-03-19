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