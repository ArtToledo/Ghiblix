import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  
  public sendEmailTest(username: string): any {
    this
      .mailerService
      .sendMail({
        to: 'arthur.toledo741@gmail.com',
        from: 'lojageekmanias@gmail.com',
        subject: 'Bem vindo a Ghiblix',
        template: 'welcome',
        context: {
          username,
        },
      })
      .then((success) => {})
      .catch((err) => {
        console.log(err)
      });
  }
}