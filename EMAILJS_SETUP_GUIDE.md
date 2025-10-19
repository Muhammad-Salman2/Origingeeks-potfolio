# EmailJS Setup Guide - Origin Geeks Portfolio

## ✅ Package Installed
`@emailjs/browser` package install ho gaya hai.

## 📋 Setup Steps (Follow in Order)

### Step 1: EmailJS Account Banao
1. **Website**: https://www.emailjs.com/
2. **Sign Up** karo (Free account)
3. **Verify** your email

### Step 2: Email Service Connect Karo
1. Dashboard me jao
2. **"Email Services"** → **"Add New Service"** click karo
3. **Gmail** ya jo bhi email use karna hai wo select karo
4. Account se **connect** karo
5. **Service ID** copy kar lo (Example: `service_abc123`)

### Step 3: Email Template Banao
1. **"Email Templates"** → **"Create New Template"** click karo
2. Template ka naam do (e.g., "Contact Form")
3. **Template Content** me ye variables use karo:

```
Subject: New Contact Form Message from {{from_name}}

Hello Origin Geeks Team,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Template ID** copy kar lo (Example: `template_xyz789`)
5. **Save Template**

### Step 4: Public Key Copy Karo
1. **Account** tab me jao
2. **General** section me jao
3. **Public Key** copy kar lo (Example: `1A2B3C4D5E6F7G8H9I`)

### Step 5: .env.local File Update Karo
File already ban chuki hai: `e:\OriginGeeks\.env.local`

Is file ko open karo aur apni values paste karo:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=1A2B3C4D5E6F7G8H9I
```

⚠️ **Important**: Apni actual values use karna!

### Step 6: Development Server Restart Karo
Environment variables load hone ke liye server restart zaroori hai:

```bash
# Terminal me (Ctrl+C se pehle stop karo)
npm run dev
```

## 🧪 Testing

1. Website pe jao: http://localhost:3000
2. Contact form scroll karo
3. Apna naam, email aur message type karo
4. **"Send Message"** button click karo
5. Success message dekho
6. Apni email check karo - message aana chahiye!

## 📧 Email Template Variables

Ye variables automatically form data se fill honge:

- `{{from_name}}` - User ka naam
- `{{from_email}}` - User ki email
- `{{message}}` - User ka message
- `{{to_name}}` - "Origin Geeks Team" (hard-coded)

## ⚙️ Customization

### Email Template Customize Karo
EmailJS dashboard me template edit kar sakte ho:
- Subject line change karo
- Email design improve karo
- HTML formatting add karo

### To Email Change Karo
EmailJS service settings me:
1. Service edit karo
2. **"To Email"** field me apni company email dalo

## 🔒 Security

✅ `.env.local` file automatically `.gitignore` me hai
✅ Keys public nahi hongi
✅ NEXT_PUBLIC prefix zaroori hai (client-side ke liye)

## 🐛 Troubleshooting

### Email nahi aa raha?
1. Console me errors check karo (F12)
2. EmailJS dashboard me logs check karo
3. Spam folder check karo
4. Service ID, Template ID, Public Key sahi hai?
5. Server restart kiya?

### Error: "Failed to send message"
- Internet connection check karo
- EmailJS service active hai?
- Environment variables sahi hain?
- Browser console me detailed error dekho

## 📞 Support

Agar koi issue ho to:
1. EmailJS Documentation: https://www.emailjs.com/docs/
2. Console errors screenshot lo
3. EmailJS dashboard ke logs check karo

## 🎉 Done!

Ab jab bhi koi contact form fill karega, aapko email automatically aa jayega! 📧✨
