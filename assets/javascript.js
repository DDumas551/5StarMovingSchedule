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

let keyArr = [];

let secondButton = false;
let thirdButton  = false;


$("#customerSaveButton").on("click", () => {
  if((secondButton == false) && (thirdButton == false)){
    database.ref().push({
      customerFirstName: $("#customerFirstName").val(),
      customerLastName: $("#customerLastName").val(),
      customerPhoneNumber: $("#customerPhoneNumber").val(),
      customerAltPhoneNumber: $("#customerAltPhoneNumber").val(),
      customerStreetAddress: $("#customerStreetAddress").val(),
      customerCityAddress: $("#customerCityAddress").val(),
      customerStateAddress: $("#customerStateAddress").val(),
      customerStreetAddress2: "",
      customerCityAddress2: "",
      customerStateAddress2: "",
      customerStreetAddress3: "",
      customerCityAddress3: "",
      customerStateAddress3: "",
      customerTime: $("#customerTime").val(),
      customerDate: $("#customerDate").val(),
      customerSuppliesNeeded: $("#customerSuppliesNeeded").val(),
      depositAmt: $("#depositAmt").val(),
      hourlyRate: $("#hourlyRate").val(),
      paymentMethodFB: paymentMethod
    });
  }
  if((secondButton == true) && (thirdButton == false)){
    database.ref().push({
      customerFirstName: $("#customerFirstName").val(),
      customerLastName: $("#customerLastName").val(),
      customerPhoneNumber: $("#customerPhoneNumber").val(),
      customerAltPhoneNumber: $("#customerAltPhoneNumber").val(),
      customerStreetAddress: $("#customerStreetAddress").val(),
      customerCityAddress: $("#customerCityAddress").val(),
      customerStateAddress: $("#customerStateAddress").val(),
      customerStreetAddress2: $("#customerStreetAddress2").val(),
      customerCityAddress2: $("#customerCityAddress2").val(),
      customerStateAddress2: $("#customerStateAddress2").val(),
      customerStreetAddress3: "",
      customerCityAddress3: "",
      customerStateAddress3: "",
      customerTime: $("#customerTime").val(),
      customerDate: $("#customerDate").val(),
      customerSuppliesNeeded: $("#customerSuppliesNeeded").val(),
      depositAmt: $("#depositAmt").val(),
      hourlyRate: $("#hourlyRate").val(),
      paymentMethodFB: paymentMethod
    });
  }
  if((secondButton == true) && (thirdButton == true)){
    database.ref().push({
      customerFirstName: $("#customerFirstName").val(),
      customerLastName: $("#customerLastName").val(),
      customerPhoneNumber: $("#customerPhoneNumber").val(),
      customerAltPhoneNumber: $("#customerAltPhoneNumber").val(),
      customerStreetAddress: $("#customerStreetAddress").val(),
      customerCityAddress: $("#customerCityAddress").val(),
      customerStateAddress: $("#customerStateAddress").val(),
      customerStreetAddress2: $("#customerStreetAddress2").val(),
      customerCityAddress2: $("#customerCityAddress2").val(),
      customerStateAddress2: $("#customerStateAddress2").val(),
      customerStreetAddress3: $("#customerStreetAddress3").val(),
      customerCityAddress3: $("#customerCityAddress3").val(),
      customerStateAddress3: $("#customerStateAddress3").val(),
      customerTime: $("#customerTime").val(),
      customerDate: $("#customerDate").val(),
      customerSuppliesNeeded: $("#customerSuppliesNeeded").val(),
      depositAmt: $("#depositAmt").val(),
      hourlyRate: $("#hourlyRate").val(),
      paymentMethodFB: paymentMethod

    });
  }
});

