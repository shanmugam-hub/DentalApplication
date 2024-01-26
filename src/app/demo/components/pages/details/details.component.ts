import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './details.component.html'
})
export class DetailsComponent {

    name: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(){
        this.name = this.route.snapshot.params['name'];
        console.log(this.name);
    }
}
