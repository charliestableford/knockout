console.log("in");

$(function() {
   var myViewModel = function(myCourse, myRating){
       this.course = ko.observable(myCourse);
       this.rating = ko.observable(myRating);
   }
});