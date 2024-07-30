
export interface RatesResponse{
  data:{
    dat:DatRates
    greenScreen:{
        networkRate:NetworkRates,
        predictedRate:NetworkRates
    }
  }
}

interface NetworkRates{
   rates:{
    confidenceLevel:number,
    distance:number,
    fuelRate:number,
    targetBuyRate:number
   }
}

interface DatRates {
    rates: {
      rateResponses: Array<{
        response: {
          rate: DatRate;
        };
      }>;
    };
  }

interface DatRate{
  
        averageFuelSurchargePerMileUsd:number,
        averageFuelSurchargePerTripUsd:number,
        perMile:{
            rateUsd:number
        }
        perTrip:{
            rateUsd:number
        }

}


export interface GreenScreenData{
    netWorkRatePath:any ,
    predictedRatePath:any,
    datRatePath:any,
    mileage:number,
    netTargetRate:number,
    fuelRate:number,
    predictTargetRate:number,
    netWorkTargetBuyRate:number,
    netWorkConfidenceLevel:number | string,
    greenScreenTargetBuyRate:number,
    greenScreenConfidenceLevel:number |string,
    greenScreenMileage:number,
    dat_average_rate:number,
    dat_rate_per_mile:number,
    datload_query_url:string
}
