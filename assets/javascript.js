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
  database.ref().push({
    customerFirstName: $("#customerFirstName").val(),
    customerLastName: $("#customerLastName").val(),
    customerPhoneNumber: $("#customerPhoneNumber").val(),
    customerAltPhoneNumber: $("#customerAltPhoneNumber").val(),
    customerStreetAddress: $("#customerStreetAddress").val(),
    customerCityAddress: $("#customerCityAddress").val(),
    customerStateAddress: $("#customerStateAddress").val(),
    // customerStreetAddress2: $("#customerStreetAddress2").val(),
    // customerCityAddress2: $("#customerCityAddress2").val(),
    // customerStateAddress2: $("#customerStateAddress2").val(),
    // customerStreetAddress3: $("#customerStreetAddress3").val(),
    // customerCityAddress3: $("#customerCityAddress3").val(),
    // customerStateAddress3: $("#customerStateAddress3").val(),
    customerTime: $("#customerTime").val(),
    customerDate: $("#customerDate").val(),
    customerSuppliesNeeded: $("#customerSuppliesNeeded").val(),
    depositAmt: $("#depositAmt").val(),
    hourlyRate: $("#hourlyRate").val(),
    paymentMethodFB: $("#paymentMethod").val()

  });
});

database.ref().on("child_added", function(childSnapshot) {
  let customerFirstName = childSnapshot.val().customerFirstName;
  let customerLastName = childSnapshot.val().customerLastName;
  let customerPhoneNumber = childSnapshot.val().customerPhoneNumber;
  let customerAltPhoneNumber =childSnapshot.val().customerAltPhoneNumber;
  let customerStreetAddress = childSnapshot.val().customerStreetAddress;
  let customerCityAddress = childSnapshot.val().customerCityAddress;
  let customerStateAddress = childSnapshot.val().customerStateAddress;
  // let customerStreetAddress2 = childSnapshot.val().customerStreetAddress2;
  // let customerCityAddress2 = childSnapshot.val().customerCityAddress2;
  // let customerStateAddress2 = childSnapshot.val().customerStateAddress2;
  // let customerStreetAddress3 = childSnapshot.val().customerStreetAddress3;
  // let customerCityAddress3 = childSnapshot.val().customerCityAddress3;
  // let customerStateAddress3 = childSnapshot.val().customerStateAddress3;
  let customerTime = childSnapshot.val().customerTime;
  let customerDate = childSnapshot.val().customerDate;
  let customerSuppliesNeeded = childSnapshot.val().customerSuppliesNeeded;
  let depositAmt = childSnapshot.val().depositAmt;
  let hourlyRate = childSnapshot.val().hourlyRate;
  let paymentMethodFB = childSnapshot.val().paymentMethodFB;

  let tr = $("<tr>").append(
    $("<td>").text(moment(customerDate).format("MMM Do YY")),
    $("<td>").text(customerFirstName),
    $("<td>").text(customerLastName),
    $("<td>").text(customerCityAddress)
  );
  $("<tr>").addClass("jobItem");
  $(".customerShortInfo").append(tr);
});

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
  

