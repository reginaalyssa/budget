var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID from ID of last element incremented by 1
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new instance based on type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push the new item into our data structure
            data.allItems[type].push(newItem);

            // Return newly created item
            return newItem;
        }
    };

})();

var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
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
        var DOMStrings = UICtrl.getDOMStrings();

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

        // 2. Add item to budget controller
        budgetCtrl.addItem(input.type, input.description, input.value);

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
