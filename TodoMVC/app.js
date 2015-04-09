/// <reference path="jquery.d.ts" />
/// <reference path="knockout.d.ts" />
var TodoMVC;
(function (TodoMVC) {
    (function (Filter) {
        Filter[Filter["All"] = 0] = "All";
        Filter[Filter["Active"] = 1] = "Active";
        Filter[Filter["Completed"] = 2] = "Completed";
    })(TodoMVC.Filter || (TodoMVC.Filter = {}));
    var Filter = TodoMVC.Filter;
    var Note = (function () {
        function Note(text, isCompleted) {
            this.text = text;
            this.isCompleted = ko.observable();
            this.isCompleted(isCompleted);
        }
        return Note;
    })();
    TodoMVC.Note = Note;
    var AppViewModel = (function () {
        function AppViewModel() {
            var _this = this;
            // We do assignment this way because filter's value must be a string
            // to be able to use it in radio buttons binding
            this.filter = ko.observable(Filter[0 /* All */]);
            this.currentNote = ko.observable('');
            this.todos = ko.observableArray();
            this.filteredTodos = ko.computed(function () {
                var activeFilter = Filter[_this.filter()];
                switch (activeFilter) {
                    case 1 /* Active */:
                        return _this.todos().filter(function (n) {
                            return !n.isCompleted();
                        });
                    case 2 /* Completed */:
                        return _this.todos().filter(function (n) {
                            return n.isCompleted();
                        });
                    default:
                        return _this.todos();
                }
            });
            this.totalTodos = ko.computed(function () {
                return _this.todos().length;
            });
            this.activeTodos = ko.computed(function () {
                return _this.todos().filter(function (note) {
                    return !note.isCompleted();
                }).length;
            });
        }
        AppViewModel.prototype.add = function () {
            var text = $.trim(this.currentNote());
            if (text === '') {
                return;
            }
            var note = new Note(text, false);
            this.todos.push(note);
            this.currentNote('');
        };
        AppViewModel.prototype.remove = function (note) {
            console.log(this);
            this.todos.remove(note);
        };
        return AppViewModel;
    })();
    TodoMVC.AppViewModel = AppViewModel;
})(TodoMVC || (TodoMVC = {}));
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Esc"] = 27] = "Esc";
})(KeyCode || (KeyCode = {}));
$(document).ready(function () {
    var app = new TodoMVC.AppViewModel();
    ko.applyBindings(app);
    $('#note').keyup(function (e) {
        if (e.keyCode == 27 /* Esc */) {
            app.currentNote('');
            return false;
        }
        if (e.keyCode == 13 /* Enter */) {
            app.add();
            return false;
        }
        return true;
    });
});
//# sourceMappingURL=app.js.map