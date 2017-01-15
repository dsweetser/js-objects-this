'use strict';

const mealObj = {
  name: 'Pantys McFaceface',
  bornOn: '2017-01-13',
  calorieTarget: 100,
  meals: [
    {
      title: 'dinner',
      date: '2017-01-13',
      description: 'veryveryvery-low calorie (diet) milk',
      calories: 2,
    },
    {
      title: '2:30 am snack',
      date: '2017-01-13',
      description: 'veryveryvery-low calorie (diet) milk',
      calories: 2,
    },
    {
      title: 'breakfast',
      date: '2017-01-13',
      description: 'veryveryvery-low calorie (diet) milk',
      calories: 4,
    },
  ],

  // takes a date and shows all calories eaten on that day
  caloriesEatenOn: function (queryDate) {
    let result = 0;
    for (let i = 0, max = mealObj.meals.length; i < max; i++) {
      if (this.meals[i].date === queryDate) {

        // add calories from this day to result
        result += this.meals[i].calories;
      }
    }

    // return the result
    return result;
  },

  // averages out daily calories without decimal
  avgDailyCalories: function () {
    let result = 0;

    //creates total calorie count
    for (let i = 0, max = this.meals.length; i < max; i++) {
      result = (this.meals[i].calories + result);
    }

    //finds total number of days
    let uniqueDays = {};
    let days = [];
    let allDays = [];

    //adds all days into a days []
    for (let i = 0, max = this.meals.length; i < max; i++) {
      days[i] = this.meals[i].date;
    }

    //pushes keys out of days into uniqueDays to remove duplicates
    // and then puts unique values into allDays
    for (let i = 0, max = days.length; i < max; i++) {
      let unique = days[i];
      uniqueDays[unique] = true;
      for (const key in uniqueDays) {
        allDays.push(key);
      }
    }

    //averages out the result
    return Math.floor(result/allDays.length);
  },

  onTrack: function () {
    if (this.caloriesEatenOn() <= this.calorieTarget){
      return true;      }
    },

};

module.exports = mealObj;
