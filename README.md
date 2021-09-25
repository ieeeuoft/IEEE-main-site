# IEEE Main Site

https://ieee.utoronto.ca/

Contact Alex Bodgan `alex.bogdan@mail.utoronto.ca` or Lisa Li `lisasa.li@mail.utoronto.ca` for access to the repo or if you have any questions.

## Install

```bash
npm install
```

## Start

```bash
npm start
```

Commit and push your changes to automatically update the live site.

## Adding new events

Go to:

```
src
└───Assets
    └───Lists
        └───allEvents.js
```

Add a new event with the following props:
Prop | Meaning
------------- | -------------
EventName | Name of the event that will be displayed on the site
displayDate | Date of the event that will be displayed on the site
date | Use YYYY/MM/DD; used to calculate what day the event is so that the upcoming 3 events can appear on the "Upcoming Events" section. If the event spans more than one day, use the start date
link | Link to event (either FB, Insta, Eventbrite, etc)

Place images of the event in:

```
src
└───Assets
    └───Images
        └───events
```

Notes:

1. Images must be **wider than they are tall**, ideally a square. It must be `.jpg`.
2. Shrink images if they are too big. The height of the image should be ideally 360px (and not a pixel less).
3. If EventName contains a character that can't be used in a jpg name (such as the ! in Hello, Con!), remove that problematic character(s) in EventName and the name of the image. Then add a condition in line 14 of `EventEvent.js`. See below.

```javascript
let EventNameChar = EventName;
if (EventNameChar == "Hello, Con") {
    EventNameChar = "Hello, Con!";
}
```

## Adding new sponsors

Similar to above. Add a new sponsor with the same props (they're self explanatory) in `allSponsors.js`. Add the images to the folder `sponsors`.

```
src
└───Assets
    └───Lists
        └───allSponsors.js
    └───Images
        └───sponsors
```

SVG works best so please contact the sponsor for an SVG logo if you can't find it online. PNG and JPG will suffice however.

## Adding new members

Similar to above. To input a new member, or a new year of members, go to `members.js`. Add the image(s) in the folder `team`.

```
src
└───Assets
    └───Lists
        └───members.js
    └───Images
        └───team
            └─── ~whatever year the member is in~
```

Notes:

1. Name the image the same as the prop _fullName_ in members.js. It must be `.jpg`.
2. Images must be **taller than they are wide** (preferably a square). THIS IS DIFFERENT FROM EVENT IMAGES.
3. Shrink images if they are too big so they load faster. The width of the image should be ideally 180px (and not a pixel less).

## Adding/updating colors

This may happen when Marketing Directors decide so. Go to:

```
src
└───abstracts
    └───_variables.scss
```

The function `@function color($color-name)` maps the colors inside the array `$colors`. Therefore, to use a color, it's written as:

```
color: color(blue1);
```

with `$blue1` as an example. Applies to any CSS style that can take in a color (i.e. background-color, fill, etc).

Simply add a new varible name and hex/rbga code of the new color in the array `$color`.

