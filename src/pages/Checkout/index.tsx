import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from "phosphor-react";
import { useMemo } from "react";
import { ItemCart } from "../../components/ItemCart";
import { useCart } from "../../contexts/useCart";

export function Checkout() {
  const { cartItems, total } = useCart();

  return (
    <div className=" flex flex-1 px-40 m-auto gap-8 h-full bg-background">
      <div className="flex flex-col">
        <h2 className="text-titleXS font-baloo2 text-subtitle">
          Complete seu pedido
        </h2>

        <div className=" bg-card flex flex-col p-10 rounded-md gap-8 mt-4">
          <div className="flex gap-2">
            <MapPin size={24} className={"text-yellowDark"} />
            <div className="flex flex-col flex-1">
              <h3 className="text-regularM text-subtitle font-roboto">
                Endereço de Entrega
              </h3>
              <p className="text-regularS text-text font-roboto">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="flex">
            <form className="flex flex-col w-full gap-4">
              <input
                className="w-2/6 h-10 border p-3 border-button bg-input rounded placeholder:text-regularS focus:outline-none placeholder:text-label placeholder:font-roboto focus:border-yellowDark text-text text-regularS font-roboto "
                type="text"
                placeholder="CEP"
              />
              <input
                className="h-10 border p-3 border-button bg-input rounded placeholder:text-regularS focus:outline-none placeholder:text-label placeholder:font-roboto focus:border-yellowDark text-text text-regularS font-roboto "
                type="text"
                placeholder="Rua"
              />
              <div className="flex gap-3">
                <input
                  className="w-2/6 h-10 border p-3 border-button bg-input rounded placeholder:text-regularS focus:outline-none placeholder:text-label placeholder:font-roboto focus:border-yellowDark text-text text-regularS font-roboto "
                  type="text"
                  placeholder="Número"
                />
                <input
                  className="w-4/6 h-10 border p-3 border-button bg-input rounded placeholder:text-regularS focus:outline-none placeholder:text-label placeholder:font-roboto focus:border-yellowDark text-text text-regularS font-roboto "
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              <div className="flex gap-3">
                <input
                  className="w-2/6 h-10 border p-3 border-button bg-input rounded placeholder:text-regularS focus:outline-none placeholder:text-label placeholder:font-roboto focus:border-yellowDark text-text text-regularS font-roboto "
                  type="text"
                  placeholder="Bairro"
                />
                <input
                  className="w-3/6 h-10 border p-3 border-button bg-input rounded placeholder:text-regularS focus:outline-none placeholder:text-label placeholder:font-roboto focus:border-yellowDark text-text text-regularS font-roboto "
                  type="text"
                  placeholder="Cidade"
                />
                <input
                  className="w-1/6 h-10 border p-3 border-button bg-input rounded placeholder:text-regularS focus:outline-none placeholder:text-label placeholder:font-roboto focus:border-yellowDark text-text text-regularS font-roboto "
                  type="text"
                  placeholder="UF"
                />
              </div>
            </form>
          </div>
        </div>

        <div className=" bg-card flex flex-col p-10 rounded-md gap-8 mt-4">
          <div className="flex  gap-2">
            <CurrencyDollarSimple size={24} className="text-purple" />
            <div className="flex flex-col">
              <h3 className="text-regularM font-roboto text-subtitle">
                Pagamento
              </h3>
              <p className="text-regularS text-text font-roboto">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="w-full h-12 flex   disabled:bg-purpleLight disabled:border-purple border border-button gap-3 justify-start items-center p-4 rounded-md bg-button">
              <CreditCard size={16} className="text-purple" />
              <p className="text-buttonS text-text font-roboto">
                CARTÃO DE CRÉDITO
              </p>
            </button>

            <button className="w-full h-12 flex  disabled:bg-purpleLight disabled:border-purple border border-button gap-3 justify-start items-center p-4 rounded-md bg-button">
              <Bank className="text-purple" />
              <p className="text-buttonS text-text font-roboto">
                CARTÃO DE DÉBITO
              </p>
            </button>

            <button className="w-full h-12 flex  disabled:bg-purpleLight disabled:border-purple border border-button gap-3 justify-start items-center p-4 rounded-md bg-button">
              <Money className="text-purple" />
              <p className="text-buttonS text-text font-roboto">DINHEIRO</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col  w-2/5 ">
        <h2 className="text-titleXS font-baloo2 text-subtitle">
          Cafés selecionados
        </h2>

        <div className=" bg-card flex flex-col p-10 rounded-md rounded-tr-5xl rounded-bl-5xl gap-8 mt-4 ">
          <ul>
            {cartItems.map((item) => (
              <ItemCart key={item.id} coffee={item} />
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-regularS font-roboto text-text">
                Total de itens
              </p>
              <p className="text-regularM font-roboto text-text">{total}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-regularS font-roboto text-text">Entrega</p>
              <p className="text-regularM font-roboto text-text">R$ 3,50</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-boldL font-roboto text-subtitle">Total</h3>
              <h3 className="text-boldL font-roboto text-subtitle">R$ 33,50</h3>
            </div>
          </div>

          <button className="bg-yellow rounded-md h-12 hover:bg-yellowDark transition-colors">
            <p className="text-buttonG font-roboto text-white">
              CONFIRMAR O PEDIDO
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
