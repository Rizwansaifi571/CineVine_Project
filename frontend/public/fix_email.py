import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace all Cloudflare email protection links - more flexible pattern
pattern = r'<a href="/cdn-cgi/l/email-protection#[a-f0-9]*"><span class="__cf_email__"[^>]*>[^<]*</span></a>'
replacement = '<a href="mailto:hello@cinevine.com">hello@cinevine.com</a>'

new_content = re.sub(pattern, replacement, content)

if new_content != content:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated index.html - email replaced")
else:
    print("No matches found with pattern")
    # Try simpler pattern
    if '/cdn-cgi/l/email-protection#' in content:
        print("Found cdn-cgi pattern in file")

