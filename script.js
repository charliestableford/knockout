console.log("in");

// $(function() {
//    var myViewModel = function(myCourse, myRating){
//        // everytime you are using this it is referencing the current function
//        this.course = ko.observable(myCourse);
//        this.rating = ko.observable(myRating);
//        // this new funciton has its own this. it is referencing the funciton it is in not the one above. 
//        this.courseResult = ko.computed(function(){
//             return "The course" + this.course() + "got a rating of" + this.rating();
//        }, this);
//    }
//    ko.applyBindings(new myViewModel("Knockout Js", 9));
// });

// $(function(){
//     var listModel = function(courses){
//         var self = this;
//         // this is how you declare an observable array
//         //observable array with courses passed in.
//         self.courses = ko.observableArray(courses);
//         self.newCourse = ko.observable("");
//         self.addCourse = function(){
//             //take the value that the person writes and push it into the array
//             if(self.newCourse() !="") {
//                 self.courses.push(self.newCourse());
//                 self.newCourse("");
//             }
//             // user is clicking
//             // you have to pass this when you have a new function 
//         }
//     }
//     ko.applyBindings(new listModel(["C#","HTML5", "Visual Basic"]));
// })

// $(function(){
//     var myViewModel = function(price, quantity){
//         this.itemPrice = ko.observable(price);
//         this.quantity = ko.observable(quantity);
//         this.totalPrice = ko.computed({
//             read: function(){
//                 return "$" + (this.itemPrice() * this.quantity()).toFixed(2);
//             }, 
//             write: function(value){
//                 value = parseFloat(value.replace(/[^\.\d]/g,""));
//                 //if the value after pasring is not a num make it zero otherwise make it zero.
//                 value = isNaN(value) ? 0 : value;
//                 // () used because it is like a funciton call
//                 var tempPrice = value/ this.quantity();
//                 this.itemPrice(tempPrice);

//             }, 
//             //this is the owner of the viewModel
//             owner: this
//         })
//     }

//     ko.applyBindings(new myViewModel(15.00, 9));
// });

// $ (function(){
//     var myViewModel = function(){
//         this.showMessage = ko.observable(false);
//     }
//     ko.applyBindings(new myViewModel());
// })

// $(function(){
//     var myViewModel = {
//         participant: ko.observable()    
//     };
//     myViewModel.participant("everyone");
//     ko.applyBindings(myViewModel);
// })

// $(function() {
//     var myViewModel = {
//         participant: ko.observable()
//     }
//     myViewModel.participant("<u><b>everyone</b></u>");
//     ko.applyBindings(myViewModel);
// })

// $(function(){
//     var myViewModel = function(){
//         this.grade = ko.observable(69);
//     }
//     ko.applyBindings(new myViewModel());
// })

// $(function(){
//     $(function(){
//         var myViewModel = function(){
//             this.grade = ko.observable(69)
//             this.isComplex = ko.observable(false)
//         }
//         ko.applyBindings(new myViewModel());
//     })
// })

// $(function(){
//     var myViewModel = function(){
//         this.source = ko.observable("imgs/cat.png"),
//         this.info = ko.observable("Nice cat!")
//     }
//     ko.applyBindings(new myViewModel());
// }) 

// $(function(){
//     var myViewModel = function(){
//         this.showMessage = ko.observable(false)
//     }
//     ko.applyBindings(new myViewModel());
// })

// $(function(){
//     ko.applyBindings({
//         name: "James",
//         course: {
//             name: "Intro to programming", 
//             grade: 89
//         }
//     })
// })

// $(function(){
//     ko.applyBindings({
//         students: [
//             {firstName: "Kelly", lastName: "Jack", grade: "A"}, 
//             {firstName: "Tim", lastName: "Zoodle", grade: "A"}, 
//             {firstName: "Linda", lastName: "BabyBoy", grade: "A"}

//         ]
//     });
// });

