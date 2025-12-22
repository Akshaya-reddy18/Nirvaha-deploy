# 🚀 How to Access the Dashboard

## ⚠️ IMPORTANT: Correct URL

Your development server is running on **PORT 5174**, not 5173!

### ✅ Correct URLs:
- **Homepage:** http://localhost:5174/
- **Dashboard:** http://localhost:5174/dashboard
- **Login:** http://localhost:5174/login

### ❌ Wrong URL (will show blank):
- ~~http://localhost:5173/~~ (This port is not in use)

---

## 📋 Step-by-Step Access Guide

### Option 1: Access Dashboard Directly (If Logged In)
```
1. Open your browser
2. Go to: http://localhost:5174/dashboard
3. If not logged in, you'll be redirected to login
```

### Option 2: Login First, Then Dashboard
```
1. Go to: http://localhost:5174/login
2. Enter your credentials
3. After login, navigate to: http://localhost:5174/dashboard
```

### Option 3: From Homepage
```
1. Go to: http://localhost:5174/
2. Click "Login" button
3. Enter credentials
4. Navigate to Dashboard from menu
```

---

## 🔍 Troubleshooting

### Issue: White/Blank Page

**Cause 1: Wrong Port**
- ❌ You're accessing: http://localhost:5173/
- ✅ Should access: http://localhost:5174/

**Cause 2: Not Logged In**
- Dashboard route is protected
- You must login first
- Go to: http://localhost:5174/login

**Cause 3: JavaScript Error**
- Open browser console (F12)
- Check for red error messages
- Report any errors you see

**Cause 4: Server Not Running**
- Check terminal for "VITE v7.1.5  ready"
- Should show: "Local:   http://localhost:5174/"
- If not running: `npm run dev`

---

## 🖥️ Browser Console Check

1. Open your browser
2. Go to: http://localhost:5174/
3. Press F12 (or right-click → Inspect)
4. Click "Console" tab
5. Look for any red error messages

### Common Errors & Solutions:

**Error: "Failed to fetch"**
- Server not running
- Run: `npm run dev`

**Error: "Module not found"**
- Missing dependencies
- Run: `npm install`

**Error: "Unexpected token"**
- Build issue
- Run: `npm run dev` (restart server)

---

## ✅ Verification Steps

### 1. Check Server Status
```bash
# Terminal should show:
VITE v7.1.5  ready in XXX ms

➜  Local:   http://localhost:5174/
➜  Network: use --host to expose
```

### 2. Test Homepage
```
1. Open: http://localhost:5174/
2. Should see: Nirvaha landing page with header
3. Should NOT be blank
```

### 3. Test Login
```
1. Open: http://localhost:5174/login
2. Should see: Login form
3. Enter test credentials
```

### 4. Test Dashboard
```
1. After login, go to: http://localhost:5174/dashboard
2. Should see: Dashboard with 5 service cards
3. Should see: Header with navigation tabs
```

---

## 🎯 Quick Test Commands

### Test if server is responding:
```bash
curl http://localhost:5174/
```

### Check if port 5174 is in use:
```bash
netstat -ano | findstr :5174
```

### Restart development server:
```bash
# Stop current server (Ctrl+C)
npm run dev
```

---

## 📱 Access from Mobile/Other Device

If you want to access from another device on same network:

```bash
# Start server with host flag:
npm run dev -- --host

# Then access from other device:
http://YOUR_IP_ADDRESS:5174/
```

---

## 🔐 Test Credentials

If you need to test the dashboard, you can:

1. **Create Account:**
   - Go to: http://localhost:5174/signup
   - Fill in registration form
   - Submit

2. **Login:**
   - Go to: http://localhost:5174/login
   - Use your created credentials
   - Access dashboard

---

## 🎨 What You Should See

### Homepage (http://localhost:5174/)
- ✅ Nirvaha header with logo
- ✅ Hero section
- ✅ Services showcase
- ✅ Community section
- ✅ Footer

### Dashboard (http://localhost:5174/dashboard)
- ✅ Header with logo, nav tabs, profile
- ✅ 5 service cards in grid:
  - Meditation (Purple → Gold)
  - ZenChat (Teal → Purple)
  - Discussion Room (Gold → Teal)
  - Sound Healing (Purple → Teal)
  - Personalized Sessions (Gold → Purple)
- ✅ Smooth animations on scroll
- ✅ Hover effects on cards

---

## 🐛 Still Having Issues?

### Check These:

1. **Correct Port?**
   - ✅ http://localhost:5174/
   - ❌ http://localhost:5173/

2. **Server Running?**
   - Check terminal for "ready" message
   - Should see green "Local:" URL

3. **Browser Cache?**
   - Hard refresh: Ctrl+Shift+R (Windows)
   - Or: Cmd+Shift+R (Mac)

4. **JavaScript Enabled?**
   - Check browser settings
   - Ensure JS is not blocked

5. **Ad Blocker?**
   - Try disabling temporarily
   - Some blockers interfere with dev servers

---

## 📞 Getting Help

If still not working, provide:

1. **Browser Console Errors:**
   - Press F12
   - Copy any red error messages

2. **Terminal Output:**
   - Copy the server startup messages

3. **URL You're Using:**
   - Confirm it's http://localhost:5174/

4. **What You See:**
   - Blank white page?
   - Error message?
   - Partial content?

---

## ✨ Expected Behavior

### When Working Correctly:

**Homepage:**
- Loads in < 2 seconds
- Shows full landing page
- Smooth scrolling
- Interactive elements

**Dashboard:**
- Loads after login
- Shows 5 animated cards
- Header with navigation
- Smooth hover effects
- 3D background (blurred)

---

## 🎯 Quick Fix Checklist

- [ ] Using correct port (5174, not 5173)
- [ ] Server is running (`npm run dev`)
- [ ] Browser console shows no errors
- [ ] Logged in (for dashboard access)
- [ ] JavaScript enabled
- [ ] Cache cleared (hard refresh)
- [ ] No ad blocker interference

---

**Remember: The correct URL is http://localhost:5174/ (port 5174!)**

If you see a blank page on 5173, that's because nothing is running on that port!
