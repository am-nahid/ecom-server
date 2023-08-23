const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  
    let hours = date.getHours();
    let AM = "AM";
    if (hours >= 12) {
      AM = "PM";
      hours = hours > 12 ? hours - 12 : hours;
    }
    // Add leading zero if hours is a single digit
    const formattedHours = hours.toString().padStart(2, '0');
  
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${formattedHours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${AM}`;
  
    return { formattedDate, formattedTime };
  };
  
  module.exports = formatDateTime;
  