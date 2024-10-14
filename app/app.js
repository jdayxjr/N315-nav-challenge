//import Swal from 'sweetalert2';
import { changePage } from "../model/model.js";

// import { checkSignIn } from "../model/model.js";



// this function is used to grab the hashtag and laod the correct page
function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("route", pageID);
    changePage(pageID);
}

// this function adds the listener to the window
function initSite() {
    $(window).on("hashchange", route);
    route();
}


$(document).ready(function () {
    //initListeners();
    //checkSignIn(initSite);
    initSite();


    //only use this way to develop the pageXOffset
    //changePage("games");
});