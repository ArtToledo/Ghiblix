import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  
  public sendEmailTest(emailUser: string): any {
    this
      .mailerService
      .sendMail({
        to: emailUser,
        from: 'ghiblixfilmes@gmail.com',
        subject: 'Bem vindo a Ghiblix',
        template: 'welcome',
      })
      .then((success) => {})
      .catch((err) => {
        console.log(err)
      });
  }
}