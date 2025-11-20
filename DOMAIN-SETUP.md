# Custom Domain Setup Guide

## Setting up ajhealthcoach.com on Netlify

### Step 1: Add Your Custom Domain in Netlify

1. Go to your Netlify site dashboard
2. Click **"Domain settings"**
3. Click **"Add custom domain"**
4. Enter: `ajhealthcoach.com`
5. Click **"Verify"** and **"Add domain"**
6. Also add: `www.ajhealthcoach.com` (repeat the process)

### Step 2: Configure DNS with Your Domain Registrar

You have two options:

#### Option A: Use Netlify DNS (Recommended - Easiest)

1. In Netlify, click **"Set up Netlify DNS"**
2. Follow the wizard to transfer DNS to Netlify
3. Update nameservers at your domain registrar (where you bought ajhealthcoach.com)
4. Netlify will automatically handle all DNS records

#### Option B: Keep Your Current DNS Provider

Add these records to your DNS provider:

**For ajhealthcoach.com (apex domain):**
- Type: `A`
- Name: `@` or leave blank
- Value: `75.2.60.5` (Netlify's load balancer)

**For www.ajhealthcoach.com:**
- Type: `CNAME`
- Name: `www`
- Value: `your-site-name.netlify.app`

### Step 3: Enable HTTPS

1. In Netlify Domain settings
2. Scroll to **"HTTPS"**
3. Click **"Verify DNS configuration"**
4. Once verified, click **"Provision certificate"**
5. Wait 1-2 minutes for SSL certificate to activate

### Step 4: Set Primary Domain

1. In Domain settings, you'll see both:
   - ajhealthcoach.com
   - www.ajhealthcoach.com
2. Choose which should be primary (ajhealthcoach.com recommended)
3. Netlify will automatically redirect the other to your primary

## Testing Social Sharing

Once your domain is live, test your social sharing:

### Facebook/LinkedIn
- Go to: https://developers.facebook.com/tools/debug/
- Enter: https://ajhealthcoach.com
- Click "Debug" to see how your site will appear

### Twitter
- Go to: https://cards-dev.twitter.com/validator
- Enter: https://ajhealthcoach.com
- Check the preview

### iMessage/iPhone
- Send yourself a link to: https://ajhealthcoach.com
- The preview should show your logo and description

## What You'll See When Shared

✅ **Title**: "Coach AJ - Certified Wholistic Health Coach | Transform Your Health"
✅ **Description**: "FREE Health Evaluations, AO Scan Technology, and personalized nutritional guidance..."
✅ **Image**: Your Coach AJ logo
✅ **URL**: https://ajhealthcoach.com

## Troubleshooting

**Q: My custom domain shows "Site not found"**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Clear your browser cache

**Q: Social sharing not showing my logo**
- Wait for Facebook/Twitter to re-scrape (can take 24 hours)
- Use the debug tools above to force a refresh

**Q: iPhone doesn't show preview when sharing**
- Make sure HTTPS is enabled
- Wait for cache to clear (up to 24 hours)

## Need Help?

Contact Netlify support or check their docs:
- https://docs.netlify.com/domains-https/custom-domains/

---

Your site is fully configured for social sharing! 🎉
