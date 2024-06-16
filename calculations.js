document.addEventListener('DOMContentLoaded', function () {
    //getting all elements that contain values
    const carType = document.getElementById('car-type');
    const carValue = document.getElementById('car-value');
    const carValueRange = document.getElementById('car-value-range');
    const leasePeriod = document.getElementById('lease-period');
    const downPayment = document.getElementById('down-payment');
    const downPaymentRange = document.getElementById('down-payment-range');

    //getting elements on which data will be displayed
    const totalCostShow = document.getElementById('total-cost');
    const downPaymentShow = document.getElementById('down-payment-display');
    const monthlyInstallmentShow = document.getElementById('monthly-installment');
    const interestRateShow = document.getElementById('interest-rate');
    const carValueError = document.getElementById('car-value-error');
    const downPaymentError = document.getElementById('down-payment-error');

    function validateInputs() {
        let isValid = true;
        let validStyle = `border: 1px solid rgb(204, 204, 204);`;
        const carPrice = parseFloat(carValue.value);
        const downPaymentPercentage = parseFloat(downPayment.value);
        // checking if the values correct and displaying error if data is not correct!
        if (isNaN(carPrice) || carPrice < 10000 || carPrice > 200000) {
            carValueError.textContent = 'Please enter correct value between €10,000 and €200,000.';
            carValue.style.borderColor = "red";
            isValid = false;
        } else {
            //removing error text and making the input field in correct state
            carValueError.textContent = '';
            carValue.style = validStyle;
        }

        if (isNaN(downPaymentPercentage) || downPaymentPercentage < 10 || downPaymentPercentage > 50) {
            downPaymentError.textContent = 'Please correct down payment percentage between 10% and 50%.';
            downPayment.style.borderColor = "red";
            isValid = false;
        } else {
            downPaymentError.textContent = '';
            downPayment.style=validStyle;
        }

        return isValid;
    }
    function clearResult()
    {
        totalCostShow.textContent = `Total Leasing Cost: € -`;
        downPaymentShow.textContent = `Down Payment: € -`;
        monthlyInstallmentShow.textContent = `Monthly Installment: € -`;
        interestRateShow.textContent = `Interest Rate: - %`;
    }
    function calculate() {
        if (!validateInputs()) {
            //clearing the result when data is incorrect
            clearResult();
        return;
    }
        const carPrice = parseFloat(carValue.value);
        const downPaymentPercentage = parseFloat(downPayment.value);
        const downPaymentAmount = (downPaymentPercentage / 100) * carPrice;
        const loanAmount = carPrice - downPaymentAmount;
        const period = parseInt(leasePeriod.value);
        const interestRate = parseFloat(carType.value);

        //calculating monthlyInstallment using PMT formula and totalCost
        const monthlyInterestRate = interestRate / 100 / 12;
        const monthlyInstallment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -period));
        const totalCost = (monthlyInstallment * period) + downPaymentAmount;

        totalCostShow.textContent = `Total Leasing Cost: €${totalCost.toFixed(2)}`;
        downPaymentShow.textContent = `Down Payment: €${downPaymentAmount.toFixed(2)}`;
        monthlyInstallmentShow.textContent = `Monthly Installment: €${monthlyInstallment.toFixed(2)}`;
        interestRateShow.textContent = `Interest Rate: ${interestRate}%`;
    }
    //Calculating when one of the values is changed + connecting slider with text field
    carType.addEventListener('change', calculate);
    carValue.addEventListener('input', (e) => {
        carValueRange.value = e.target.value;
        calculate();
    });
    carValueRange.addEventListener('input', (e) => {
        carValue.value = e.target.value;
        calculate();
    });
    leasePeriod.addEventListener('change', calculate);
    downPayment.addEventListener('input', (e) => {
        downPaymentRange.value = e.target.value;
        calculate();
    });
    downPaymentRange.addEventListener('input', (e) => {
        downPayment.value = e.target.value;
        calculate();
    });
//makes the initial calculation
    calculate();
});