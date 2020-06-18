$(document).ready(() => {
  // MENU
  $(".navbar__menu-btn").on("click", function () {
    $(".navbar__links").toggleClass("active");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");
  });

  // CAROUSEL
  const slickOptions = {
    autoplay: true,
    dots: false,
    // pauseOnHover: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
  };

  $(".slider").slick(slickOptions);

  const counterOptions = {
    delay: 10,
    time: 1000,
  };

  setInterval(() => {
    const numbersCollection = document.querySelectorAll(".counter__number");

    numbersCollection.forEach((number) => {
      const currentNumber = parseInt(number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1000);

  $(".counter__number").counterUp(counterOptions);

  $(".footer__form-button").on("click", () => {
    const email = $("#email").val();

    const emailOptions = {
      Host: "smtp.yourisp.com",
      Username: "username",
      Password: "password",
      To: "contato@studion.com",
      From: email,
      Subject: "Por favor me adicione na newsletter",
      Body: `Olá,
      
      Eu gostaria de ser adicionado na newsletter do site.
      Meu email é ${email}.
      
      Obrigado!
      `,
    };

    Email.send(emailOptions).then((message) => {
      alert(message);
    });
  });
});
