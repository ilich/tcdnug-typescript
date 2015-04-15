/// <reference path="jquery.d.ts" />
/// <reference path="knockout.d.ts" />

module TodoMVC {
    export enum Filter {
        All,
        Active,
        Completed
    }

    export class Note {
        isCompleted = ko.observable<boolean>();

        constructor(public text: string, isCompleted: boolean) {
            this.isCompleted(isCompleted);
        }
    }

    export class AppViewModel {
        // We do assignment this way because filter's value must be a string
        // to be able to use it in radio buttons binding
        filter = ko.observable(Filter[Filter.All]);

        currentNote = ko.observable('');

        todos: KnockoutObservableArray<Note> = ko.observableArray<Note>();

        filteredTodos = ko.computed(() => {
            var activeFilter = Filter[this.filter()];
            switch (activeFilter) {
                case Filter.Active:
                    return this.todos().filter((n) => {
                        return !n.isCompleted();
                    });

                case Filter.Completed:
                    return this.todos().filter((n) => {
                        return n.isCompleted();
                    });

                default:
                    return this.todos();
            }
        });

        totalTodos = ko.computed(() => {
            return this.todos().length;
        });

        activeTodos = ko.computed(() => {
            return this.todos().filter(function (note) {
                return !note.isCompleted();
            }).length;
        });

        add() {
            var text = $.trim(this.currentNote());
            if (text === '') {
                return;
            }

            var note = new Note(text, false);
            this.todos.push(note);
            this.currentNote('');
        }

        remove(note: Note) {
            this.todos.remove(note);
        }
    }
}

enum KeyCode {
    Enter = 13,
    Esc = 27
}

$(document).ready(function () {
    var app = new TodoMVC.AppViewModel();
    ko.applyBindings(app);

    $('#note').keyup(function (e) {
        if (e.keyCode == KeyCode.Esc) {
            app.currentNote('');
            return false;
        }

        if (e.keyCode == KeyCode.Enter) {
            app.add();
            return false;
        }

        return true;
    });
});


