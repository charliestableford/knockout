console.log("in");

$(function() {
   var myViewModel = function(myCourse, myRating){
       // everytime you are using this it is referencing the current function
       this.course = ko.observable(myCourse);
       this.rating = ko.observable(myRating);
       // this new funciton has its own this. it is referencing the funciton it is in not the one above. 
       this.courseResult = ko.computed(function(){
            return "The course" + this.course() + "got a rating of" + this.rating();
       }, this);
   }
   ko.applyBindings(new myViewModel("Knockout Js", 9));
});