import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResetPasswordEmail(email: string, token: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const resetLink = `${baseUrl}/reset-password?token=${token}`;
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Hotel Booking <noreply@your-app.vercel.app>',
      to: email,
      subject: 'Reset Password - Hotel Booking',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48;">Reset Password</h2>
          <p>Halo,</p>
          <p>Kami menerima permintaan untuk mereset password akun Hotel Booking Anda.</p>
          <p>Silakan klik tombol di bawah ini untuk mereset password Anda:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" 
               style="background-color: #e11d48; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Reset Password
            </a>
          </div>
          <p>Link ini akan kadaluarsa dalam 30 menit.</p>
          <p>Jika Anda tidak meminta reset password, abaikan email ini.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Email ini dikirim secara otomatis, mohon tidak membalas email ini.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
} 