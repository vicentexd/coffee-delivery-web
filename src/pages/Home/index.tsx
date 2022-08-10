import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex w-screen h-banner  bg-contain  bg-center">
        <img
          src="../../../src/assets/Background.png"
          className="w-screen absolute h-banner "
        />

        <div className="flex flex-1 w-banner justify-center items-center gap-14 mx-40">
          <div className="flex flex-col justify-between gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-titleXL font-baloo2 text-title">
                Encontre o café perfeito
                <br />
                para qualquer hora do dia
              </h1>
              <p className="text-regularL font-roboto text-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a<br />
                qualquer hora
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-3">
                <div className=" flex justify-center items-center w-8 h-8 bg-yellowDark rounded-full">
                  <ShoppingCart color="#FFFFFF" size={16} weight="fill" />
                </div>
                <p className="text-regularM text-text font-roboto">
                  Compra simples e segura
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className=" flex justify-center items-center w-8 h-8 bg-text rounded-full">
                  <Package color="#FFFFFF" size={16} weight="fill" />
                </div>
                <p className="text-regularM text-text font-roboto">
                  Embalagem mantém o café intacto
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className=" flex justify-center items-center w-8 h-8 bg-yellow rounded-full">
                  <Timer color="#FFFFFF" size={16} weight="fill" />
                </div>
                <p className="text-regularM text-text font-roboto">
                  Entrega rápida e rastreada
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className=" flex justify-center items-center w-8 h-8 bg-purple rounded-full">
                  <Coffee color="#FFFFFF" size={16} weight="fill" />
                </div>
                <p className="text-regularM text-text font-roboto">
                  O café chega fresquinho até você
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={"../../../src/assets/Banner.png"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-40">
        <h2 className="text-titleL text-subtitle font-baloo2 ">Nossos cafés</h2>

        <div>Listagem vai aqui </div>
      </div>
    </div>
  );
}
