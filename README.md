## Car Lease Calculator
## Approach
    HTML Structure:
        First I started by creating the html structure with every element which will be needed.
        Input elements of different types are used combined with min, max for restrictions to get the user data.
        The leasing section the total cost, down payment, monthly installment and interest rate. At the beggining I used mock data just to make the html structure.

    CSS Styling:
        Then I started to work with the styling, making it look as close as possible to the shown examples
        The responsiveness is achieved by using media query
        For the desktop view I used two columns and for the mobile view I changed it to one so it looks better on smaller screens.

    JavaScript Functionality:
        I saved all elements that I will be using in consts. 
        Then I started working on the calculate function which contains the main logic of the calculator.
        The function retrieves user inputs and performs the necessary calculations::
            Down Payment Amount: Calculated as a percentage of the car value.
            Loan Amount: The car value minus the down payment.
            Monthly Interest Rate: Derived from the annual interest rate divided by 12.
            Monthly Installment: Calculated using the annuity formula for amortizing loans.
            Total Leasing Cost: The sum of the total monthly installments and the down payment.
        Then I added the event listeners that call the calculate function everytime data is changed and make sure that
        the range and number input fields are showing the same data and chaging one of them makes changes to the other one too.
        

    Error Handling:
        After I made sure the calculation function was working I began working on the error handling which informs the user 
        if he enters incorrect data by displaying red error message and making the border of the input field red.
    
      
