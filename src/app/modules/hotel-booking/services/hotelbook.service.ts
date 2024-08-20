import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelbookService {

  constructor() { }

  locations = {
    Visakhapatnam: [
          { 
             id:1,
             hotelName: "Novotel",
             hotelImg: "https://lh3.googleusercontent.com/p/AF1QipMr85hmhGvFSY-luXnrOfjOxFldEaZ-ByR5ZJL7=s1360-w1360-h1020", 
             status: "Available",
             about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous livingmore",
             price:1270,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
  
           },
          { 
            id:2,
            hotelName: "Radisson", 
            hotelImg: "https://media.radissonhotels.net/image/radisson-blu-resort-vishakhapatnam/exterior/16256-126787-f72717211_4k.jpg?impolicy=GalleryLightboxFullscreen", 
            status: "Not-Available",
            about:"Experience a delightful stay at our newly constructed, luxurious 1 BHK air-conditioned homestay situated in a prime location. Our expansive apartments feature.",
             price:2300, 
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
          },
          { 
            id:3,
            hotelName: "Dolphin", hotelImg: "https://pix8.agoda.net/hotelImages/111387/-1/84e462df50fb9145345522266ed9abc4.jpg?ca=0&ce=1&s=1024x", status: "Available" ,
            about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous living.",
             price:2500,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
          },
          { 
            id:4,
            hotelName: "Daspalla", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPi-dEGrdOs1L2hqZoKWEvAR693UvPld4TVkAJl=s1360-w1360-h1020", status: "Available",
            about:"Stay with us at our brand new, luxurious 3 BHK, air-conditioned homestay in a prime location. Our spacious apartments offer a large living and dining area, as well as comfortable bedrooms. We are conveniently located near restaurants, cafes, and a supermarket and are easily accessible from the airport and major highways. Come and enjoy a fun-filled stay with us.",
             price:1200,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
           }
          
      ],
      Vizianagaram: [
        { 
          id:5,
          hotelName: "SVN Lake palace",
           hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPm_Hdj0np778QtPP_Ql0pxHUD96szQyhXOnOzP=s1360-w1360-h1020",
            status: "Available",
            about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous livingmore",
            price:880,
            email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
            roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
          },
        {
          id:6,
          hotelName: "Vytla", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipODvnGGVOC8foGZjuaVHBFrPC5lnQ_k9wI3U7B4=s1360-w1360-h1020", status: "Not-Available",
          about:"Experience a delightful stay at our newly constructed, luxurious 1 BHK air-conditioned homestay situated in a prime location. Our expansive apartments feature.",
             price:2700,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
         },
        { 
          id:7,
          hotelName: "Woodland", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPm_Hdj0np778QtPP_Ql0pxHUD96szQyhXOnOzP=s1360-w1360-h1020", status: "Available",
          about:"Stay with us at our brand new, luxurious 3 BHK, air-conditioned homestay in a prime location. Our spacious apartments offer a large living and dining area, as well as comfortable bedrooms. We are conveniently located near restaurants, cafes, and a supermarket and are easily accessible from the airport and major highways. Come and enjoy a fun-filled stay with us.",
             price:1980,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
         },
      ],
      Srikakulam: [
        { 
          id:8,
          hotelName: "Novotel", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipMr85hmhGvFSY-luXnrOfjOxFldEaZ-ByR5ZJL7=s1360-w1360-h1020", status: "Available",
          about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous livingmore",
             price:1570,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
         },
        { 
          id:9,
          hotelName: "Radisson", hotelImg: "https://media.radissonhotels.net/image/radisson-blu-resort-vishakhapatnam/exterior/16256-126787-f72717211_4k.jpg?impolicy=GalleryLightboxFullscreen", status: "Not-Available",
          about:"Experience a delightful stay at our newly constructed, luxurious 1 BHK air-conditioned homestay situated in a prime location. Our expansive apartments feature.",
             price:2600,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
         },
        { 
          id:10,
          hotelName: "Woodland", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPm_Hdj0np778QtPP_Ql0pxHUD96szQyhXOnOzP=s1360-w1360-h1020", status: "Available",
          about:"Stay with us at our brand new, luxurious 3 BHK, air-conditioned homestay in a prime location. Our spacious apartments offer a large living and dining area, as well as comfortable bedrooms. We are conveniently located near restaurants, cafes, and a supermarket and are easily accessible from the airport and major highways. Come and enjoy a fun-filled stay with us.",
             price:1890,
             email:"sales@pickurstay.com,pickurstay@gmail.com",
             contactNo:7036252018,
             roomsDetails:[
              {
                roomType:"single bed",
                maximumCapacity:3,
                totalNoOfRooms: 19,
                description:"Single  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
                epSingle:1600,
                epDouble:1900,
             },
             {
              roomType:"Deluxe room",
              maximumCapacity:2,
              totalNoOfRooms: 10,
              description:"Deluxe  rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
              epSingle:1800,
              epDouble:2700,
           },
           {
            roomType:"twin sharing",
            maximumCapacity:3,
            totalNoOfRooms: 10,
            description:"Twin sharing rooms are spacious  and comfortable with modern amenties  like airconditioning ,Tv with national channels ,wifi facilities.",
            epSingle:1670,
            epDouble:2300,
         },
            ]
         },
      ]
  };
  
}
