export interface IMailerProvider {
  sendMail(uname: string, pass: string): Promise<void>;
}
