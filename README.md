# Assignment 6 — Portfolio (jQuery)

**Name:** Tolganai Asylkhan

**Group:** SE-2538


---

## Task 0 — Setup
Included jQuery via CDN. All the code is wrapped in `$(document).ready()`. To test it, I printed `"jQuery is ready!"` in the browser console.

<img width="990" height="261" alt="image" src="https://github.com/user-attachments/assets/1dc4c71a-77da-43c1-b1af-75f0545ce447" />


## Task 1 — Selectors & CSS
Used tag (`h1`), ID (`#greeting`), and class (`.headline`, `.intro`) selectors. Dynamically updated the text using `.html()` and `.text()`. Changed styling using `.css()`. Added Light and Dark theme buttons that toggle a class on the `body`.

*(Light Theme)*
<img width="1095" height="292" alt="Снимок экрана 2026-11-02 203553" src="https://github.com/user-attachments/assets/77b750ea-bfa2-4f9e-b3a9-bae09b0f66c7" />

*(Dark Theme)*
<img width="1095" height="292" alt="Снимок экрана 2026-11-02 203553" src="https://github.com/user-attachments/assets/2c109d44-f33e-4599-9542-24c38e3e196e" />


## Task 2 — Visibility Methods
Created an "About Me" section with a status message and fun facts. The Hide, Show, and Toggle buttons control their visibility using `.hide()`, `.show()`, and `.toggle()`.

*(Visible)*
<img width="1105" height="532" alt="Снимок экрана 2026-11-02 204610" src="https://github.com/user-attachments/assets/534cf631-fe66-4d6a-b729-4e1030aa0d94" />

*(Hidden after clicking Hide)*
<img width="1126" height="330" alt="Снимок экрана 2026-11-02 204618" src="https://github.com/user-attachments/assets/c45f2eff-6a72-46fb-94e9-00b7293fc84d" />


## Task 3 — Fade Methods
Added a gallery with three images. The Fade In, Fade Out, and Fade Toggle buttons control the images smoothly using `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()`.

*(Images visible)*
<img width="1111" height="547" alt="Снимок экрана 2026-11-02 204626" src="https://github.com/user-attachments/assets/d1e5277f-43f6-4df4-b708-23a7be9686cf" />


*(Images faded out)*
<img width="1143" height="262" alt="Снимок экрана 2026-11-02 204633" src="https://github.com/user-attachments/assets/1be0c230-d49e-43af-bb06-e93bc6aa5695" />


## Task 4 — Slide Methods
Created three clickable headings (Music, Movie, Subject). When clicked, the panels with information smoothly open and close using `.slideToggle()`.

*(Panels closed)*
<img width="1116" height="422" alt="Снимок экрана 2026-11-02 204641" src="https://github.com/user-attachments/assets/1ceca12f-41d0-4ac9-8272-4ad666ac9adf" />


*(Panels opened)*
<img width="1122" height="623" alt="Снимок экрана 2026-11-02 204650" src="https://github.com/user-attachments/assets/9ba5f873-4045-4174-a83e-d5e0c7824384" />


## Task 5 — Add & Remove Elements
Created a skills list. Added a text input and buttons to manage the list. Used `.append()` to add to the end, `.prepend()` to add to the beginning, and `.remove()` to delete the last item. Empty inputs are blocked with an `alert()`.

*(Added Java and C++, empty input alert)*
<img width="1133" height="616" alt="Снимок экрана 2026-11-02 204657" src="https://github.com/user-attachments/assets/3f409b71-6965-4474-84fa-456dc5c7dac8" />


*(Removed skills)*
<img width="1083" height="496" alt="Снимок экрана 2026-11-02 204708" src="https://github.com/user-attachments/assets/6479558f-373f-42ba-8129-a919f55943a2" />


## Task 6 — Modifying Attributes
Added a social media link. The "Change Link" button dynamically changes the `href` attribute (between GitHub and LinkedIn) and the link text using `.attr()`.

*(GitHub link)*
<img width="1135" height="293" alt="Снимок экрана 2026-11-02 204714" src="https://github.com/user-attachments/assets/a3c448f7-f76f-4105-9b62-d1d7920b3288" />


*(Changed to LinkedIn)*
<img width="1115" height="297" alt="Снимок экрана 2026-11-02 204720" src="https://github.com/user-attachments/assets/96b5abec-06ba-4832-848b-922c57d8fb20" />


## Task 7 — Form Interaction
Created a form with Name and Email inputs. The text typed by the user is displayed live below the form using `.val()` and `.text()`. I also added a form submit handler (using `event.preventDefault()`) with basic validation (alert if fields are empty, browser built-in validation for email).

*(Live preview and empty field validation)*
<img width="1092" height="320" alt="Снимок экрана 2026-11-02 204728" src="https://github.com/user-attachments/assets/a992a694-4842-433d-8a29-39462ff13696" />


## Task 8 — Basic Animation
Created skill bars. Initially, the width is 0%. When the "Animate My Skills" button is clicked, the `.animate()` method smoothly increases the width of each bar to different target values. Clicking it again animates them back to 0%.

*(Initial state, 0%)*
<img width="1097" height="382" alt="Снимок экрана 2026-11-02 204737" src="https://github.com/user-attachments/assets/25c27940-37f3-4f57-be1c-aaefa83cb23c" />


*(Animated state)*
<img width="1085" height="385" alt="Снимок экрана 2026-11-02 204745" src="https://github.com/user-attachments/assets/f22ad62e-4b6b-4196-adb0-c50f636cca0a" />

---

## Summary
In this assignment, I built a single-page portfolio using jQuery. I practiced working with selectors, effects (hide/show, fade, slide), DOM manipulation (adding/removing elements, attributes, forms), and `.animate()` for the skill bars. All tasks work without errors, and the project is deployed on GitHub Pages.
