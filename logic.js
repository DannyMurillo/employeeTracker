//Whenever a user clicks the submit-bid button
$("#submit-form").on("click", function() {

  // Get the input values
  var employeeName = $("#employee-name").val().trim();
  var employeeRole =$("#employee-role").val().trim();
  var employeeStartDate = $("#employee-start-date").val().trim();
  var employeeMonthlyRate = $("#employee-monthly-rate").val().trim();
  

    // Save the new form in Firebase
    database.ref("/employeeData").set({
      employeeName: employeeName,
      employeeRole: employeeRole,
      startDate: employeeStartDate,
      monthlyRate: employeeMonthlyRate,

          
    });

    // Log the new High Price
    console.log(employeeName);
    console.log(employeeRole);
    console.log(employeeStartDate);
    console.log(employeeMonthlyRate);

    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    employeeName = employeeName;
    employeeRole= employeeRole;
    

    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").text(bidderName);
    $("#highest-price").text("$" + bidderPrice);
    
  }
  else {

    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

