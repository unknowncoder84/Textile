# Netlify Deployment Guide for LoomCraft Textiles

## ✅ Code Successfully Pushed to GitHub!

Your code is now available at: https://github.com/unknowncoder84/Textile

## 🚀 Deploy to Netlify

### Step 1: Sign Up / Log In to Netlify
1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Sign up or log in with your GitHub account

### Step 2: Import Your Project
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your GitHub account
4. Select the **"Textile"** repository

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js, but verify these settings:

```
Build command: pnpm run build
Publish directory: .next
```

**Important**: Make sure to set the Node version:
- Go to **Site settings** → **Build & deploy** → **Environment**
- Add environment variable:
  - Key: `NODE_VERSION`
  - Value: `18` or `20`

### Step 4: Deploy!
1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at a Netlify URL like: `https://your-site-name.netlify.app`

## 🔧 Post-Deployment Configuration

### Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your DNS

### Environment Variables (For Future Supabase Integration)
1. Go to **Site settings** → **Environment variables**
2. Add your variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📝 Build Configuration

Your `netlify.toml` file is already configured:

```toml
[build]
  command = "pnpm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
  NEXT_TELEMETRY_DISABLED = "1"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🐛 Troubleshooting

### Build Fails
**Error**: "pnpm: command not found"
**Solution**: Netlify should auto-detect pnpm from `pnpm-lock.yaml`. If not, add to environment variables:
- Key: `NPM_FLAGS`
- Value: `--legacy-peer-deps`

### Images Not Loading
**Solution**: Make sure all images in `public/images/` are committed to GitHub

### 404 Errors on Page Refresh
**Solution**: The `netlify.toml` redirects are already configured. If issues persist:
1. Go to **Site settings** → **Build & deploy** → **Post processing**
2. Enable **"Pretty URLs"**

### Build Takes Too Long
**Solution**: 
1. Check build logs for errors
2. Ensure `node_modules` is in `.gitignore` (it is)
3. Clear Netlify cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

## 🎯 Expected Build Output

Your build should show:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

## 📊 Performance Tips

1. **Enable Netlify Analytics** (optional, paid feature)
2. **Enable Asset Optimization**:
   - Go to **Site settings** → **Build & deploy** → **Post processing**
   - Enable **"Bundle CSS"** and **"Minify JS"**

3. **Enable Netlify Forms** (for contact form):
   - Add `netlify` attribute to your form in `contact/page.tsx`
   - Forms will be automatically handled by Netlify

## 🔄 Continuous Deployment

Every time you push to the `main` branch on GitHub, Netlify will automatically:
1. Pull the latest code
2. Run the build command
3. Deploy the new version

## 📱 Preview Deployments

Netlify automatically creates preview deployments for:
- Pull requests
- Branch deployments

Access them from the **Deploys** tab in your Netlify dashboard.

## ✅ Deployment Checklist

- [x] Code pushed to GitHub
- [ ] Netlify account created
- [ ] Repository connected to Netlify
- [ ] Build settings configured
- [ ] First deployment successful
- [ ] Site is live and accessible
- [ ] All pages working (Home, Catalog, About, Contact, Admin)
- [ ] Images loading correctly
- [ ] Animations working smoothly
- [ ] Mobile responsive
- [ ] Custom domain configured (optional)

## 🎉 Your Site is Ready!

Once deployed, your LoomCraft Textiles platform will be live at:
- **Netlify URL**: `https://your-site-name.netlify.app`
- **Custom Domain**: (if configured)

Share your live site and start showcasing your premium textile collection!

## 📚 Additional Resources

- [Netlify Next.js Documentation](https://docs.netlify.com/frameworks/next-js/)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [Netlify Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

---

**Need Help?** Check the Netlify build logs for detailed error messages.
