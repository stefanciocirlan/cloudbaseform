import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const successToast = () => toast.success("All the inputs are saved!", {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
export const errorToast = () => toast.error("There is an error into the form!", {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
