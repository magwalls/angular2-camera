import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    user: string;

    constructor() {
       this.user = "theUser";
    }
}