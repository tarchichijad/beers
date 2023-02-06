import Setting from '@/const/site-settings';
import ApiServices from './api.service';

class BeerService {
  getBeers = async (perPage: number, page: number, searchBeer: string): Promise<any> =>{
    return ApiServices.get(`${Setting.BASE_API_URL}?page=${page}&per_page=${perPage}${ searchBeer ? '&beer_name=' + searchBeer : '' }`)
      .then ( (response) => {
        return response.data;
      }).catch((error) =>{
        return error.response;
      });
  }

  getBeerDetails = async (beerId: string): Promise<any> =>{
    return ApiServices.get(`${Setting.BASE_API_URL}/${beerId}`)
      .then ( (response) => {
        return response.data;
      }).catch((error) =>{
        return error.response;
      });
  }
}

const BeerServiceInstance = new BeerService();

export default BeerServiceInstance;
