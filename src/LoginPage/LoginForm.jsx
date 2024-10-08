import React from 'react';
import Logo from './Logo';
import InputField from './InputField';

function LoginForm() {
  return (
    <section className="flex flex-col w-[50%] max-md:ml-0">
      <div className="flex flex-col mt-20 text-base leading-tight text-center text-black max-md:mt-10">
        <Logo />
        <div className="flex flex-col items-start pl-2 mt-5 w-full text-xl max-md:mt-10">
          <h1 className="text-3xl font-bold">Seja bem-vindo!</h1>
          <p className="mt-4 text-base font-medium">
            Ao Machado Genomics
          </p>
          <form className="w-full">
            <InputField
              label="Email"
              type="email"
              id="email"
              placeholder="fabio@mail.com"
            />
            <InputField
              label="Senha"
              type="password"
              id="password"
              placeholder="●●●●●●"
              showPasswordToggle
            />
            <a href="#" className="self-end mt-1.5 font-medium">
              Esqueceu a senha?
            </a>
            <br />
            <button
              type="submit"
              className="px-16 py-6 mt-5 text-3xl font-bold text-white whitespace-nowrap bg-green-900 rounded-xl max-md:px-5 max-md:mt-10 max-md:ml-1.5"
            >
              Entrar
            </button>
          </form>
        </div>
        <p className="self-center mt-1 font-medium max-md:mt-1">
          Não tem cadastro? Contate o administrador
        </p>
      </div>
    </section>
  );
}

export default LoginForm;