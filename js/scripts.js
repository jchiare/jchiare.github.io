// get buttons
var use_button = document.querySelector('#use');
var drop_off_bike_button = document.querySelector('#drop');

// get text
var landing_page_text = document.querySelector('#landing');
var or_landing_page_text = document.querySelector('#or');
var button_landing_page_section = document.querySelector('#button-section');

function AfterLandingPageAction(){
    ShowElements(search_input_area);
    ShowElements(current_location_section);
    GetLocation();
}

// Click a button to get the party started
button_landing_page_section.addEventListener('click',function(e){
    if (e.target.id === use_button.id || e.target.id === drop_off_bike_button.id){
        HideObject(use_button);
        HideObject(drop_off_bike_button);
        HideObject(landing_page_text);
        HideObject(or_landing_page_text);
        AfterLandingPageAction();
    } 
})

window.onload = function(){
    GetStationHeaders();
    GetStationData();
};