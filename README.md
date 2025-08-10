# Ben’s Lawn Services — CMS-Enabled Site

This version adds **Netlify CMS** so you can edit from **/admin**.

## Deploy
1. Upload this folder to Netlify (Deploys → Deploy manually → upload the *folder*).
2. In Netlify: Settings → **Identity** → **Enable Identity**.
3. Under Identity → **Registration**: set to "Invite only".
4. Identity → **Services** → **Enable Git Gateway**.
5. Identity → **Invite users** → send yourself an invite.
6. Visit `/admin` on your site, log in, and edit!

## Edit Content
- All content is stored in `content/site.json`.
- Images upload to `assets/img/` and are referenced automatically.

## Notes
- The CMS uses the **Git Gateway** backend and the `main` branch.
- You can customize fields in `admin/config.yml`.
