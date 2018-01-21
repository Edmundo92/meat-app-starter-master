//criar uma interface

export interface Restaurant {

    id: string
    name: string
    category: string
    deliveryEstimate: string
    rating: number
    imagePath: string

}

/*

    Esta interface, vai trabalhar como um modelo dos tipos e quantidades de dados que um component deve receber.
    a interface Restaurant, vai estar como o tipo da variavel "restaurant" que se encontra no arquivo -> restaurant.model.ts

*/