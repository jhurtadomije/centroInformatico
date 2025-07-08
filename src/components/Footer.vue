<template>
  <footer>
    <div class="footer-content">
      <div class="footer-logo">Centro Informático</div>
      <div class="footer-info">
        <div>
          <strong>Contacto:</strong>  
          <div>Granada, Granada</div>
          <div>Tel: <a href="tel:958123456">952 12 34 56</a></div>
          <div>Email: <a href="mailto:info@centroinformatico.es">info@centroinformatico.es</a></div>
        </div>
        <div>
          <strong>Redes:</strong>
          <a href="#">Facebook</a> · <a href="#">LinkedIn</a>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      © 2024 Centro Informático · <a href="#">Aviso legal</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #202b38;
  color: #fff;
  padding: 2em 1em 1em;
}
.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
}
.footer-logo {
  font-weight: bold;
  font-size: 1.15em;
  margin-bottom: 0.7em;
}
.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  font-size: 0.97em;
}
.footer-info a {
  color: #4db6ac;
}
.footer-legal {
  margin-top: 2em;
  text-align: center;
  font-size: 0.97em;
  color: #bcd1ea;
}
.footer-legal a {
  color: #ff7b29;
  text-decoration: underline;
}
@media (min-width: 700px) {
  .footer-content {
    flex-direction: row;
    gap: 3em;
    justify-content: space-between;
    align-items: flex-start;
  }
}

</style>
