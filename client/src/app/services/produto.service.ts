import { Produto } from "./../models/Produto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {

  baseURL = 'http://localhost:1234/Produto/listar';
  
  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL);
  }

  cadastrar(Produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:1234/Produto/cadastrar', Produto);
  }

}