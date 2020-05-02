var budgetController = (function () {

})();

var UIController = (function () {
    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };
})();

var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get field input data

        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add item to budget controller
        // 3. Add item to UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });
})(budgetController, UIController);