import {toast} from 'react-hot-toast'


const toastError = (message: string) => {
    return toast.error(message, {
      duration: 4000,
      position: "bottom-center",
    });
  };
  
  const toastSuccess = (message: string) => {
    return toast.success(message, {
      duration: 4000,
      position: "bottom-center",
      
    });
  };
  
export { toastError, toastSuccess };