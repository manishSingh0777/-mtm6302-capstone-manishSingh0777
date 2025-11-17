Capstone Project - Part 1
Name:Manish Singh
Student Number: 041143014
Project Name: Capstone Project - Part 1


## Part 2 – Mockup Design Decisions

For this stage of the Capstone Project, I designed a mockup of the APOD (Astronomy Picture of the Day) application.  
My design choices focused on simplicity, readability, and giving priority to the images since they are the core content.

### Layout
The interface is kept clean with a clear header that contains the date picker and access to favourites.  
The main section highlights the “Picture of the Day” with its title, date, image, and mission overview.  
Interactive buttons like “Add to Favourites” are placed directly below the content for easy access.  
This design ensures that the image and description remain the central focus for the user.

### Colours
I used a dark-themed background with light text to match the astronomy/space theme and give high contrast.  
This choice helps the pictures stand out more and reduces eye strain while viewing.

### Fonts
A clean, modern sans-serif font was used to keep the text legible on all screen sizes.  
Headings are bold and larger for hierarchy, while the mission overview text is smaller and more readable for long passages.

### Responsiveness
The mockup shows layouts for different screen sizes (desktop and mobile).  
On mobile, elements stack vertically to maximize space and maintain readability, while on desktop the layout balances image and text side by side.  
This ensures the design adapts smoothly across devices.

### Part 3 - Html and css
Capstone Project – Part 3
Overview

Prototype web app built with HTML and CSS based on Part 2 mockups. Includes two pages, responsive layout, and themed backgrounds.

Files

index.html – Landing page (astronaut image, date picker, favourites link)

picture.html – Picture of the Day page (mission overview, Mars image, date, credits)

style.css – Shared stylesheet

assets/ – Images and backgrounds

Progress

Created a new branch part-3

Added structure and styles for both pages

Applied background images (Space red.jpg and night sky.jpg)

Improved layout, spacing, and responsiveness


### Part 4 - Javascript ###


Picture Day is a web application that allows users to explore daily featured images from Wikimedia, based on a selected date. Users can view high-quality images, read their description, and save their favorite pictures to a personal favourites page for easy access later

Feature
Select a date to view the featured image of that day.
- Display image, title, and description dynamically using Wikimedia API.
- Add images to a favourites page with a single click.
- Remove images from favourites page easily.
- Responsive design for desktop and mobile devices.
- Fallbacks for missing images or API errors.

Challenges Faced
Extracting clean titles from HTML tags in API response.
Resizing images for favourites page thumbnails.
Resetting page content on refresh.
Formatting dates for the Wikimedia API.
Handling missing images or descriptions gracefully.

Resources

- Wikimedia Featured Picture API (for daily astronomy images)
- GitHub (for version control and hosting the project)
- ChatGPT (GPT-5 for guidance and coding assistance during the assignment)
- Online documentation and tutorials for HTML, CSS, and JavaScript

