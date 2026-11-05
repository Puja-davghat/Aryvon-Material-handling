import os

def update_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    orig = content
    for old, new in replacements:
        content = content.replace(old, new)
    if content != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {path}")
    else:
        print(f"No changes in: {path}")

# 1. ContactForm.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\components\ContactForm.jsx', [
    ('wa.me/918080238541', 'wa.me/918329358214'),
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('<span>80802 38541</span>', '<span>+91 80802 38541</span>'),
    ('<span>Call: 80802 38541</span>', '<span>Call: +91 80802 38541</span>'),
    ('<span>WhatsApp: 80802 38541</span>', '<span>WhatsApp: +91 83293 58214</span>'),
    ('call 80802 38541 directly', 'call +91 80802 38541 directly')
])

# 2. Navbar.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\components\Navbar.jsx', [
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('80802 38541', '+91 80802 38541')
])

# 3. Footer.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\components\Footer.jsx', [
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('wa.me/918080238541', 'wa.me/918329358214'),
    ('Chat: 80802 38541', 'Chat: +91 83293 58214'),
    ('80802 38541', '+91 80802 38541')
])

# 4. Contact.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\pages\Contact.jsx', [
    ('wa.me/918080238541', 'wa.me/918329358214'),
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('title="Click to dial 80802 38541"', 'title="Click to dial +91 80802 38541"'),
    ('title="Open WhatsApp chat with 80802 38541"', 'title="Open WhatsApp chat with +91 83293 58214"'),
    ('>80802 38541<', '>+91 80802 38541<'),
])

# Special check for WhatsApp number in Contact.jsx
with open(r'c:\Users\admin\Desktop\AryvonUC\client\src\pages\Contact.jsx', 'r', encoding='utf-8') as f:
    c = f.read()
# Replace the text inside the WhatsApp card link:
c = c.replace(
    'title="Open WhatsApp chat with +91 83293 58214"\n                  >\n                    +91 80802 38541',
    'title="Open WhatsApp chat with +91 83293 58214"\n                  >\n                    +91 83293 58214'
)
c = c.replace(
    'title="Open WhatsApp chat with +91 83293 58214"\r\n                  >\r\n                    +91 80802 38541',
    'title="Open WhatsApp chat with +91 83293 58214"\r\n                  >\r\n                    +91 83293 58214'
)
with open(r'c:\Users\admin\Desktop\AryvonUC\client\src\pages\Contact.jsx', 'w', encoding='utf-8') as f:
    f.write(c)

# 5. DedicatedProductPage.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\pages\DedicatedProductPage.jsx', [
    ('wa.me/918080238541', 'wa.me/918329358214'),
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('<span>80802 38541</span>', '<span>+91 80802 38541</span>'),
    ('Call 80802 38541', 'Call +91 80802 38541'),
    ('80802 38541', '+91 80802 38541')
])

# 6. Home.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\pages\Home.jsx', [
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('Call 80802 38541', 'Call +91 80802 38541'),
    ("'80802 38541'", "'+91 80802 38541'"),
    ('80802 38541', '+91 80802 38541')
])

# 7. Products.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\pages\Products.jsx', [
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('80802 38541', '+91 80802 38541')
])

# 8. ProductDetail.jsx
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\pages\ProductDetail.jsx', [
    ('href="tel:8080238541"', 'href="tel:+918080238541"'),
    ('80802 38541', '+91 80802 38541')
])

# 9. CountUp.jsx (Support +91 80802 38541)
update_file(r'c:\Users\admin\Desktop\AryvonUC\client\src\components\CountUp.jsx', [
    ("isPhone = strValue === '80802 38541'", "isPhone = strValue === '80802 38541' || strValue === '+91 80802 38541'"),
    ("return `${s.slice(0, 5)} ${s.slice(5)}`;", "return strValue.startsWith('+91') ? `+91 ${s.slice(0, 5)} ${s.slice(5)}` : `${s.slice(0, 5)} ${s.slice(5)}`;")
])

print("ALL FILES UPDATED!")
