import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
  return (
    <div className="container-sm  bg-dark d-flex w-100 justify-content-center align-items-center mt-3 br-5 w-100">
      <div className=" m-5 p-1 ">
        <h1 className=" col-6 mb-7 text-align-center title ">MoForrm</h1>

        <p className=" col-6 text-align-center  ">
          Veuillez vous inscrire à nos cours de génie logiciel en remplissant le
          formulaire ci dessous.
        </p>
      </div>

      <form className=" form container w-30">
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Prénom</label>
          <input className="form-control" type="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="filiere">Filiére</label>
          <select name="" id="">
            <option value="Fullstack JS">Fullstack JS</option>
            <option value="data science">data science</option>
            <option value="cybersecurity">cybersecurity</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Veuillez laissez un commentaire pour spécifier vos objectifs.
          </label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>

        <div className="submit">
          <button type="submit" className="mb-3 btn btn-primary">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};
export default App;
