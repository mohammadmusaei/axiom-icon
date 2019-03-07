import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AxiomIconLinecap, AxiomIconLinejoin } from './axiom-icon.component';

@Injectable({ providedIn: 'root' })
export class AxiomIconConfig {

    public stroke: string = '#000';
    public linecap: AxiomIconLinecap = 'round';
    public linejoin: AxiomIconLinejoin = 'round';
    public size: number = 28;
    public thickness: number = 2;
    public smartColor: boolean = true;
    public parent: Element;
    public refreshRequest: Subject<boolean>;

    constructor() {
        this.refreshRequest = new Subject<boolean>();
    }

    public refresh(parent?: Element): void {
        this.refreshRequest.next(true);
    }

}