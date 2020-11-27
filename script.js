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