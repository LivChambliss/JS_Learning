const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 9;
  } else if (day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 9;
  } else if (day === 'sunday') {
    return 9;
  }
};

// this is testing the inputs. This will print 9
// console.log(getSleepHours('sunday'));

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
;

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

// testing the functions
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('You got a perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ('hour(s) more sleep than you needed this week.'));
  } else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }

}

calculateSleepDebt();
