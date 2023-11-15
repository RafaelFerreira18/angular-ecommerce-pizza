import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { PizzaService } from 'src/app/services/pizza.service';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpParams } from '@angular/common/http';
import { FileHandler } from 'src/app/models/FileHandler.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-new-pizza',
  templateUrl: './add-new-pizza.component.html',
  styleUrls: ['./add-new-pizza.component.css']
})
export class AddNewPizzaComponent {
  addPizzaForm = this.addPizzaFormBuilder.group({
    pizzaName:'',
    description:'',
    price: 0,
    pizzaFile: ''
  });
  selectedFile: File = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  pizzaToPost:PizzaModel = {
    id: 0,
    pizzaName: '',
    description: '',
    price: 0,
    pizzaImg: {
      file: new File(["foo"], "foo.txt", {
        type: "text/plain",
      }),
      url: ''
    }
  }
  constructor(
    private addPizzaFormBuilder: FormBuilder, private pizzaService: PizzaService, private sanitizer: DomSanitizer
  ){}
  public onFileSelected(event: any) {
    if(event.target.files){
      const file = event.target.files[0];

      const fileHandle: FileHandler = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.pizzaToPost.pizzaImg = fileHandle;
    }
  }

  prepareFormData(pizza:PizzaModel): FormData{
    const formData = new FormData();
    formData.append(
      "pizza",
      new Blob([JSON.stringify(pizza)], {type: 'application/json'})
    )
    formData.append(
      "imageFile",
      pizza.pizzaImg.file,
      pizza.pizzaImg.file.name
    )
    return formData
  }
  addPizza(){
    this.pizzaToPost.id = 0
    this.pizzaToPost.pizzaName = String(this.addPizzaForm.value.pizzaName)
    this.pizzaToPost.description = String(this.addPizzaForm.value.description)
    this.pizzaToPost.price = Number(this.addPizzaForm.value.price) 
    const pizzaFormData = this.prepareFormData(this.pizzaToPost)
    console.log(this.pizzaToPost)
    this.pizzaService.postPizza(pizzaFormData).subscribe();
  }
}
