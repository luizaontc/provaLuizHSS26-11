import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar',
  templateUrl:'listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  produtos:Produto[]=[];
  constructor(private router: Router, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this.ProdutoService.listar().subscribe((Produto)=>{
      console.log(Produto);
      this.produtos = Produto;
    });
  }
    navigateToCreateProduto():void{
      this.router.navigate(['/produto/cadastrar'])
    }

}