// $(function(){
//     var student = function(first, last, grade){
//         this.firstName = first;
//         this.lastName = last;
//         this.grade = grade;
//     }
//     var students = [
//         new student('Jill', 'Sexton', 'A'), 
//         new student('Zac', 'ZoodleHuman', 'A'), 
//         new student('Lee', 'Baba', 'A'), 
//         new student('Julia', 'Hoopy', 'A'), 
//     ]
//     var myViewModel = new function(){
//         var self = this;
//         self.students = ko.observableArray(students);
//         self.addStudent = function(){
//             self.students.push(new student('Place', 'Holder', 'A'));
//         }
//     }
//     ko.applyBindings(myViewModel);
// })


// $(function(){
//     ko.applyBindings({
//         publishers: [
//             {
//                 name: "APress",
//                 books: [{
//                     title: "Pro HTML 5", 
//                     authors: [{firstName: "James", lastName: "Wood"}]
//                 },
//                 {
//                         title: "Pro C#", 
//                         authors: [{firstName: "Lisa", lastName: "Yanks"}]
//                     }]
//             },
//             {
//                 name: "Wiley",
//                 books: [{
//                     title: "Javascript", 
//                     authors: [{firstName: "Tim", lastName: "Allem"}]
//                 },
//                 {
//                         title: "Knockout JS", 
//                         authors: [{firstName: "Billy", lastName: "Bob"}]
//                     }]
//             },

//         ]
//     })
// })

// $(function(){
//     var viewModel = {
//         counter: ko.observable(0),
//         incrementCounter: function(){
//             var previousCounter = this.counter()
//             this.counter(previousCounter+1);
//         }
//     }
//     ko.applyBindings(viewModel);
// })

// $(function(){
//     var myViewModel = {
//         definitionEnabled: ko.observable(false),
//         showDefinition: function(){
//             this.definitionEnabled(true)
//         },
//         hideDefinition: function(){
//             this.definitionEnabled(false)
//         }
//     }
//     ko.applyBindings(myViewModel);
// })

// $(function(){
//     var viewModel = {
//         // two properties - accepted conditions 
//         acceptedConditions: ko.observable(false),
//         firstName: ko.observable("")
//     }
//     ko.applyBindings(viewModel);
// })

// $(function (){
//     function libViewModel(lib){
//         this.library = ko.observable(lib),
//         this.editing=  ko.observable(false),
//         this.edit = function(){
//             // when the funciton is triggered we will allow editing
//             this.editing(true);
//         }

//     }
//     ko.applyBindings(libViewModel("jQuery"));
// });

// $(function(){
//     var viewModel = {
//         likeJS: ko.observable(false), 
//         JSLibraries: ko.observableArray(["Knockout_JS", "jQuery", "jQuery_UI"])
//     }
//     ko.applyBindings(viewModel);
// })

// $(function(){
//     var viewModel= {
//         availableCourses: ko.observableArray(["C#", "JQuery", "Knockout JS", "Jquery UI"]),
//         selectedCourse: ko.observable()
//     }
//     ko.applyBindings(viewModel);
// })

// $(function(){
//     var viewModel = {
//         availableCourses: ko.observableArray(['C#', 'jQuery', 'Knockout JS', 'jQuery UI', 'Visual Basic.NET', 'Java', 'JavaScript']),
//     chosenCourses: ko.observableArray()
//     }
//     ko.applyBindings(viewModel);
// });

$(function () {

    ko.bindingHandlers.slideVisible = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here
            var value = ko.unwrap(valueAccessor()); // Get the current value of the current property we're bound to
            $(element).toggle(value); // jQuery will hide/show the element depending on whether "value" is true or false
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever the associated observable changes value.
            // Update the DOM element based on the supplied values here.

            // First get the latest data that we're bound to
            var value = valueAccessor(),
                allBindings = allBindingsAccessor();

            // Next, whether or not the supplied model property is observable, get its current value
            var valueUnwrapped = ko.unwrap(value);

            // Grab some more data from another binding property
            var duration = allBindings.duration || 400; // 400ms is default duration unless otherwise specified

            // Now manipulate the DOM element
            if (valueUnwrapped == true)
                $(element).slideDown(duration); // Make the element visible
            else
                $(element).slideUp(duration);   // Make the element invisible
        }
    };

    var BookViewModel = {
        name: 'APress',
        book: 'Pro JavaScript',
        price: 49.99,
        showBookDetail: ko.observable(false)
    }
    
    ko.applyBindings(BookViewModel);
});
