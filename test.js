var d = datstring;
var date = new date(datestring);
var sting = date.getMonth() + date.getDay() + ", " + date.getYear();

$("#div").Brss(
    {
        url: "rss feed url",
        Dateformat: "aussie",
        customDate: "m y y ",
        template: "",
        image: true|false,
        title: "",
        video: "",
        
    });


$.fn.extend(
    Brss: function(object){
        if(object.Dateformat == "" || object.Dateformat == null){
            object.Dateformat = "defaulttimestamp";
        }
        if(object.template == "" || object.template == null){
            object.template = "defaultTemplate";
        }
        if(object.image == "" || object.image == null){
            object.image = false;
        }
        if(object.video == "" || object.video == null){
            object.video = false;
        }
        somefunction(object){
            do something with url to get
        }
    
    });
}