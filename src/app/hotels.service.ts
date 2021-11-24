import { Injectable } from '@angular/core';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels: Hotel[] = [
    new Hotel(1, 'El mouradi Africa', '../assets/hotels/el mouradi africa/africa1.jfif', 'Tunis', 120,3),
    new Hotel(2, 'Hasdrabal Thalasso Djerba', '../assets/hotels/hasdrabal thalasso Djerba/hasdrubal1.jfif', 'Djerba', 210,3),
    new Hotel(3, ' Bel Azur Thalasson&bangaloas', '../assets/hotels/hotel bel azur thalasson&bangaloas hammamet/thalasso1.jpg', 'Hamamet', 200,4),
    new Hotel(4, 'Iberostar selection royal el mansour ', '../assets/hotels/iberostar selection royal el mansour mahdia/iberostar1.jpg', 'Mahdia', 100,5),
    new Hotel(5, 'Mahdia Palace Thalasso', '../assets/hotels/mahdia palace thalasso/palace1.jpg', 'Mahdia', 220,5),
    new Hotel(6, 'Medina Belisaire ', '../assets/hotels/medina belisaire and thalasso hammamet/belisaire1.jpg', 'Hammamet', 100,2),
    new Hotel(7, 'The Penthouse ', '../assets/hotels/the penthouse/penthouse1.webp', 'Tunis', 170,2),
    new Hotel(8, 'Vincci Helios Beach', '../assets/hotels/vincci helios beach djerba/vincci1.jpg', 'Djerba', 130,2),
    new Hotel(8, ' Ulysse Palace Djerba Resort & Thalasso', '../assets/hotels/Ulysse Palace Djerba Resort & Thalasso/ulysse1.jpg', 'Djerba', 180,5)
  ];
  getHotel() {
    return this.hotels;
  }

  constructor() { }
}
