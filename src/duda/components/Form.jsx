import { useRef } from "react";
import { Button } from "primereact/button";
import "./ButtonDemon.css";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
export const Form = ({ tipo }) => {
 
  const toast = useRef(null);

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: `Se envio la ${tipo}`,
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: `No se envio la ${tipo}`,
      life: 3000,
    });
  };

  const confirm1 = () => {
    confirmDialog({
      message: `¿Seguro que desea enviar la ${tipo}?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
    });
  };

  return (
    // Suggestions

    <div className="card p-3">
      <ConfirmDialog />
      <div className="flex justify-content-center flex-wrap card-container">
        <Toast ref={toast} />
        <div className="grid">
          <h1>{tipo}</h1>
          <div className="field col-1 md:col-11">
            <label>Correo</label>
            <input
              id="Correo6"
              type="text"
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="field col-6 md:col-6">
            <div className="card">
              <div className="formgrid grid">
                <div className="field col-12">
                  <label>{tipo}</label>
                  <textarea
                    id="address"
                    type="text"
                    rows="4"
                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                  ></textarea>
                </div>
                <div className="field col-12 md:col-6">
                  <label>Ciudad</label>
                  <input
                    id="city"
                    type="text"
                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={confirm1}
                  icon="pi pi-check"
                  label="Confirm"
                  className="mr-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
