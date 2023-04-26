import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from "@angular/router";
import { environment } from "../environments/environment";
import { Pagination } from "../data/pagination";
import { IDocument } from "../data/document";

@Injectable({ providedIn: 'root' })
export class DocumentService {
    constructor(
        private http: HttpClient
    ) {
    }
      
    get(total_per_page:number = 10 ) {
        let params = new HttpParams();
        params = params.append('total_per_page',total_per_page);
        return this.http.get<Pagination<IDocument>>(`${environment.apiUrl}/document`, { params: params });
    }

}