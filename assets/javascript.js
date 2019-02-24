var config = {
  apiKey: "AIzaSyBe3mNsWHc0hcOoeQL8rlj0j9kdh6oqqxY",
  authDomain: "schedulingapp-b9236.firebaseapp.com",
  databaseURL: "https://schedulingapp-b9236.firebaseio.com",
  projectId: "schedulingapp-b9236",
  storageBucket: "schedulingapp-b9236.appspot.com",
  messagingSenderId: "113794503519"
};
firebase.initializeApp(config);

let database = firebase.database();

$("#customerSaveButton").on("click", () => {
  let customerFirstName = $("#customerFirstName").val();
  let customerLastName = $("#customerLastName").val();
  let customerPhoneNumber = $("#customerPhoneNumber").val();
  let customerAltPhoneNumber = $("#customerAltPhoneNumber").val();
  let customerStreetAddress = $("#customerStreetAddress").val();
  let customerCityAddress = $("#customerCityAddress").val();
  let customerStateAddress = $("#customerStateAddress").val();
  let customerStreetAddress2 = $("#customerStreetAddress2").val();
  let customerCityAddress2 = $("#customerCityAddress2").val();
  let customerStateAddress2 = $("#customerStateAddress2").val();
  let customerStreetAddress3 = $("#customerStreetAddress3").val();
  let customerCityAddress3 = $("#customerCityAddress3").val();
  let customerStateAddress3 = $("#customerStateAddress3").val();
  let customerTime = $("#customerTime").val();
  let customerDate = $("#customerDate").val();
  let customerSuppliesNeeded = $("#customerSuppliesNeeded").val();
  let depositAmt = $("#depositAmt").val();
  let hourlyRate = $("#hourlyRate").val();
  let paymentMethodFB = $("#paymentMethod").val();

  database.ref().push({
    customerFirstName: customerFirstName,
    customerLastName: customerLastName,
    customerPhoneNumber: customerPhoneNumber,
    customerAltPhoneNumber: customerAltPhoneNumber,
    customerStreetAddress: customerStreetAddress,
    customerCityAddress: customerCityAddress,
    customerStateAddress: customerStateAddress,
    customerStreetAddress2: customerStreetAddress2,
    customerCityAddress2: customerCityAddress2,
    customerStateAddress2: customerStateAddress2,
    customerStreetAddress3: customerStreetAddress3,
    customerCityAddress3: customerCityAddress3,
    customerStateAddress3: customerStateAddress3,
    customerTime: customerTime,
    customerDate: customerDate,
    customerSuppliesNeeded: customerSuppliesNeeded,
    depositAmt: depositAmt,
    hourlyRate: hourlyRate,
    paymentMethodFB: paymentMethodFB

  });
});

// database.ref().on("child_added", function(childSnapshot) {

// });

// let jObject {[]};
let carrierSelected;
let paymentMethod;


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


$(".cellItem").on("click", function() {
  $(".carrierSelected").text(this.text);
  carrierSelected = this.text;
  });

$(".paymentMethod").on("click", function() {
  $("#paymentMethod").text(this.text);
  paymentMethod = this.text;
  });
  

