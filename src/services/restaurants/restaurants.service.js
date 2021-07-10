import { mockImages, mocks } from './mock'
import camelize from 'camelize'


export const restaurantsRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject("not found")
        } 
            resolve(mock)
    })
}

export const restaurantsTransform = ({ results =[]}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        });

        return {
            ...restaurant,
            isOpeNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily : restaurant.business_status= "CLOSED_TEMPORARILY"
        }

    })
    return camelize(mappedResults)
}

// restaurantRequest()
//     .then(restaurantTransform)
//     .then((transformedResponse) => {
//         console.log(transformedResponse)
//     }).catch((error) =>{
//     console.log(error)
//     })
