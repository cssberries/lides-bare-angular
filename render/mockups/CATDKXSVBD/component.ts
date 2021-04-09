
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'CATDKXSVBD',
    templateUrl: 'template.html',
    
    })
    export class CATDKXSVBD implements OnInit {
    constructor(
        private http: HttpClient,
        ) { }
    
    // myData: any;

    ngOnInit() {
        // this.http.get('assets/myData.json').subscribe((data) => {
        //     this.myData = data;
        // });
    }
}