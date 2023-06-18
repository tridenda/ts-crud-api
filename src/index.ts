import express, { Application, Request, Response } from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Welcome Home!");
    });
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log(`✅ Server runs on http://localhost:${port}`);
});
