<template>
  <section class="home-content">
    <input v-model="SearchKey" type="search" id="search" />
    <article class="home-intro">
      <div id="office-image">
        <img src="../assets/image/office.svg" alt="" />
      </div>
      <div id="office-text">
        <h2>RECRUITMENT MUST BE EASIER FOR ALL INVOLVED ACTORS.</h2>
        <p>
          We deploy all our +20 years expertise in implementation, exploitation
          and optimization of Recruiting Platform to build suitable solutions
          that will support you and your recruitment challenges. Rhaegal
          supports all types of companies, from SMEs to multinationals, in their
          recruitment projects with an "à la carte" approach aimed to improve
          the experience of all actors - candidates & recruiters.
        </p>
      </div>
    </article>
    <article class="our-activities">
      <h3 class="activity-text">Our activities</h3>
      <section class="encart-container">
        <div class="encarts">
          <img src="../assets/image/rocket-solid.svg" alt="" />
          <div>
            <p class="title">FUNCTIONAL</p>
            <p>
              We leverage our 20+ years of experience in HRIS to advise, support
              and drive growth for our clients in the management of their ATS.
            </p>
          </div>
        </div>
        <div class="encarts">
          <img src="../assets/image/wrench-solid.svg" alt="" />
          <div>
            <p class="title">TECHNICAL EXPERTISE</p>
            <p>
              We can work together on the configuration, deployment projects, as
              well as technical assistance, including APIs.
            </p>
          </div>
        </div>
        <div class="encarts">
          <img src="../assets/image/cloudversify-brands.svg" alt="" />
          <div>
            <p class="title">CLOUD SOLUTIONS</p>
            <p>
              Thanks to this knowledge of APIs, especially from SmartRecruiters,
              we have built a toolbox of applications so that you can take full
              advantage of your platform.
            </p>
          </div>
        </div>
      </section>
    </article>
    <article class="contact-us">
      <h3>CONTACT US</h3>
      <section class="contact-container">
        <section class="form-container">
          <p id="contact-form-text">
            To contact us, please fill out the form below. Please describe your
            request as best as possible so that we can answer you in the best
            way !
          </p>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Entreprise" />
          <input type="email" name="" placeholder="E-Mail" id="" />
          <input type="tel" name="" id="" placeholder="Phone (facultatif)" />
          <div>
            <p>Message</p>
            <input type="text" name="" id="message" />
          </div>
          <button type="submit">Send</button>
        </section>
        <section class="info-container">
          <div class="indent-container">
            <div id="square-orange"></div>
            <div>
              <p id="infos">Infos</p>
              <div>
                <p><span>Address :</span>2 passage des Arts,33600 Latresne</p>
              </div>
              <div>
                <p><span>E-mail : </span>contact@rhaegal.com</p>
              </div>
              <div>
                <p><span>Phone :</span> +33 9 88 55 61 89</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>
