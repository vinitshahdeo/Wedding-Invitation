
<p align="center"><a href="https://sonali.netlify.app/"><img src="./assets/wedding.gif" width="150px" height="150px"/></a></p>
<h1 align="center">SAVE THE DATE: NOV 29, 2020 <br> <a href="https://sonali.netlify.app/">sonali.netlify.app</a></h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/e945f101-f434-45e6-8c33-df855c6b2082/deploy-status)](https://app.netlify.com/sites/sonali/deploys)

## Wedding Invitation :ring:

<details>
  <summary><strong>View Invitation</strong></summary>
  <a href="https://sonali.netlify.app/"><img src="./assets/img/sonali.jpeg" /></a>
</details>

With the divine grace of the almighty,
inviting you and your family to elder sister's wedding to be held on **29th November at [Ashirwad Garden](https://goo.gl/maps/5z5xX2hTYzU8VGEJ9), Ratu, Ranchi from 7:00 PM** onwards.

- [Download](https://github.com/vinitshahdeo/vinitshahdeo/raw/master/docs/Sonali%20%26%20Gagan.pdf) the Invitation card

- Find [venue](https://goo.gl/maps/5z5xX2hTYzU8VGEJ9) on Google map

- Visit the [website](https://sonali.netlify.app/) for more details

```js

const newCouple = 'Sonali & Gagan';

// Nov 29, 2020
const weddingDate = new Date(2020, 11, 29);

// Wedding venue: https://goo.gl/maps/5z5xX2hTYzU8VGEJ9
const weddingVenue = new Location('Ashirwad Garden, Ranchi');

(function() {
    newCouple.willTieKnot(weddingDate);

    // your presence is requested
    (new Wedding()).acceptInvitation(
        window.open('https://sonali.netlify.app/')
    );
})();


```

<br><sup><i>With warm regards,<br>
**Vinit Shahdeo**<i></sup><br>
[![Twitter Follow @Vinit_Shahdeo](https://img.shields.io/twitter/follow/Vinit_Shahdeo?style=social)](https://twitter.com/Vinit_Shahdeo)
