
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the page from refreshing

    const name = document.getElementById('name').value;

    alert(`Thank you for your message, ${name}!`);

    form.reset(); // Optional: clears the form after submission
  });

  const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


