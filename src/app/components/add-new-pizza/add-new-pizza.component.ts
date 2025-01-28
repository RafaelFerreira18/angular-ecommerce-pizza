import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PizzaService } from '../../services/pizza.service';
import { FileHandler } from '../../models/FileHandler.model';
import { PizzaModel } from '../../models/PizzaModel';

@Component({
  selector: 'app-add-new-pizza',
  templateUrl: './add-new-pizza.component.html',
  styleUrls: ['./add-new-pizza.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class AddNewPizzaComponent {
  constructor(
    private addPizzaFormBuilder: FormBuilder, private pizzaService: PizzaService, private sanitizer: DomSanitizer
  ){
    this.addPizzaForm = this.addPizzaFormBuilder.group({
      pizzaName:'',
      description:'',
      price: 0,
      pizzaFile: ''
    });
  }
  addPizzaForm: any;
  selectedFile: File = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  pizzaToPost: PizzaModel = {
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

  prepareFormData(pizza: PizzaModel): FormData {
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
  addPizza() {
    this.pizzaToPost.id = 0
    this.pizzaToPost.pizzaName = String(this.addPizzaForm.value.pizzaName)
    this.pizzaToPost.description = String(this.addPizzaForm.value.description)
    this.pizzaToPost.price = Number(this.addPizzaForm.value.price) 
    const pizzaFormData = this.prepareFormData(this.pizzaToPost)
    console.log(this.pizzaToPost)
    this.pizzaService.postPizza(pizzaFormData).subscribe();
  }
}
