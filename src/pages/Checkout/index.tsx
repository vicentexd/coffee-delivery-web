import { MapPin } from "phosphor-react";

export function Checkout() {
  return (
    <div>
      <div>
        <h2>Complete seu pedido</h2>

        <div>
          <div>
            <MapPin size={24} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div>
            <form>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <div>
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="Uf" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
