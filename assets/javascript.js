var config = {
    apiKey: "AIzaSyBe3mNsWHc0hcOoeQL8rlj0j9kdh6oqqxY",
    authDomain: "schedulingapp-b9236.firebaseapp.com",
    databaseURL: "https://schedulingapp-b9236.firebaseio.com",
    projectId: "schedulingapp-b9236",
    storageBucket: "",
    messagingSenderId: "113794503519"
  };
  firebase.initializeApp(config);

let carrierSelected;


let cellCarrier = {
ATT: "@txt.att.net",
TMobile: "@tmomail.net",
Verizon: "@vtext.com",
Sprint: "@messaging.sprintpcs.com",
Xfinity: "@vtext.com",
Virgin: "@vmobl.com",
Tracfone: "@mmst5.tracfone.com",
MetroPCS: "@mymetropcs.com",
BoostMobile: "@sms.myboostmobile.com",
Cricket: "@sms.cricketwireless.net",
RepublicWireless: "@text.republicwireless.com",
GoogleFi: "@msg.fi.google.com",
USCell: "@email.uscc.net",
Ting: "@message.ting.com",
ConsumerCellular: "@mailmymobile.net",
CSpire: "@cspire1.com",
PagePlus: "@vtext.com"
}

// $(document).on("click", "#addEmployeeModalLabel" function() {

  $(".cellItem").on("click", function() {
    $(".carrierSelected").text(this.text);
    carrierSelected = this.text;
    });
  
  // });
