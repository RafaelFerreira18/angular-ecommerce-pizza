import { Injectable } from '@angular/core';
import { FileHandler } from '../models/FileHandler.model';
import { PizzaModel } from '../models/PizzaModel';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImage(pizza: PizzaModel){
    const pizzaImage: any = pizza
    const imageBlob = this.dataURItoBob(pizzaImage.pizzaImage.picByte, pizzaImage?.type)
    const imageFile = new File([imageBlob], pizzaImage.name, {type: pizzaImage.type})

    const finalFileHandle: FileHandler = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    }
    pizza.pizzaImg = finalFileHandle;
    return pizza;
  }

  public dataURItoBob(picBytes: any, imageType: any){
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length)
    const int8Array = new Uint8Array(arrayBuffer)

    for(let i = 0; i < byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i)
    }

    const blob = new Blob([int8Array], {type:imageType})
    return blob;
  }
}
