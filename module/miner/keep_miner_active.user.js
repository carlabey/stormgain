// ==UserScript==
// @name         stormgain miner
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @include        https://app.stormgain.com/crypto-miner/
// @grant        none
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    //'use strict';
    //activity log.
    function log(message){
       console.log(message);
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    //https://www.codegrepper.com/code-examples/javascript/javascript+execute+function+after+element+load
    function runAfterElementExists(jquery_element,callback){
        console.log("RRRRRRR");
        var checker = window.setTimeout(function() {
            console.log("Button ",jquery_element);
            //if one or more elements have been yielded by jquery
            //using this selector
            console.log("BUTTONS COUNT ",jquery_element.length);
            if (jquery_element.length) {
                console.log("BUTTON LOADED!");

                //stop checking for the existence of this element
                clearInterval(checker);

                //call the passed in function via the parameter above
                callback();
            }else{
                console.log("BUTTON NOT LOADED YET!");
            }
        }, 5000); //I usually check 5 times per second
    }



$(document).ready(function(){

    log("loaded");
    //check if mining button is active. If so, click  the button.
    var mineButtonContent = $("div:contains('Mining 4 hours')");
    /**
    if(mineButtonContent.length>0){
        mineButtonContent.closest("button").click();
       log("mine button clicked");
    }else{
       log("no mine button!!!");
    }*/
    log("QQQQQQ");
    setTimeout(function(){
        let divsCount = $("div:contains('Mining 4 hours')").length;
        let logedOutDivsCount = $("#modal >div:contains('You have been logged out due to')").length;
        if(logedOutDivsCount >0){
            log("LOGGED OUT, reload the page to login!!!");
            window.location.reload(1);

        }



        console.log("Waited 10 seconds. Mine start Divs :", divsCount);
        if(divsCount>0){
          $("div:contains('Mining 4 hours')")[divsCount-1].closest("button").click();
          log("Clicked "+(divsCount)+ " div button");
        }else{
          log("No Mine Start Element");
        }
    },10000);

    /**runAfterElementExists($("div:contains('Mining 4 hours')")[0].closest("button"), function() {
        console.log("item loaded");
        $("div:contains('Mining 4 hours')")[0].closest("button").click();
    });
    */

    //do after click the mine button.
    if($("div:contains('Mining 4 hours')").length){
      $("div:contains('Mining 4 hours')")[0].closest("button").on("click",function(){
          console.log("Mine button clicked!!!");
      });
    }
  


    //refresh the page every X minutes.
    var min = 1000*60*5;
    var max = 1000*60*8;

    var timeOut = getRndInteger(min,max);
    log("reload in "+ timeOut+ " seconds");
    setTimeout(function(){
        log("reload");
      window.location.reload(1);
    },timeOut);


});

})();
