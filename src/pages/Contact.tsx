import { ShoppingCart } from "../components/ShoppingCart";
import { MobileMenu } from "../components/MobileMenu";
import { Top } from "../components/Top";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <>
      <div className="">
        <ShoppingCart></ShoppingCart>
        <MobileMenu></MobileMenu>
        <div className="app">
          <Top></Top>
          <NavBar></NavBar>
        </div>
        <section className="">
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
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Tu E-mail
                </label>
                <input
                  type="email"
                  id="email"
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
                  type="text"
                  id="subject"
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
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Escribí tu mensaje..."
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="m-auto py-3 px-5 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg sm:w-fit hover:text-white hover:bg-gray-400 duration-200"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};
