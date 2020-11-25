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

$(function(){
    var listModel = function(courses){
        var self = this;
        // this is how you declare an observable array
        //observable array with courses passed in.
        self.courses = ko.observableArray(courses);
        self.newCourse = ko.observable("");
        self.addCourse = function(){
            //take the value that the person writes and push it into the array
            if(self.newCourse() !="") {
                self.courses.push(self.newCourse());
                self.newCourse("");
            }
            // user is clicking
            // you have to pass this when you have a new function 
        }
    }
    ko.applyBindings(new listModel(["C#","HTML5", "Visual Basic"]));
})