import { useState } from "react";

import { ClientEmail } from "../types/clientEmail.type";

import { SpinnerCircularFixed } from "spinners-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";

export const Contact = () => {
  const [clientEmailData, setClientEmailData] = useState<ClientEmail>({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const sanitizeValue = (value: string, name: string) => {
    let newValue = "";

    if (name === "email") {
      newValue = value.replace(
        /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
        ""
      );
    }

    if (name === "subject") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (newValue.length > 0) return newValue;
    return value;
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const cleanValue = sanitizeValue(
      e.currentTarget.value,
      e.currentTarget.name
    );

    setClientEmailData({
      ...clientEmailData,
      [e.currentTarget.name]: cleanValue,
    });
  };

  const onSubmitClientEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = clientEmailData.email;
    const subject = clientEmailData.subject;
    const message = clientEmailData.message;

    if (!email || !subject || !message) {
      toast.error("Hay campos incompletos o incorrectos");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    //SEND EMAIL FUNCTION
  };

  return (
    <div className="">
      <ShoppingCart></ShoppingCart>
      <MobileMenu></MobileMenu>
      <div className="app">
        <Top></Top>
        <NavBar></NavBar>
      </div>
      <section className="">
        <ToastContainer />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-bold text-center text-blue-500">
            Contactanos
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
            ¿Tenés alguna duda? Envianos un mail mediante el siguiente
            formulario y te responderemos a la brevedad. También podés
            comunicarte vía WhatsApp, cuyo número está ubicado en la parte
            inferior de la página.
          </p>
          <form
            onSubmit={(e) => onSubmitClientEmail(e)}
            action="#"
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Tu E-mail
              </label>
              <input
                onChange={(e) => onChangeHandler(e)}
                value={clientEmailData.email}
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Asunto
              </label>
              <input
                onChange={(e) => onChangeHandler(e)}
                value={clientEmailData.subject}
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400"
                placeholder="Breve descripción de tu consulta"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Tu Mensaje
              </label>
              <textarea
                onChange={(e) => onChangeHandler(e)}
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-400 focus:border-orange-400"
                placeholder="Escribí tu mensaje..."
              ></textarea>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="mt-4 mb-8 w-full lg:w-1/3 lg:mx-auto rounded-md px-6 py-3 font-medium bg-gray-500 text-white border border-gray-300 hover:text-white hover:bg-gray-400 duration-200"
              >
                {loading && (
                  <SpinnerCircularFixed
                    className="inline-block w-full mr-2"
                    size={30}
                    thickness={170}
                    color="white"
                  ></SpinnerCircularFixed>
                )}
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
