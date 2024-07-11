import nodemailer from "nodemailer" //cria servidor smtp (para emails) gratuito e simula envio (exemplo pago: aws ses)

export async function getMailClient() {
    const account = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email', //ethereal = fake smtp service employed by nodemailer
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        },
        tls: {
            rejectUnauthorized: false //solves "self signed certificate in certificate chain" error
        }
    })

    return transporter
}