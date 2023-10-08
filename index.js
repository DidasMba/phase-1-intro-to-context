// Your code here

// Define a function to parse timestamp strings into date and time components.
function parseTimestamp(timestamp) {
    const [date, time] = timestamp.split(' ');
    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute] = time.match(/\d{2}/g).map(Number);
    return { year, month, day, hour, minute };
  }
  
  // Define a function to calculate working hours.
  function calculateWorkingHours(checkInTimestamp, checkOutTimestamp) {
    const checkIn = parseTimestamp(checkInTimestamp);
    const checkOut = parseTimestamp(checkOutTimestamp);
  
    // Calculate the total minutes worked.
    const minutesWorked = (checkOut.hour * 60 + checkOut.minute) - (checkIn.hour * 60 + checkIn.minute);
  
    // Convert minutes to hours and minutes.
    const hoursWorked = Math.floor(minutesWorked / 60);
    const minutesRemaining = minutesWorked % 60;
  
    return { hours: hoursWorked, minutes: minutesRemaining };
  }
  
  // Example usage:
  const checkInTimestamp = "2018-01-01 0800";
  const checkOutTimestamp = "2018-01-01 1800";
  const workingHours = calculateWorkingHours(checkInTimestamp, checkOutTimestamp);
  console.log(`Hours Worked: ${workingHours.hours} hours ${workingHours.minutes} minutes`);
  
