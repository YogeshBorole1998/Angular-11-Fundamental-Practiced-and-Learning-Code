import { Component } from '@angular/core';

@Component({
  template: `
    <section>
      <div class="container">
        <div class="text">
          <h1>404 Page Not Found..!!</h1>
          <div>
            <img class="image" src="./assets/Images/404.jpg" alt="" />
          </div>
          <br />
          <p>
            We can't seem to find the page you're looking for. <br />Please
            check the URL for any typos.
          </p>
          <ul class="menu">
            <li><a href="#">Go to Homepage</a></li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        column-gap: 20px;
      }

      .container img {
        width: 420px;
      }

      .text {
        display: block;
        padding: 40px 40px;
        width: 450px;
      }

      section {
        width: 100%;
      }

      .text h1 {
        color: #adff2f;
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 15px;
      }

      .text p {
        font-size: 15px;
        color: white;
        margin-bottom: 15px;
        line-height: 1.5rem;
        margin-bottom: 15px;
      }

      ..text {
        display: block;
        padding: 40px 40px;
        width: 450px;
      }

      a {
        display: block;
        color: #00ffff;
        text-decoration: none;
      }
    `,
  ],
})
export class Error404Component {
  constructor() {}
}
