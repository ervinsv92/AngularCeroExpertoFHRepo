import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[ //los elementos de este array pueden ser consumidos desde otros modulos, de otra manera no se podria
        CounterComponent
    ]
})
export class CounterModule{

}