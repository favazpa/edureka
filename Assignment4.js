console.log("Assignment 4 .......");


var ratingData = [
    {restaurant: 'KFC', rating: 5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating :3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
  
    console.log('this is the given array',ratingData)

    var averageData = [];   // array which will store the average data
    var copyOfRatingData = ratingData;   // copy of array ratingData 
    var ratingMoreThanFour = [];    // array which will store restaurants with more than rating of 4



    // Questrion 1

    copyOfRatingData.forEach((element,index) => {
            let restaurant = element.restaurant,
            averageRating = element.rating,
            count = 1;
            for (let i = index + 1; i < copyOfRatingData.length; i++){
                if (restaurant === copyOfRatingData[i].restaurant){
                    averageRating += copyOfRatingData[i].rating;
                    count ++;
                    ratingData.splice(i,1);
                }
            } 
            averageRating = averageRating/count; 
            averageData.push({restaurant : restaurant, averageRating : averageRating});
    });
    console.log('this is the avarage rating data of every restaurant',averageData);




// Question 2

    averageData.forEach(element => {
            if(element.averageRating >4 )
            {
                ratingMoreThanFour.push(element);
            }
    });

    console.log('this is the restaurants who has more than 4 rating',ratingMoreThanFour);