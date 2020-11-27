import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl:'cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  Produto: Produto ={
    nome: "",
    codigoBarra: "",
    preco: 0,
    criadoEm:""
  }
  produtos: Produto[] = [];

  constructor(private router:Router, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar(): void{
    this.ProdutoService.cadastrar(this.Produto).subscribe(()=>{
      window.location.reload();
  });
}

  navigateToListProduto(): void{
    this.router.navigate([''])
  }


}
