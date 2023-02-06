import IIngredient from "@/interfaces/ingredient.interface";

export default interface IBeer {
  id: number,
  name: string,
  tagline: string,
  first_brewed: string,
  description: string,
  image_url: string,
  abv: number,
  ibu: number,
  target_fg: number,
  target_og: number,
  ebc: number,
  srm: number,
  ph: number,
  attenuation_level: number,
  volume: {
    value: number,
    unit: string,
  },
  boil_volume: Object,
  method: Object,
  ingredients: {
    malt: IIngredient[],
    hops: IIngredient[],
    yeast: string,
  },
  food_pairing: Array<string>,
  brewers_tips: string,
  contributed_by: string,
}