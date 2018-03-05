import Ember from "ember";

const links = {
    22: "https://codingblocks.com/courses/online/android-app-development.html",
    25: "https://codingblocks.com/courses/online/java.html",
    18: "https://codingblocks.com/courses/online/web-development-nodejs.html",
    17: "https://codingblocks.com/courses/competitive-online.html",
    27: "https://codingblocks.com/courses/competitive-online-study-material.html",
    19: "https://codingblocks.com/courses/online/c++.html",
    23: "https://codingblocks.com/courses/online/c++.html",
    26: "https://codingblocks.com/courses/online/c++.html"
}

export function widgetLinkForCourse (courseId) {
    return links[courseId]
}

export default Ember.Helper.helper(widgetLinkForCourse)