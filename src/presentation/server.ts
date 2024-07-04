import express, { Router } from "express";


interface Props {
  routes: Router;
  port: number;
}


export class Server {

  private app = express();
  private readonly routes: Router;
  private readonly port: number;


  constructor( {port, routes}: Props ){
    this.routes = routes;
    this.port = port;

    this.config();
  }


  private config(){
    this.app.use( express.json() );
    this.app.use( express.urlencoded( {extended: true} ) );

    this.app.use('/api', this.routes);
  }


  public start(){
    this.app.listen( this.port, () => {
      console.log( `Server running on port: ${this.port}` );
    });
  }

}
