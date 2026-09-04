# نظام الأعمال الميدانية

نسخة MVP عربية للعمل من الكمبيوتر والجوال، مبنية بـ Next.js وSupabase.

## الموجود حاليًا
- تسجيل دخول.
- لوحة سجلات وبحث.
- إضافة سجل ميداني.
- بيانات العداد القديم والجديد.
- GPS ودقة الموقع.
- 6 أنواع صور.
- تخزين الصور في Bucket خاص `meter-photos`.
- روابط مؤقتة Signed URLs للصور.
- صلاحيات admin / supervisor / field_worker عبر RLS.

## إعداد Supabase
1. أنشئ Project في Supabase.
2. افتح SQL Editor.
3. شغّل `supabase/migrations/001_initial.sql` مرة واحدة.
4. من Authentication > Users أنشئ أول مستخدم.
5. من Table Editor > profiles غيّر role لأول مستخدم إلى `admin`.

## متغيرات البيئة
انسخ `.env.example` إلى `.env.local` وضع قيم مشروع Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

لا ترفع `.env.local` إلى GitHub.

## التشغيل
```bash
npm install
npm run dev
```

ثم افتح localhost:3000.

## المرحلة التالية
الخريطة، إدارة المستخدمين والمناطق، اعتماد ورفض السجلات، Offline mode، ضغط الصور، التصدير Excel/CSV، وسجل التدقيق.
