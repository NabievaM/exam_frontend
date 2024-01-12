import { useToast } from "vue-toastification";

const toast = useToast();

type optObj = {
  position?: string | any;
  timeout?: number;
  closeOnClick?: boolean;
  pauseOnFocusLoss?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  draggablePercent?: number;
  showCloseButtonOnHover?: boolean;
  hideProgressBar?: boolean;
  closeButton?: string | any;
  icon?: boolean;
  rtl?: boolean;
};

function successToast(msg: string, options?: optObj) {
  return toast.success(msg, options);
}
function infoToast(msg: string, options?: optObj) {
  return toast.info(msg, options);
}
function warningToast(msg: string, options?: optObj) {
  return toast.warning(msg, options);
}
function errorToast(msg: string, options?: optObj) {
  return toast.error(msg, options);
}

export { successToast, errorToast, infoToast, warningToast };
