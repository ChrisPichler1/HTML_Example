/*This is our wolfcreek.js file that defines any functions in Javascript. It is referenced
by all 16 HTML pages so far, and currently contains 3 functions. */

/*
Class: COSC 231.10
Name:  Chris Pichler
EID:   E02760792
Lab:   04 (Part 04)
Date:  2023-10-28 SAT T 23:59:00 Z-04:00

Requires: A web browser that can run Javascript, read HTML code, and that this file is in
a directory called "js" that holds the other HTML pages, and a directory called "css" that
holds a file called "wolfcreek.css"
*/

//This function is called print_stars() and will print 10 *s to the console when called
function print_stars() {
    console.log("**********");
}

/*This function showhide_table takes one parameter, elt, which is a show/hide button
whose job is to show or hide the table when clicked
*/
function showhide_table(elt){
    //This is used for debugging purposes
    print_stars();
    console.log("DEBUG - Before: " + elt.innerHTML);
    console.log("DEBUG - ID: " + elt.id);

    /*btn = elt's ID, div = the div right after the button is declared, table = the table
    inside div that holds the table of data, and label = the innerHTML of the button passed
    in the parameter list
    */
    let btn = elt.id;
    let div = elt.nextElementSibling;
    let table = div.children[2];
    let label = elt.innerHTML;

    //If the table is showing, the button should say "hide table", and hide the table when clicked
    if(label == "Show Table"){
        elt.innerHTML = "Hide Table";
        table.style.visibility = "visible";
    }
    //If the table is hidden, the button should say "show table", and show the table when clicked
    else{
        elt.innerHTML = "Show Table";
        table.style.visibility = "hidden";
    }
}

/*This is the showhide_nav_menu button that takes in one parameter, a show/hide button, and 
either shows or hides the navigation menu at the beginning of the 12 HTML data pages
*/
function showhide_nav_menu(elt){
    //This is used for debugging purposes
    print_stars();
    console.log("DEBUG - After: " + elt.innerHTML);

    /* btn = the button's ID, navbar = the navbar which is right after the button, the label
    is the button's innerHTML, and btn_parent is the parent of the button
    */
    let btn = elt;
    let navbar = elt.nextElementSibling;
    let label = elt.innerHTML;
    let btn_parent = elt.btn_parent;

    //The button says "show menu", so hide the menu when clicked
    if(label == "Show Menu"){
        btn.innerHTML = "Hide Menu";
        navbar.style.visibility = "visible";
        btn_parent.style.backgroundColor = "#989A98";//#navmenu_div
        btn_parent.style.opacity = .9;//#navmenu_div
        btn_parent.style.border = "1px solid grey";//#navmenu_div
        btn.style.backgroundColor = "#a07574 ";
        btn.style.border = "1px solid #3f3f3f";
    }
    //The button says "hide menu", so show the menu when clicked
    else{
        btn.innerHTML = "Show Menu";
        navbar.style.visibility = "hidden";
        btn_parent.style.backgroundColor = "transparent";
        btn_parent.style.border = "0";//#navmenu_div
        btn_parent.style.opacity = 1;//#navmenu_div
        btn.style.backgroundColor = "#5f8a8b";//Steel Teal
    }

    /*This is the end of lab 4, part 4 */

}