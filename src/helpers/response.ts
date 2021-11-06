export class ResponseObj {
  private status: Number;
  private message: String;
  private data: object;
  private error: Boolean;

  constructor() {
    this.status = 200;
    this.message = "";
    this.data = {};
    this.error = false;
  }

  public setError(error: Boolean): void {
    this.error = error;
  }

  public getError() {
    return this.error;
  }

  public setStatus(status: Number): void {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setMessage(message: string): void {
    this.message = message;
  }

  public getMessage() {
    return this.message;
  }

  public setData(data: object): void {
    this.data = data;
  }

  public getdata() {
    return this.data;
  }
}
