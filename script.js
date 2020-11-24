console.log("in");

$(function() {
    var myViewModel = {
        course: 'knockout', 
        rating: 10
    }
    ko.applyBindings(myViewModel);
});