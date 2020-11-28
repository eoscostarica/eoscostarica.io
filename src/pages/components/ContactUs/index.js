import React, { useState } from "react";
import clsx from "clsx";

import styles from "../../styles.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    companyName: "",
    comments: "",
  });

  const handleOnChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.value });
  };

  return (
    <section className={clsx(styles.sectionWhite, styles.contactUsBox)}>
      <div className={clsx("container", styles.noMarginTop)} id="contactUs">
        <div className={clsx("row", styles.flexColumn)}>
          <h1>Contáctenos</h1>
          <span>
            Conversemos. Pregúntenos cómo podemos ayudarlo a implementar la
            tecnología blockchain en su organización.
          </span>
          <form>
            <div className={styles.completeName}>
              <input
                type="text"
                className={styles.textField}
                placeholder="Nombre"
                onChange={handleOnChange("name")}
                value={formData.name}
              />
              <input
                type="text"
                className={styles.textField}
                placeholder="Apellido"
                onChange={handleOnChange("lastname")}
                value={formData.lastname}
              />
            </div>
            <input
              type="text"
              className={styles.textField}
              placeholder="Email"
              onChange={handleOnChange("email")}
              value={formData.email}
            />
            <input
              type="text"
              className={styles.textField}
              placeholder="Nombre de la compañía (opcional)"
              onChange={handleOnChange("companyName")}
              value={formData.companyName}
            />
            <textarea
              className={styles.textareaField}
              rows="4"
              placeholder="Comentarios adicionales (opcional)"
              onChange={handleOnChange("comments")}
              value={formData.comments}
            />
          </form>
          <span className={styles.contactUsMessage}>
            Solo mantendremos su información para responder a este mensaje y no
            la utilizaremos para otros propósitos.
          </span>
          <button className={styles.mainButton}>Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
