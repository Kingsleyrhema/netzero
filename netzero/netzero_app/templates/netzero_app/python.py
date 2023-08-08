import glob
from bs4 import BeautifulSoup

# Get a list of HTML files in the current directory
html_files = glob.glob("*.html")

# Iterate over each HTML file
for file_path in html_files:
    # Read the HTML file
    with open(file_path, 'r') as file:
        html = file.read()

    # Create BeautifulSoup object
    soup = BeautifulSoup(html, 'html.parser')

    # Find all img tags and modify the src attribute
    img_tags = soup.find_all('img')
    for img_tag in img_tags:
        src = img_tag.get('src')
        if src.startswith('images/'):
            img_tag['src'] = "{% static '" + src + "' %}"
        elif src.startswith('img/'):
            img_tag['src'] = "{% static '" + src + "' %}"
        elif src.startswith('image/'):
            img_tag['src'] = "{% static '" + src + "' %}"

    # Find all script tags and modify the src attribute
    script_tags = soup.find_all('script')
    for script_tag in script_tags:
        src = script_tag.get('src')
        if src and src.startswith('js/'):
            script_tag['src'] = "{% static '" + src + "' %}"
        elif src and src.startswith('css/'):
            script_tag['src'] = "{% static '" + src + "' %}"

    # Find all link tags and modify the href attribute
    link_tags = soup.find_all('link')
    for link_tag in link_tags:
        href = link_tag.get('href')
        if href and href.startswith('css/'):
            link_tag['href'] = "{% static '" + href + "' %}"


    # Save the modified HTML back to the file
    with open(file_path, 'w') as file:
        file.write(str(soup))