database.ref().on("child_added", function(childSnapshot) {
  let customerFirstName = childSnapshot.val().customerFirstName;
  let customerLastName = childSnapshot.val().customerLastName;
  let customerPhoneNumber = childSnapshot.val().customerPhoneNumber;
  let customerAltPhoneNumber =childSnapshot.val().customerAltPhoneNumber;
  let customerStreetAddress = childSnapshot.val().customerStreetAddress;
  let customerCityAddress = childSnapshot.val().customerCityAddress;
  let customerStateAddress = childSnapshot.val().customerStateAddress;
  let customerStreetAddress2 = childSnapshot.val().customerStreetAddress2;
  let customerCityAddress2 = childSnapshot.val().customerCityAddress2;
  let customerStateAddress2 = childSnapshot.val().customerStateAddress2;
  let customerStreetAddress3 = childSnapshot.val().customerStreetAddress3;
  let customerCityAddress3 = childSnapshot.val().customerCityAddress3;
  let customerStateAddress3 = childSnapshot.val().customerStateAddress3;
  let customerTime = childSnapshot.val().customerTime;
  let customerDate = childSnapshot.val().customerDate;
  let customerSuppliesNeeded = childSnapshot.val().customerSuppliesNeeded;
  let depositAmt = childSnapshot.val().depositAmt;
  let hourlyRate = childSnapshot.val().hourlyRate;
  let paymentMethodFB = childSnapshot.val().paymentMethodFB;
  keyArr.push(childSnapshot.key);
 
  let tr = $("<tr>");
    tr.append(
    $("<td>").text(moment(customerDate).format("MMM Do YY")),
    $("<td>").text(customerFirstName),
    $("<td>").text(customerLastName),
    $("<td>").text(customerCityAddress)
  );
  tr.addClass("jobItem");
  tr.attr("data-id", childSnapshot.key);
  $(".customerShortInfo").append(tr);
});



let br = $("<br>");
let divRow = $("<div class='row'>");
let divRow1 = $("<div class='row addPad secondAdd1'>");
let divRow2 = $("<div class='row addPad secondAdd2'>");
let divRow3 = $("<div class='row addPad thirdAdd1'>");
let divRow4 = $("<div class='row addPad thirdAdd2'>");
let divCol = $("<div class='col'>");
let divCol1 = $("<div class='col col1'>");
let divCol2 = $("<div class='col col2'>");
let divCol3 = $("<div class='col col3'>");
let divCol4 = $("<div class='col col4'>");
let divCol5 = $("<div class='col col5'>");
let divCol6 = $("<div class='col col6'>");

let streetInput2 = $("<input type='text' class='form-control' id='customerStreetAddress2' aria-describedby='customerInfo' placeholder='2nd Street Address:'>");
let cityInput2 = $("<input type='text' class='form-control' id='customerCityAddress2' aria-describedby='customerInfo' placeholder='2nd City:'>");
let stateInput2 = $("<input type='text' class='form-control' id='customerStateAddress2' aria-describedby='customerInfo' placeholder='2nd State:'>");
let streetInput3 = $("<input type='text' class='form-control' id='customerStreetAddress3' aria-describedby='customerInfo' placeholder='3rd Street Address:'>");
let cityInput3 = $("<input type='text' class='form-control' id='customerCityAddress3' aria-describedby='customerInfo' placeholder='3rd City:'>");
let stateInput3 = $("<input type='text' class='form-control' id='customerStateAddress3' aria-describedby='customerInfo' placeholder='3rd State:'>");

$(".2ndAddress").on('click', function() {
  thirdAddBtn();
  secondAddTFs();
  return secondButton = true;
});

$(document).on('click', '.3rdAddress', function() {
  // thirdAddTFs();
  divCol4.append(streetInput3);
  divRow3.append(divCol4);

  divCol5.append(cityInput3);
  divCol6.append(stateInput3);
  divRow4.append(divCol5, divCol6);
  $(".addressContainer").append(divRow3, divRow4);
});

function thirdAddBtn() {
  let thirdAddBtn = $("<button type='button' class='btn btn-success 3rdAddress'>Third Address</button>");
  let newThirdBtn = divCol.append(thirdAddBtn);
  $(".addressButtonRow").append(newThirdBtn);
}

function secondAddTFs() {
  divCol1.append(streetInput2);
  divRow1.append(divCol1);

  divCol2.append(cityInput2);
  divCol3.append(stateInput2);
  divRow2.append(divCol2, divCol3);
  $(".addressContainer").append(divRow1, divRow2);
}

function thirdAddTFs() {
  divCol4.append(streetInput3);
  divRow3.append(divCol4);

  divCol5.append(cityInput3);
  divCol6.append(stateInput3);
  divRow4.append(divCol5, divCol6);
  $(".addressContainer").append(divRow3, divRow4);
}

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
  
$(".addEmpSaveBtn").on("click"), () => {
  let empNumber = $("#newEmpNumber").val();
  let empCarrier = $(".carrierSelected").val();
  database.ref().push({
    newEmpFirstName: $("#newEmpFirstName").val(),
    newEmpLastName: $("#newEmpLastName").val(),
    newEmpNumber: `${empNumber + '@' + empCarrier}`
  });
  console.log(empNumber + '@' + empCarrier);
}


console.log(keyArr);

