var budgetController = (function() {

})();

var UIController = (function() {

    var DOMStrings = {
        inputType: '.add_type',
        inputDescription: '.add_description',
        inputValue: '.add_value',
        inputButton: '.add_btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOMStrings = UICtrl.getDOMStrings()

        document.querySelector(DOMStrings.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        // 1. Get field input data

        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add item to budget controller
        // 3. Add item to UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);


controller.init();
