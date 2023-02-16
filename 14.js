let sciCourses = ["Ethiopia","Albania","Europe"];
function checkCourses(courseArray, searchText) {
    return courseArray.filter(function (item) {
        return item.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
}
console.log(checkCourses(sciCourses, "E"));